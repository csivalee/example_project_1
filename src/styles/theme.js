import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const COLORS = {
  primary: '#FECE2F',

  black: '#1A1A1A',

  gray1: '#333533', //second text Rx, path loss ....
  gray2: '#666666', //textinput placeholder, image arrow down
  gray3: '#757575', //statusbar
  gray4: '#888888', //date
  gray5: '#A9A9A9',

  white1: '#FFFFFF',
  white2: '#F2F2F2',
  white3: '#F9FAFB',
  white4: '#E8E8E8', //disabled
  white5: '#EEEEEE',
  white6: '#DDDDDD',

  _success: '#28A745',
  _info: '#27A2B8',
  _warning: '#FFC107',
  _danger: '#DC3545',

  cancel: '#0057FF',
  badge: '#FD5E53',
  red: '#EE1202',
  success: '#008159',
  greenCrayola: '#00B67C',
  colorPie: {
    color1: '#ea3f34',
    color2: '#f4922c',
    color3: '#f4ba34',
    color4: '#b8c231',
    color5: '#78ac40',
    color6: '#368475',
    color7: '#40a6ba',
  },
  colorPieRadius: {
    color3: '#f4ba34',
    color4: '#b8c231',
    color5: '#78ac40',
    color6: '#368475',
  },
  colorPieUmbo: {
    color1: '#ea3f34',
    color2: '#f4922c',
  },
  colorDaily: {
    color1: '#ea3f34',
    color2: '#f4922c',
    color3: '#f4ba34',
    color4: '#b8c231',
  },
  colorMonthly: {
    color5: '#78ac40',
    color6: '#368475',
    color7: '#40a6ba',
  },
  failnumberColor: {
    pa: '#FF5733',
    pt: '#2E87F9',
  },
  spinner: ['#FECE2F', '#C7A73B', '#786D47', '#000000'],
};

export const SIZES = {
  width,
  height,
};

const appTheme = {COLORS, SIZES};

export default appTheme;
