import * as React from 'react';
import {Text, View, TextInput} from 'react-native';

import {
  SIZES,
  COLORS,
  fontPixel,
  widthPixel,
  heightPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from '../styles';

const TextInputComponent = ({
  label,
  labelValue,
  placeholderText,
  iconType,
  customStyle,
  ...rest
}) => {
  return (
    <View>
      <Text
        style={{
          color: COLORS.black,
          fontFamily: 'Taviraj-Bold',
          fontSize: fontPixel(18),
          lineHeight: fontPixel(38),
          paddingHorizontal: pixelSizeHorizontal(2),
          width: '100%',
        }}>
        {label}
      </Text>
      <View
        style={{
          height: heightPixel(60),
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: COLORS.white5,
          borderRadius: widthPixel(10),
          marginTop: pixelSizeVertical(10),
          marginBottom: pixelSizeVertical(10),
        }}>
        <TextInput
          selectionColor={'black'}
          value={labelValue}
          style={{
            flex: 1,
            paddingHorizontal: pixelSizeHorizontal(10),
            marginLeft: pixelSizeHorizontal(10),
            color: COLORS.black,
            fontFamily: 'Taviraj-Bold',
            fontSize: fontPixel(16),
          }}
          numberOfLines={1}
          placeholder={placeholderText}
          placeholderTextColor={COLORS.gray5}
          {...rest}
        />
      </View>
    </View>
  );
};

export default TextInputComponent;
