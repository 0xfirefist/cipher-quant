import { MoniXSmartAlphaChannel } from "../channels/moni-x-smart-alpha";

const ALERT_CHANNEL_ID = "1323921538331836446";
const DISPLAY_NAME = "3x_Alpha_Follow_Test";
function areConditionsValidForAlert(_: string, details: AddressDetails) {
  const moniXMentions = details.mentions.filter(
    (mention) => mention.channelId === MoniXSmartAlphaChannel.channelId
  );

  return moniXMentions.length >= 3;
}

function filterMentions(mentions: Mention[]) {
  return mentions.filter(
    (mention) => mention.channelId === MoniXSmartAlphaChannel.channelId
  );
}

export const ThreeXAlphaFollowTest: Strategy = {
  displayName: DISPLAY_NAME,
  alertChannelId: ALERT_CHANNEL_ID,
  areConditionsValidForAlert,
  filterMentions,
};
