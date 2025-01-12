// GLOGAL LOGGER
import pino from "pino";

declare global {
  var logger: pino.Logger;
}

global.logger = pino({
  level: "debug",
  transport: {
    targets: [
      {
        target: "pino-pretty",
        options: { colorize: true },
      },
      {
        target: "pino/file",
        options: { destination: "./logs/app.log" },
      },
    ],
  },
});

// DOTENV
import dotenv from "dotenv";
dotenv.config();
if (!process.env.DISCORD_TOKEN || !process.env.SEND_TARGET_CHANNEL_ID) {
  logger.error("DISCORD_TOKEN or SEND_TARGET_CHANNEL_ID is not set");
  process.exit(1);
}
