import IntercomClient from './IntercomClient';

let __instance;

const getInstance = () => {
  if (!__instance) {
    __instance = new IntercomClient();
  }
  return __instance;
};

export const registerIdentifiedUser = options => {
  return getInstance().registerIdentifiedUser(options);
};

export const sendTokenToIntercom = token => {
  return getInstance().sendTokenToIntercom(token);
};

export const updateUser = options => {
  return getInstance().updateUser(options);
};

export const registerUnidentifiedUser = () => {
  return getInstance().registerUnidentifiedUser();
};

export const reset = () => {
  return getInstance().reset();
};

export const logEvent = (eventName, metaData) => {
  return getInstance().logEvent(eventName, metaData);
};

export const handlePushMessage = () => {
  return getInstance().handlePushMessage();
};

export const displayMessenger = () => {
  return getInstance().displayMessenger();
};

export const hideMessenger = () => {
  return getInstance().hideMessenger();
};

export const displayMessageComposer = () => {
  return getInstance().displayMessageComposer();
};

export const displayMessageComposerWithInitialMessage = message => {
  return getInstance().displayMessageComposerWithInitialMessage(message);
};

export const displayConversationsList = () => {
  return getInstance().displayConversationsList();
};

export const getUnreadConversationCount = () => {
  return getInstance().getUnreadConversationCount();
};

export const displayHelpCenter = () => {
  return getInstance().displayHelpCenter();
};

export const setLauncherVisibility = (visibility: String) => {
  return getInstance().setLauncherVisibility(visibility);
};

export const setInAppMessageVisibility = (visibility: String) => {
  return getInstance().setInAppMessageVisibility(visibility);
};

export const setupAPN = deviceToken => {
  return getInstance().setupAPN(deviceToken);
};

export const registerForPush = () => {
  return getInstance().registerForPush();
};

export const setUserHash = userHash => {
  return getInstance().setUserHash(userHash);
};

export const setBottomPadding = padding => {
  return getInstance().setBottomPadding(padding);
};

export const addEventListener = (type, handler) => {
  return getInstance().addEventListener(type, handler);
};

export const removeEventListener = (type, handler) => {
  return getInstance().removeEventListener(type, handler);
};

export default IntercomClient;
