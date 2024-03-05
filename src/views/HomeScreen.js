import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  SIZES,
  COLORS,
  fontPixel,
  widthPixel,
  heightPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from '../styles';

const CardsHorizontal = ({onPress, image, title, details}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: COLORS.black,
        width: widthPixel(300),
        height: heightPixel(320),
        marginHorizontal: pixelSizeHorizontal(24),
        borderRadius: widthPixel(20),
      }}>
      <View
        style={{
          borderRadius: widthPixel(20),
          alignItems: 'center',
          justifyContent: 'center',
          width: widthPixel(300),
          height: heightPixel(220),
          backgroundColor: COLORS.white1,
        }}>
        <Image
          resizeMode="contain"
          source={image}
          style={{
            width: widthPixel(250),
            height: heightPixel(200),
          }}
        />
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          paddingHorizontal: pixelSizeHorizontal(20),
        }}>
        <Text
          style={{
            color: COLORS.white1,
            fontFamily: 'Taviraj-Bold',
            fontSize: fontPixel(18),
            lineHeight: fontPixel(38),
            paddingHorizontal: pixelSizeHorizontal(2),
          }}>
          {title}
        </Text>
        <Text
          style={{
            color: COLORS.white1,
            fontFamily: 'Taviraj-Regular',
            fontSize: fontPixel(16),
            lineHeight: fontPixel(36),
            paddingHorizontal: pixelSizeHorizontal(2),
          }}>
          {details}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const HomeScreen = ({navigation}) => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchUser = async () => {
    const token = await AsyncStorage.getItem('accessToken');
    fetch(`https://fakestoreapi.com/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer' + token,
      },
    })
      .then(async response => {
        const data = await response.json();
        //console.log(await response.json());
        setUser(data[0]);
        setIsLoading(false);
        //console.log(data);
        console.log('data', data);
      })
      .catch(err => {
        console.log('home error', err);
      });
  };

  useEffect(() => {
    fetchUser();
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLORS.white1,
          }}>
          <Text
            style={{
              color: COLORS.black,
              fontFamily: 'Taviraj-Bold',
              fontSize: fontPixel(22),
              lineHeight: fontPixel(42),
            }}>
            Loading...
          </Text>
        </View>
      ) : (
        <View style={styles.container}>
          <SafeAreaView
            style={{
              flex: 1,
              backgroundColor: COLORS.white1,
              borderBottomLeftRadius: widthPixel(35),
              borderBottomRightRadius: widthPixel(35),
            }}>
            <View
              style={{
                flex: 1,
                marginTop: pixelSizeVertical(12),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../assets/images/home_profileM.png')}
                //source={{uri: user?.avatar}}
                style={{
                  resizeMode: 'contain',
                  width: widthPixel(150),
                  height: heightPixel(100),
                }}
              />
            </View>

            <View
              style={{
                flex: 0.7,
                paddingHorizontal: pixelSizeHorizontal(10),
              }}>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{
                  textAlign: 'center',
                  color: COLORS.black,
                  fontFamily: 'Taviraj-Bold',
                  fontSize: fontPixel(22),
                  lineHeight: fontPixel(42),
                  paddingHorizontal: pixelSizeHorizontal(2),
                }}>
                {user?.name?.firstname} {user?.name?.lastname}
              </Text>

              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{
                  textAlign: 'center',
                  color: COLORS.gray5,
                  fontFamily: 'Taviraj-Bold',
                  fontSize: fontPixel(18),
                  lineHeight: fontPixel(38),
                  paddingHorizontal: pixelSizeHorizontal(2),
                }}>
                {user?.email}
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  width: widthPixel(200),
                  paddingHorizontal: pixelSizeHorizontal(10),
                  alignItems: 'center',
                }}>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={{
                    color: COLORS.gray5,
                    fontFamily: 'Taviraj-Bold',
                    fontSize: fontPixel(18),
                    lineHeight: fontPixel(38),
                    paddingHorizontal: pixelSizeHorizontal(2),
                  }}>
                  {user?.address?.city}
                </Text>

                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={{
                    color: COLORS.black,
                    fontFamily: 'Taviraj-Bold',
                    fontSize: fontPixel(16),
                    lineHeight: fontPixel(36),
                    paddingHorizontal: pixelSizeHorizontal(2),
                  }}>
                  ส่วนงาน
                </Text>
              </View>

              <View
                style={{
                  width: widthPixel(200),
                  paddingHorizontal: pixelSizeHorizontal(10),
                  alignItems: 'center',
                }}>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={{
                    color: COLORS.gray5,
                    fontFamily: 'Taviraj-Bold',
                    fontSize: fontPixel(18),
                    lineHeight: fontPixel(38),
                    paddingHorizontal: pixelSizeHorizontal(2),
                  }}>
                  {user?.phone}
                </Text>

                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={{
                    color: COLORS.black,
                    fontFamily: 'Taviraj-Bold',
                    fontSize: fontPixel(16),
                    lineHeight: fontPixel(36),
                    paddingHorizontal: pixelSizeHorizontal(2),
                  }}>
                  โทรศัพท์
                </Text>
              </View>
            </View>
          </SafeAreaView>

          <View
            style={{
              flex: 1,
              marginTop: pixelSizeVertical(10),
            }}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingVertical: pixelSizeVertical(10),
              }}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <CardsHorizontal
                    //onPress={}
                    image={require('../assets/images/home_manual.png')}
                    title="User Manual"
                    details="วิธีการใช้งาน"
                  />

                  <CardsHorizontal
                    image={require('../assets/images/home_contact.png')}
                    title="Contact Us"
                    details="ติดต่อผู้ดูแล"
                  />

                  <CardsHorizontal
                    image={require('../assets/images/home_settings.png')}
                    title="Settings"
                    details="ตั้งค่า"
                  />
                </View>
              </ScrollView>
            </ScrollView>
          </View>
        </View>
      )}
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
});
