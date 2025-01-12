import { channels } from "../../channels";
import { getMessageLink, timeAgo } from "../../utils";

export function getFieldValue(mention: Mention) {
  if (!channels[mention.channelId]) {
    return;
  }

  let value = `🔗 [${channels[mention.channelId].displayName.padEnd(
    23,
    " "
  )}](${getMessageLink(mention)}) | ${timeAgo(mention.timestamp)}`;

  const details = channels[mention.channelId].getDetails?.(mention);

  if (details && details.length > 0) {
    value += ` | ${details.join(" | ")}`;
  }

  return value;
}
