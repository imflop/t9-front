export enum OperatingSystem {
  Windows = "Windows",
  Mac = "Mac",
  Linux = "Linux",
  X11 = "X11",
  Unknown = "Unknown",
}

export function getOperatingSystem(window: Window) {
  if (window.navigator.appVersion.indexOf("Win") !== -1) {
    return OperatingSystem.Windows;
  } else if (window.navigator.appVersion.indexOf("Mac") !== -1) {
    return OperatingSystem.Mac;
  } else if (window.navigator.appVersion.indexOf("X11") !== -1) {
    return OperatingSystem.X11;
  } else if (window.navigator.appVersion.indexOf("Linux") !== -1) {
    return OperatingSystem.Linux;
  } else {
    return OperatingSystem.Unknown;
  }
}
