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

const RelaxingMusic = props => {
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
  const [musiclist, setMusiclist] = useState([
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
    {id: 6},
    {id: 7},
    {id: 8},
    {id: 9},
    {id: 10},
  ]);
  const renderItem = () => {
    return (
      <TouchableOpacity
        onPress={() => props.navigation.navigate('AudioPlayer')}
        activeOpacity={0.9}
        style={{
          marginLeft: responsiveWidth(5.5),
          marginTop: responsiveHeight(2),
        }}>
        <FastImage
          resizeMode="contain"
          source={appImages.musicpic}
          style={styles.imgstyle}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: responsiveHeight(1.5),
          }}>
          <View>
            <Text
              style={{
                fontSize: responsiveFontSize(2.4),
                color: '#fff',
                fontFamily: fontFamily.Sans_Regular,
              }}>
              Song name
            </Text>
            <Text
              style={{
                fontSize: responsiveFontSize(2.4),
                color: '#fff',
                fontFamily: fontFamily.Sans_Regular,
              }}>
              2:00
            </Text>
          </View>
          <FastImage
            resizeMode="contain"
            source={appImages.musicplay}
            style={styles.imgstyle2}
          />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.floatingbutton}></View>
      <LinearGradient
        colors={isdarkmode ? doubledark : double}
        style={styles.linearGradient}>
        <MainHeader {...props} headertxt={'Relaxing Music'} />
        <View style={styles.scrollviewcontainer}>
          <Text style={styles.songtxt}>Songs</Text>

          <FlatList data={musiclist} renderItem={renderItem} numColumns={2} />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default RelaxingMusic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollviewcontainer: {flex: 1},
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
    width: responsiveWidth(42),
    height: responsiveWidth(32),
    // backgroundColor: 'red',
  },
  imgstyle2: {
    width: responsiveWidth(9),
    height: responsiveWidth(9),
    // backgroundColor: 'red',
  },
  songtxt: {
    fontFamily: fontFamily.Poppins_Regular,
    fontSize: responsiveFontSize(3),
    color: '#fff',
    marginTop: responsiveHeight(2.5),
    marginLeft: responsiveWidth(5),
  },
});
