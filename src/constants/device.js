import { Dimensions, Platform } from 'react-native';

// android
const android = Platform.OS === 'android';

// is iPhoneX, iPhoneXs, iPhoneXr, iPhoneXs Max
const iOS = Platform.OS === 'ios';
const web = Platform.OS === 'web';
const windowInfo = Dimensions.get('window');
const { height, width } = windowInfo;
const aspectRatio = height / width;

// is iPad
const { isPad } = Platform;

let iPhoneNotch = false;
if (iOS) {
  if (height === 812 || height === 844 || height === 896 || height === 926) {
    iPhoneNotch = true;
  }
}

export default {
  android,
  aspectRatio,
  height,
  iOS,
  iPhoneNotch,
  isPad,
  web,
  width
};
