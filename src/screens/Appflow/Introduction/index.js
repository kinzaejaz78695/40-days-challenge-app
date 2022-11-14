import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Pressable,
  TextInput,
  Image,
  LogBox,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import React, { useState } from 'react';


// import DeviceInfo from 'react-native-device-info';

// or ES6+ destructured imports

import { DeviceInfo, getApplicationName, getBrand, getUniqueId, getManufacturer, getDeviceId } from 'react-native-device-info';
LogBox.ignoreAllLogs();
const Introduction  =() =>{
  
  let deviceid = getDeviceId();

  const [gender, setGender] = useState('');
  const [name, setname] = useState('')
  const asy = async () => {
    try {
      // await AsyncStorage.setItem('name', name)
      // AsyncStorage.setItem('name', name)
      // JSON.stringify() //yah use kartay hn string ma change karna kay liya
      let obj = {
        name: name,
        gender: gender,
      }
      AsyncStorage.setItem('user', JSON.stringify(obj));
      let user = await AsyncStorage.getItem('user');
      let parsed = JSON.parse(user);
      alert(parsed.name);
      alert(parsed.gender);
      // alert(name)
      // props.navigation.goBack()
    } catch (e) {
      // saving error
    }
  }

  // const getAsyncValue =async()=>{
  //   const valuedate=await AsyncStorage.getItem("deviceid")
  // await AsyncStorage.getItem('key');  
  //   console.log('valuedate',valuedate)
  // }



  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.floatingbutton}></View>
     
    </SafeAreaView>
  );
};

export default Introduction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollviewcontainer: {
    flexGrow: 1,
    width: responsiveWidth(88),
    alignSelf: 'center',
  },
  linearGradient: {
    flex: 1,
    // alignItems: 'center',
    // paddingHorizontal: responsiveWidth(10),
    // zIndex: 1,
  },
  innercontainer: {
    width: responsiveWidth(88),
    alignSelf: 'center',
    marginTop: responsiveHeight(3.5),
  },
  emptytxt: {
    color: '#CFCFCF',
    fontFamily: fontFamily.Poppins_Regular,
    fontSize: responsiveFontSize(2.5),
  },
  imgstyle: {
    width: responsiveWidth(33),
    height: responsiveWidth(33),
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderRadius: responsiveWidth(100),
  },

  toprightstyle: {
    width: responsiveWidth(100),
    height: responsiveWidth(100),
    // backgroundColor: 'black',
    position: 'absolute',
    zIndex: 1,
    right: responsiveWidth(-40),
    top: responsiveHeight(-12),
  },
  bottomleftstyle: {
    width: responsiveWidth(110),
    height: responsiveWidth(110),
    // backgroundColor: 'black',
    position: 'absolute',
    zIndex: 1,
    left: responsiveWidth(-48),
    bottom: responsiveHeight(-32),
  },
  topleftstyle: {
    width: responsiveWidth(100),
    height: responsiveWidth(100),
    // backgroundColor: 'black',
    position: 'absolute',
    zIndex: 1,
    left: responsiveWidth(-58),
    top: responsiveHeight(-12),
  },
  bottomrightstyle: {
    width: responsiveWidth(110),
    height: responsiveWidth(110),
    // backgroundColor: 'black',
    position: 'absolute',
    zIndex: 1,
    right: responsiveWidth(-42),
    bottom: responsiveHeight(-32),
  },
  txt1: {
    fontFamily: fontFamily.Sans_Regular,
    color: '#fff',
    fontSize: responsiveFontSize(2.7),
    marginTop: responsiveHeight(2),
    alignSelf: 'center',
  },
  txt2: {
    fontFamily: fontFamily.Sans_Regular,
    color: '#fff',
    fontSize: responsiveFontSize(2.3),
    marginTop: responsiveHeight(2),
  },
  secondview: {
    width: responsiveWidth(80),
  },
  txtinputstyle: {
    borderBottomWidth: responsiveWidth(0.1),
    borderColor: '#fff',
    paddingVertical: responsiveHeight(0.2),
    width: responsiveWidth(78),

    marginTop: responsiveHeight(0.5),
    alignSelf: 'center',
    // backgroundColor: 'red',

    fontFamily: fontFamily.Sans_Regular,
    color: '#fff',
    fontSize: responsiveFontSize(2.1),
  },
  gendercontainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: responsiveWidth(65),
    alignSelf: 'center',
    marginTop: responsiveHeight(3),
  },
  genderimg: {
    width: responsiveWidth(12),
    height: responsiveHeight(9),
    // backgroundColor: 'red',
    // borderRadius: responsiveWidth(100),
  },
  genderview: {
    width: responsiveWidth(17),
    height: responsiveWidth(17),
    backgroundColor: '#fff',
    borderRadius: responsiveWidth(100),

    alignItems: 'center',
    justifyContent: 'center',

    overflow: 'hidden',
  },
  nexttxt: {
    fontFamily: fontFamily.Sans_Regular,
    color: '#fff',
    fontSize: responsiveFontSize(2.3),
  },
  nextview: {
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginTop: responsiveHeight(11),
    paddingHorizontal: responsiveWidth(6),
    paddingVertical: responsiveHeight(1.5),
    borderRadius: responsiveWidth(100),
  },
});
