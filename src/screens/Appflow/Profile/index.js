import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Dimensions,
  TextInput,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import FastImage from 'react-native-fast-image';
import {appImages} from '../../../assets/utilities';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useSelector, useDispatch} from 'react-redux';

import {fontFamily} from '../../../constants/fonts';
import {TouchableRipple} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modal';
const Profile = props => {
  const {
    first,
    second,
    double,
    solid,
    firstdark,
    seconddark,
    doubledark,
    soliddark,
    darkmodetext,
    isdarkmode,
  } = useSelector(state => state.userReducer);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <LinearGradient
        colors={isdarkmode ? doubledark : double}
        style={styles.linearGradient}>
        <ScrollView>
          <View style={styles.header}>
            <TouchableRipple
              onPress={() => props.navigation.goBack()}
              rippleColor="rgba(0, 0, 0, .1)"
              style={styles.drawerview}>
              <FastImage
                source={appImages.backbutton}
                resizeMode="contain"
                style={styles.drawericonstyle}
              />
            </TouchableRipple>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={[
                  styles.cointxt,
                  {color: isdarkmode ? soliddark : solid},
                ]}>
                {''}
              </Text>
            </View>
          </View>
          <FastImage
            source={appImages.avatar}
            resizeMode="contain"
            style={styles.avatarstyle}
          />
          <Text style={styles.hellotxt}>Hello, Rose</Text>
          <View style={styles.secondcontainer}>
            <TouchableRipple
              onPress={() => props.navigation.navigate('EditProfile')}
              style={[
                styles.touchables,
                {backgroundColor: isdarkmode ? soliddark : solid},
              ]}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: responsiveWidth(4),
                  alignItems: 'center',
                }}>
                <Text style={styles.txt1}>Edit Profile</Text>
                <FastImage
                  source={appImages.iconforward}
                  resizeMode="contain"
                  style={styles.imgstyle}
                />
              </View>
            </TouchableRipple>
            <TouchableRipple
              onPress={() => props.navigation.navigate('DailyJournal')}
              style={[
                styles.touchables,
                {backgroundColor: isdarkmode ? soliddark : solid},
              ]}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: responsiveWidth(4),
                  alignItems: 'center',
                }}>
                <Text style={styles.txt1}>Daily Journal</Text>
                <FastImage
                  source={appImages.iconforward}
                  resizeMode="contain"
                  style={styles.imgstyle}
                />
              </View>
            </TouchableRipple>
            <TouchableRipple
              onPress={() => console.log('PRESSED')}
              style={[
                styles.touchables,
                {backgroundColor: isdarkmode ? soliddark : solid},
              ]}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: responsiveWidth(4),
                  alignItems: 'center',
                }}>
                <Text style={styles.txt1}>Likes of Community</Text>
                <Text style={styles.txt1}>20</Text>
              </View>
            </TouchableRipple>
            <TouchableRipple
              onPress={() => console.log('PRESSED')}
              style={[
                styles.touchables,
                {backgroundColor: isdarkmode ? soliddark : solid},
              ]}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: responsiveWidth(4),
                  alignItems: 'center',
                }}>
                <Text style={styles.txt1}>Total Coins</Text>
                <Text style={styles.txt1}>20</Text>
              </View>
            </TouchableRipple>
            <TouchableRipple
              onPress={() => props.navigation.navigate('Tasks')}
              style={[
                styles.touchables,
                {
                  backgroundColor: isdarkmode ? soliddark : solid,
                  marginBottom: responsiveHeight(2),
                },
              ]}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: responsiveWidth(4),
                  alignItems: 'center',
                }}>
                <Text style={styles.txt1}>View Task</Text>
                <FastImage
                  source={appImages.iconforward}
                  resizeMode="contain"
                  style={styles.imgstyle}
                />
              </View>
            </TouchableRipple>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    // alignItems: 'center',
    // paddingHorizontal: responsiveWidth(10),
    zIndex: 1,
  },
  header: {
    width: responsiveWidth(92),
    alignSelf: 'center',
    marginTop: responsiveHeight(2.5),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  drawericonstyle: {
    width: responsiveWidth(5.3),
    height: responsiveWidth(5.3),
  },
  drawerview: {
    // backgroundColor: 'red',
    paddingHorizontal: responsiveWidth(2.5),
    paddingVertical: responsiveHeight(1),
    borderRadius: responsiveWidth(10),
  },
  coinstyle: {
    width: responsiveWidth(7),
    height: responsiveWidth(7),
  },
  cointxt: {
    fontSize: responsiveFontSize(2.1),
    fontFamily: fontFamily.Sans_Regular,
  },
  avatarstyle: {
    width: responsiveWidth(28),
    height: responsiveWidth(28),
    backgroundColor: '#fff',
    borderRadius: responsiveWidth(100),
    alignSelf: 'center',
    marginTop: responsiveHeight(1),
  },
  hellotxt: {
    color: '#fff',
    fontFamily: fontFamily.Segoe_Regular,
    fontSize: responsiveFontSize(2.7),
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
  },
  secondcontainer: {
    width: responsiveWidth(85),
    alignSelf: 'center',
    marginTop: responsiveHeight(5),
    paddingVertical: responsiveHeight(3),
    backgroundColor: '#fff',
    borderRadius: responsiveWidth(7),
    marginBottom: responsiveHeight(2),
  },
  touchables: {
    paddingVertical: responsiveHeight(2),
    width: responsiveWidth(70),
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
  },
  imgstyle: {
    width: responsiveWidth(3.5),
    height: responsiveWidth(3.5),
  },
  txt1: {
    color: '#fff',
    fontFamily: fontFamily.Segoe_Regular,
    fontSize: responsiveFontSize(2.7),
  },
});
