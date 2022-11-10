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
} from 'react-native';
import React, {useState} from 'react';
import MainHeader from '../../../components/MainHeader';
import LinearGradient from 'react-native-linear-gradient';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {fontFamily} from '../../../constants/fonts';
import EmojiSelector, {Categories} from 'react-native-emoji-selector';
import FastImage from 'react-native-fast-image';
import {appImages} from '../../../assets/utilities';
import {useSelector, useDispatch} from 'react-redux';
import {MyButton} from '../../../components/MyButton';

const Backup = props => {
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
      <View style={styles.floatingbutton}></View>
      <LinearGradient
        colors={isdarkmode ? doubledark : double}
        style={styles.linearGradient}>
        <MainHeader {...props} headertxt={'Backup'} />
        <ScrollView contentContainerStyle={styles.scrollviewcontainer}>
          <Text
            style={{
              marginVertical: responsiveHeight(2.5),
              color: '#fff',
              fontFamily: fontFamily.Sans_Regular,
              fontSize: responsiveFontSize(2.6),
              width: responsiveWidth(90),
              alignSelf: 'center',
            }}>
            Enter email on which you want your data backup
          </Text>
          <TextInput
            keyboardType="email-address"
            style={{
              width: responsiveWidth(90),
              alignSelf: 'center',
              paddingHorizontal: responsiveWidth(4),
              fontFamily: fontFamily.Sans_Regular,
              fontSize: responsiveFontSize(2.5),
              backgroundColor: '#fff',
              color: '#000',
              paddingVertical: responsiveHeight(2.8),
              marginTop: responsiveHeight(2),
            }}
            placeholder="Enter Email"
          />
          <MyButton
            title="Backup"
            myStyles={{
              marginTop: responsiveHeight(20),
            }}
            onPress={() => props.navigation.goBack()}
          />
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Backup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollviewcontainer: {
    flexGrow: 1,
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
});
