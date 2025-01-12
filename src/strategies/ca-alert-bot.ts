import { RodFusWalletsChannel } from "../channels/rod-fus-wallets";

const ALERT_CHANNEL_ID = "1316963536676851772";
const DISPLAY_NAME = "Ca_Alert_Bot";
function areConditionsValidForAlert(address: string, details: AddressDetails) {
  const lastAlertTime = details.strategiesLastAlertTime?.[DISPLAY_NAME];

  if (lastAlertTime && Date.now() - lastAlertTime < 60 * 60 * 1000)
    return false;

  const mentions = details.mentions.filter(
    (mention) => mention.channelId !== RodFusWalletsChannel.channelId
  );

  if (mentions.length >= 2) {
    logger.debug(`Alerting for ${address}`);
    return true;
  }

  logger.debug(`Not alerting for ${address}`);
  return false;
}

function filterMentions(mentions: Mention[]) {
  return mentions.filter(
    (mention) => mention.channelId !== RodFusWalletsChannel.channelId
  );
}

export const CaAlertBot: Strategy = {
  displayName: DISPLAY_NAME,
  alertChannelId: ALERT_CHANNEL_ID,
  areConditionsValidForAlert,
  filterMentions,
};
