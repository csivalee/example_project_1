import React, {useState} from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Platform,
  Alert,
} from 'react-native';

import ButtonComponent from '../components/ButtonComponent';
import TextInputComponent from '../components/TextInputComponent';

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

const SignInScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //eye
  const [data, setData] = useState({
    secureTextEntry: true,
  });

  //eye
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleLogin = async () => {
    fetch(`https://fakestoreapi.com/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then(async response => {
        const data = await response.json();
        /* if (data.status === '200') { */
        await AsyncStorage.setItem('@accessToken', data.token);
        const token = await AsyncStorage.getItem('@accessToken');
        navigation.navigate('Home');
        console.log('Token', token);
        /* } */
      })
      .catch(err => {
        console.log('login error', err);
      });
    /* const data = await response.json();
    if (data.status === '200 OK') {
      await AsyncStorage.setItem('@accessToken', data.accessToken);
      const accessToken = await AsyncStorage.getItem('@accessToken');
      navigation.navigate('Home');
      console.log('accessToken: ', accessToken);
    } else {
      Alert.alert(data.status, data.message, [
        {
          text: 'OK',
          onPress: () => console.log('username or password is incorrect'),
        },
      ]);
    } */
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        //keyboardVerticalOffset={Header.HEIGHT}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={{flex: 1}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: pixelSizeVertical(100),
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: pixelSizeHorizontal(20),
              marginVertical: pixelSizeVertical(20),
              height: heightPixel(200),
            }}>
            <Image
              source={require('../assets/images/login_image.png')}
              style={{
                resizeMode: 'contain',
                width: widthPixel(360),
                height: heightPixel(200),
              }}
            />
          </View>
          <View
            style={{
              alignItems: 'center',
              paddingHorizontal: pixelSizeHorizontal(10),
              paddingVertical: pixelSizeVertical(10),
              marginBottom: pixelSizeVertical(20),
            }}>
            <Text
              style={{
                color: COLORS.black,
                textAlign: 'center',
                fontFamily: 'Taviraj-Bold',
                fontSize: fontPixel(24),
                lineHeight: fontPixel(44),
                paddingHorizontal: pixelSizeHorizontal(2),
                width: '100%',
              }}>
              ยินดีต้อนรับ
            </Text>
            <Text
              style={{
                color: COLORS.gray5,
                textAlign: 'center',
                fontFamily: 'Taviraj-Bold',
                fontSize: fontPixel(18),
                lineHeight: fontPixel(38),
                paddingHorizontal: pixelSizeHorizontal(2),
                width: '100%',
              }}>
              ใช้ username : mor_2314 และ Password : 83r5^_ เข้าสู่ระบบ
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              paddingHorizontal: pixelSizeHorizontal(24),
            }}>
            <TextInputComponent
              label="Username"
              labelValue={username}
              onChangeText={userName => setUsername(userName)}
              placeholderText="example.t"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              customStyle={{backgroundColor: COLORS.white5}}
            />

            <Text
              style={{
                color: COLORS.black,
                fontFamily: 'Taviraj-Bold',
                fontSize: fontPixel(18),
                lineHeight: fontPixel(38),
                paddingHorizontal: pixelSizeHorizontal(2),
                width: '100%',
              }}>
              Password
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
                placeholder="password"
                labelValue={password}
                placeholderTextColor={COLORS.gray5}
                secureTextEntry={data.secureTextEntry ? true : false}
                style={{
                  flex: 1,
                  paddingHorizontal: pixelSizeHorizontal(10),
                  marginLeft: pixelSizeHorizontal(10),
                  color: COLORS.black,
                  fontFamily: 'Taviraj-Bold',
                  fontSize: fontPixel(16),
                }}
                autoCapitalize="none"
                onChangeText={userPassword => setPassword(userPassword)}
              />
              <TouchableOpacity
                style={{
                  marginRight: pixelSizeHorizontal(10),
                  marginLeft: pixelSizeHorizontal(10),
                  padding: pixelSizeHorizontal(10),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={updateSecureTextEntry}>
                {data.secureTextEntry ? (
                  <Image
                    source={require('../assets/icons/login_hidden.png')}
                    style={{
                      resizeMode: 'contain',
                      tintColor: COLORS.gray5,
                      width: widthPixel(20),
                      height: heightPixel(20),
                    }}
                  />
                ) : (
                  <Image
                    source={require('../assets/icons/login_eye.png')}
                    style={{
                      resizeMode: 'contain',
                      tintColor: COLORS.gray5,
                      width: widthPixel(20),
                      height: heightPixel(20),
                    }}
                  />
                )}
              </TouchableOpacity>
            </View>

            <ButtonComponent
              buttonTitle="เข้าสู่ระบบ"
              customStyleContainer={{
                backgroundColor: COLORS.black,
              }}
              customStyleText={{color: COLORS.white1}}
              onPress={handleLogin}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white1,
  },
});
