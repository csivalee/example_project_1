import * as React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {
  SIZES,
  COLORS,
  fontPixel,
  widthPixel,
  heightPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from '../styles';

const ButtonComponent = ({
  buttonTitle,
  onPress,
  customStyleContainer,
  customStyleText,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: heightPixel(60),
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: COLORS.black,
        borderRadius: widthPixel(10),
        marginTop: pixelSizeVertical(20),
        ...customStyleContainer,
      }}>
      <Text
        numberOfLines={1}
        style={{
          //color: COLORS.white,
          fontFamily: 'Taviraj-Bold',
          fontSize: fontPixel(18),
          lineHeight: fontPixel(38),
          paddingHorizontal: pixelSizeHorizontal(2),
          ...customStyleText,
        }}>
        {buttonTitle}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
