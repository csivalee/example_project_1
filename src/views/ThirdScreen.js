import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Modal,
  Image,
  FlatList,
  ActivityIndicator,
  ScrollView,
} from 'react-native';

import ExData from '../components/data/ExData';

import {
  SIZES,
  COLORS,
  fontPixel,
  widthPixel,
  heightPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from '../styles';

const ThirdScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: pixelSizeHorizontal(24),
          paddingTop: pixelSizeVertical(20),
          paddingBottom: pixelSizeVertical(14),
        }}>
        <View
          style={{
            backgroundColor: '#FED85C',
            borderRadius: widthPixel(10),
            padding: pixelSizeHorizontal(10),
            width: widthPixel(280),
          }}>
          <Text
            ellipsizeMode="tail"
            numberOfLines={1}
            style={{
              fontFamily: 'Taviraj-Medium',
              fontSize: fontPixel(16),
              lineHeight: fontPixel(36),
              textAlign: 'center',
            }}>
            กองงานตอนนอก 06 UDN - น.OT 686 : Mobile:FTTX : (นายศุภชัย-นายสหพล)
            หนองวัวซอ (ทุกตำบล), โคกสะอาด, เชียงพิณ, นิคมสงเคราะห์, บ้านจั่น,
            หนองใหญ่ ม.8, โนนสูง, หนองไผ่, หนองไฮ, บ้านตราด
          </Text>
        </View>

        <View>
          <TouchableOpacity
            style={{
              width: widthPixel(65),
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: COLORS.black,
              borderRadius: widthPixel(10),
              padding: pixelSizeHorizontal(10),
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={{
                  resizeMode: 'contain',
                  width: widthPixel(14),
                  height: heightPixel(14),
                  tintColor: COLORS.white1,
                }}
                source={require('../assets/icons/third_pencil.png')}
              />
              <Text
                numberOfLines={1}
                style={{
                  color: COLORS.white1,
                  fontFamily: 'Taviraj-Medium',
                  fontSize: fontPixel(14),
                  lineHeight: fontPixel(34),
                  marginLeft: pixelSizeHorizontal(5),
                }}>
                Edit
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        contentContainerStyle={{paddingBottom: pixelSizeVertical(100)}}
        ListEmptyComponent={() => <EmptyComponent isFetching={isLoading} />}
        data={ExData}
        keyExtractor={item => String(item.id)}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                paddingHorizontal: pixelSizeHorizontal(24),
                paddingVertical: pixelSizeVertical(10),
              }}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  backgroundColor: COLORS.white2,
                  borderRadius: widthPixel(10),
                }}>
                <View
                  style={{
                    borderTopLeftRadius: widthPixel(10),
                    borderBottomLeftRadius: widthPixel(10),
                    //padding: pixelSizeHorizontal(2),
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: widthPixel(70),
                    backgroundColor: COLORS.black,
                  }}>
                  <Text
                    ellipsizeMode="tail"
                    numberOfLines={2}
                    style={{
                      color: COLORS.white1,
                      fontFamily: 'Taviraj-Medium',
                      fontSize: fontPixel(16),
                      lineHeight: fontPixel(36),
                      textAlign: 'center',
                      flexShrink: 1,
                    }}>
                    {item.type}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    marginLeft: pixelSizeHorizontal(10),
                    padding: pixelSizeHorizontal(8),
                  }}>
                  <Text
                    style={{
                      color: COLORS.black,
                      fontFamily: 'Taviraj-Bold',
                      fontSize: fontPixel(16),
                      lineHeight: fontPixel(36),
                    }}>
                    {index + 1}
                    {'. หมายเลข '}
                    {item.number}
                  </Text>
                  <Text
                    style={{
                      color: COLORS.gray1,
                      fontFamily: 'Taviraj-SemiBold',
                      fontSize: fontPixel(14),
                      lineHeight: fontPixel(34),
                    }}>
                    วันที่แจ้งเสีย: {item.date}
                  </Text>
                  <Text
                    style={{
                      color: COLORS.gray1,
                      fontFamily: 'Taviraj-SemiBold',
                      fontSize: fontPixel(14),
                      lineHeight: fontPixel(34),
                    }}>
                    ประเภท: {item.customerType}
                  </Text>
                  <Text
                    style={{
                      color: COLORS.gray1,
                      fontFamily: 'Taviraj-SemiBold',
                      fontSize: fontPixel(14),
                      lineHeight: fontPixel(34),
                    }}>
                    เหตุเสียเบื้องต้น: {item.broke}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ThirdScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white1,
  },
});
