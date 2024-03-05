import * as React from 'react';
import {View, Image, Text} from 'react-native';

import {
  SIZES,
  COLORS,
  fontPixel,
  widthPixel,
  heightPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from '../styles';

const HeaderComponent = () => {
  return (
    <View
      style={{
        padding: pixelSizeHorizontal(5),
      }}>
      <Image
        resizeMode="stretch"
        source={require('../assets/icons/logo.png')}
        style={{
          width: widthPixel(85),
          height: heightPixel(30),
        }}
      />
    </View>
  );
};

export default HeaderComponent;
