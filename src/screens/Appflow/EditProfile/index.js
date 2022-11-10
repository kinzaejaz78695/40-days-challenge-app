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

const EditProfile = props => {
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
  const [gender, setGender] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.floatingbutton}></View>
      <LinearGradient
        colors={isdarkmode ? doubledark : double}
        style={styles.linearGradient}>
        <MainHeader {...props} headertxt={'Edit Profile'} />
        <ScrollView contentContainerStyle={styles.scrollviewcontainer}>
          <View
            style={
              {
                //   zIndex: 1,
              }
            }>
            <View
              style={{
                width: responsiveWidth(33),
                height: responsiveWidth(33),
                backgroundColor: '#fff',
                alignSelf: 'center',
                borderRadius: responsiveWidth(100),
                marginTop: responsiveHeight(7),
              }}>
              <FastImage
                source={appImages.avatar}
                resizeMode="contain"
                style={styles.imgstyle}
              />
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  bottom: responsiveWidth(0.1),
                  right: responsiveWidth(0.1),
                }}
                onPress={() => props.navigation.navigate('EditAvatar')}>
                <Image
                  source={appImages.whiteeditpencil}
                  resizeMode="contain"
                  style={{
                    width: responsiveWidth(6),
                    height: responsiveWidth(6),
                  }}
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.txt2}>Enter name</Text>
            <TextInput style={styles.txtinputstyle} />
            <Text style={styles.txt2}>Gender</Text>
            <View style={styles.gendercontainer}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={[
                  styles.genderview,
                  {
                    backgroundColor: gender === 'male' ? 'lightgray' : '#fff',
                  },
                ]}
                onPress={() => setGender('male')}>
                <FastImage
                  source={appImages.male}
                  resizeMode={'contain'}
                  style={[
                    styles.genderimg,
                    {
                      marginRight: responsiveWidth(0.4),
                    },
                  ]}
                />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                style={[
                  styles.genderview,
                  {
                    backgroundColor: gender === 'female' ? 'lightgray' : '#fff',
                  },
                ]}
                onPress={() => setGender('female')}>
                <FastImage
                  source={appImages.female}
                  resizeMode={'contain'}
                  style={[
                    styles.genderimg,
                    {
                      marginLeft: responsiveWidth(0.4),
                    },
                  ]}
                />


                
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                style={[
                  styles.genderview,
                  {
                    backgroundColor:
                      gender === 'thirdgender' ? 'lightgray' : '#fff',
                  },
                ]}
                onPress={() => setGender('thirdgender')}>
                <FastImage
                  source={appImages.thirdgender}
                  resizeMode={'contain'}
                  style={styles.genderimg}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.nextview} activeOpacity={0.7}
            onPress={()=>props.navigation.goBack()}
            >
              <Text
                style={[
                  styles.nexttxt,
                  {color: isdarkmode ? seconddark : second},
                ]}>
                Save Changes
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView> 
  );
};

export default EditProfile;

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
