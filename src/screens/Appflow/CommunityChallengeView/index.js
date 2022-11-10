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
import {TouchableRipple} from 'react-native-paper';
const CommunityChallengeView = props => {
  const [like, setLike] = useState(false);
  const [list, setList] = useState([
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
  ]);

  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          backgroundColor: '#fff',
          paddingHorizontal: responsiveWidth(4),
          justifyContent: 'space-between',
          paddingVertical: responsiveHeight(1),
          flexDirection: 'row',
          marginBottom: responsiveHeight(2),
        }}>
        <Text
          style={[
            styles.stxt,
            {textAlign: 'center', color: isdarkmode ? '#fff' : '#000000'},
          ]}>
          Day{'\n'}
          {index + 1}
        </Text>
        <Text style={[styles.stxt, {color: '#9A9A9A'}]}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        </Text>
      </View>
    );
  };
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
        <View {...props} style={styles.main}>
          <View style={styles.header}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableRipple
                onPress={() => {
                  console.log('PRESSED'), props.navigation.goBack();
                }}
                rippleColor="rgba(0, 0, 0, .1)"
                style={styles.drawerview}>
                <FastImage
                  source={appImages.backbutton}
                  resizeMode="contain"
                  style={styles.drawericonstyle}
                />
              </TouchableRipple>
            </View>
            <TouchableOpacity
              activeOpacity={0.65}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: responsiveWidth(3.5),
              }}
              onPress={() => {
                setLike(!like);
              }}>
              <Image
                source={like ? appImages.heartred : appImages.heartempty}
                style={{
                  width: responsiveWidth(6),
                  height: responsiveWidth(6),

                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: responsiveWidth(100),
              paddingBottom: responsiveHeight(2),
            }}>
            <Image
              source={appImages.runner}
              style={{
                width: responsiveWidth(35),
                height: responsiveWidth(35),

                resizeMode: 'contain',
                alignSelf: 'center',
              }}
            />
          </View>
        </View>
        <ScrollView contentContainerStyle={styles.scrollviewcontainer}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={[styles.btxt, {marginVertical: responsiveHeight(1.5)}]}>
              Challenge name
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={appImages.heartred}
                style={{
                  width: responsiveWidth(6),
                  height: responsiveWidth(6),
                  resizeMode: 'contain',
                  marginRight: responsiveWidth(2.5),
                }}
              />
              <Text style={styles.btxt}>222</Text>
            </View>
          </View>
          <Text style={[styles.stxt, {marginBottom: responsiveHeight(4)}]}>
            Creater name
          </Text>
          <Text style={styles.stxt}>Challenge description:</Text>
          <Text
            style={[
              styles.stxt,
              {
                color: isdarkmode ? '#fff' : '#4D4D4D',
                marginVertical: responsiveHeight(2.5),
              },
            ]}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          </Text>

          <FlatList data={list} renderItem={renderItem} />
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default CommunityChallengeView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollviewcontainer: {
    flexGrow: 1,
    paddingHorizontal: responsiveWidth(6),
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
  main: {
    width: responsiveWidth(100),
    backgroundColor: '#fff',
    paddingVertical: responsiveHeight(2.5),
    borderBottomLeftRadius: responsiveWidth(7),
    borderBottomRightRadius: responsiveWidth(7),
  },
  header: {
    width: responsiveWidth(92),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
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
  headertxtstyle: {
    fontFamily: fontFamily.Sans_Regular,
    fontSize: responsiveFontSize(3.2),
    marginLeft: responsiveWidth(2),
  },
  btxt: {
    fontFamily: fontFamily.Sans_Regular,
    color: '#fff',
    fontSize: responsiveFontSize(2.6),
  },
  stxt: {
    fontFamily: fontFamily.Sans_Regular,
    color: '#fff',
    fontSize: responsiveFontSize(2.4),
  },
});
