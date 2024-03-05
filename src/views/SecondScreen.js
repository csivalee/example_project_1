import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  SafeAreaView,
  FlatList,
} from 'react-native';

import OptionFTTxComponent from '../components/OptionComponent';

import {
  SIZES,
  COLORS,
  fontPixel,
  widthPixel,
  heightPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from '../styles';

const SecondScreen = ({navigation}) => {
  const [chooseData, setChooseData] = useState('ทั้งหมด');
  const [selected, setSelected] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);

  const OptionData = [
    {
      id: '1',
      name: 'option 1',
    },
    {
      id: '2',
      name: 'option 2',
    },
  ];
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: heightPixel(150),
        }}>
        <View
          style={{
            paddingHorizontal: pixelSizeHorizontal(24),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.primary,
              width: widthPixel(150),
              height: heightPixel(60),
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: pixelSizeHorizontal(20),
              borderRadius: widthPixel(10),
              marginTop: pixelSizeVertical(20),
            }}
            onPress={() => {
              setModalVisible(true);
            }}>
            <Text
              numberOfLines={1}
              style={{
                color: COLORS.black,
                fontFamily: 'Taviraj-Bold',
                fontSize: fontPixel(16),
                lineHeight: fontPixel(36),
                paddingHorizontal: pixelSizeHorizontal(2),
              }}>
              {chooseData}
            </Text>
            <Image
              resizeMode="contain"
              source={require('../assets/icons/arrow-down.png')}
              style={{
                width: widthPixel(16),
                height: heightPixel(16),
                tintColor: COLORS.black,
              }}
            />
          </TouchableOpacity>
        </View>

        <Modal
          animationType="slide"
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
          <SafeAreaView style={{flex: 1}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                //justifyContent: "space-between",
                paddingHorizontal: 12,
                borderBottomColor: COLORS.white6,
                borderBottomWidth: 1,
                paddingBottom: 12,
                ...Platform.select({
                  android: {
                    paddingVertical: 12,
                  },
                }),
              }}>
              <TouchableOpacity
                style={{width: widthPixel(40), backgroundColor: COLORS.white1}}
                onPress={() => setModalVisible(false)}>
                <Image
                  resizeMode="contain"
                  source={require('../assets/icons/arrow-left.png')}
                  style={{
                    width: widthPixel(20),
                    height: heightPixel(20),
                    tintColor: COLORS.black,
                  }}
                />
              </TouchableOpacity>

              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: -20,
                }}>
                {/* <Image
                source={require('../../assets/logo/nt-scoms-header.png')}
                style={{
                  resizeMode: 'contain',
                  width: widthPixel(130),
                  height: heightPixel(50),
                }}
              /> */}
              </View>
              <View
                style={{width: widthPixel(40), backgroundColor: COLORS.white1}}>
                {/* <Image
                resizeMode="contain"
                source={require("../../assets/icons/arrow-left.png")}
                style={{
                  width: widthPixel(20),
                  height: heightPixel(20),
                  tintColor: COLORS.white,
                }}
              /> */}
              </View>
            </View>

            <FlatList
              showsVerticalScrollIndicator={false}
              data={OptionData}
              keyExtractor={item => String(item.id)}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderBottomColor: COLORS.white5,
                      borderBottomWidth: 1,
                      paddingHorizontal: pixelSizeHorizontal(24),
                      padding: pixelSizeVertical(10),
                      backgroundColor:
                        selected == item.id ? COLORS.white5 : COLORS.white1,
                    }}
                    onPress={() => {
                      setSelected(item.id);
                      setChooseData(item.name);
                      setModalVisible(false);
                    }}>
                    <Text
                      style={{
                        color: COLORS.black,
                        fontFamily:
                          selected == item.id
                            ? 'Taviraj-Bold'
                            : 'Taviraj-Regular',
                        fontSize: fontPixel(16),
                        lineHeight: fontPixel(36),
                      }}>
                      {item.name}
                    </Text>

                    {selected == item.id && (
                      <Image
                        resizeMode="contain"
                        source={require('../assets/icons/second_tick.png')}
                        style={{
                          width: widthPixel(22),
                          height: heightPixel(22),
                          tintColor: 'green',
                        }}
                      />
                    )}
                  </TouchableOpacity>
                );
              }}
            />
          </SafeAreaView>
        </Modal>

        <Image
          source={require('../assets/images/second_designer.png')}
          style={{
            resizeMode: 'contain',
            width: widthPixel(150),
            height: heightPixel(150),
          }}
        />
      </View>

      <View
        style={{
          flex: 3,
          backgroundColor: COLORS.primary,
          borderTopLeftRadius: widthPixel(35),
          borderTopRightRadius: widthPixel(35),
        }}>
        <OptionFTTxComponent />
      </View>
    </View>
  );
};

export default SecondScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white1,
  },
});
