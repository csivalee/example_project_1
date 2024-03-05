import * as React from 'react';
import {Text, TouchableOpacity, View, ScrollView, Image} from 'react-native';

import {
  SIZES,
  COLORS,
  fontPixel,
  widthPixel,
  heightPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from '../styles';

import {useNavigation} from '@react-navigation/native';

const OptionFTTxComponent = () => {
  const navigation = useNavigation();

  const MainTopic = ({title}) => {
    return (
      <View
        style={{
          justifyContent: 'center',
          paddingLeft: pixelSizeHorizontal(24),
          marginBottom: pixelSizeVertical(10),
        }}>
        <Text
          style={{
            color: COLORS.black,
            fontFamily: 'Taviraj-Bold',
            fontSize: fontPixel(18),
            lineHeight: fontPixel(38),
            paddingHorizontal: pixelSizeHorizontal(2),
          }}>
          {title}
        </Text>
      </View>
    );
  };

  const OptionItem = ({icon, label, onPress}) => {
    return (
      <View
        style={{
          width: widthPixel(100),
          paddingBottom: pixelSizeVertical(10),
        }}>
        <TouchableOpacity
          style={{alignItems: 'center', justifyContent: 'center'}}
          onPress={onPress}>
          <View
            style={{
              backgroundColor: COLORS.black,
              width: widthPixel(60),
              height: widthPixel(60),
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: widthPixel(10),
            }}>
            <Image
              source={icon}
              resizeMode="contain"
              style={{
                width: widthPixel(30),
                height: heightPixel(30),
              }}
            />
          </View>

          <Text
            style={{
              color: COLORS.black,
              fontFamily: 'Taviraj-SemiBold',
              fontSize: fontPixel(14),
              lineHeight: fontPixel(36),
              paddingHorizontal: pixelSizeHorizontal(2),
            }}>
            {label}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{flex: 1, marginTop: pixelSizeVertical(20)}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <MainTopic title="Part 1" />

        <View
          style={{
            justifyContent: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: pixelSizeHorizontal(10),
            }}>
            <OptionItem
              icon={require('../assets/icons/p1.png')}
              label="Option 1"
            />
            <OptionItem
              icon={require('../assets/icons/p2.png')}
              label="Option 2"
            />
            <OptionItem
              icon={require('../assets/icons/p3.png')}
              label="Option 3"
            />
          </View>
        </View>

        <View
          style={{
            justifyContent: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: pixelSizeHorizontal(10),
            }}>
            <OptionItem
              icon={require('../assets/icons/p4.png')}
              label="Option 4"
            />
          </View>
        </View>

        <View
          style={{
            justifyContent: 'center',
            paddingHorizontal: pixelSizeHorizontal(10),
            paddingVertical: pixelSizeVertical(10),
          }}>
          <View
            style={{
              borderBottomColor: COLORS.black,
              borderBottomWidth: 2,
            }}
          />
        </View>

        <MainTopic title="Part 2" />

        <View
          style={{
            justifyContent: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: pixelSizeHorizontal(10),
            }}>
            <OptionItem
              icon={require('../assets/icons/p5.png')}
              label="Option 5"
            />
            <OptionItem
              icon={require('../assets/icons/p6.png')}
              label="Option 6"
            />
            <OptionItem
              icon={require('../assets/icons/p7.png')}
              label="Option 7"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default OptionFTTxComponent;
