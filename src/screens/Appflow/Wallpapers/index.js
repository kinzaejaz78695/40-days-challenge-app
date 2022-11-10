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
import {MyButton} from '../../../components/MyButton';
const Wallpapers = props => {
  const [list, setList] = useState([
    {
      id: 1,
      flag: false,
    },
    {
      id: 2,
      flag: false,
    },
    {
      id: 3,
      flag: false,
    },
    {
      id: 4,
      flag: true,
    },
  ]);
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.65}
        style={{
          marginLeft: responsiveWidth(5.6),
        }}>
        {item.flag == false ? (
          <View
            style={{
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}>
            <Image
              source={appImages.tree}
              style={{
                width: responsiveWidth(18),
                height: responsiveWidth(24),
              }}
            />
          </View>
        ) : (
          <View
            style={{
              width: responsiveWidth(18),
              height: responsiveWidth(24),
              backgroundColor: isdarkmode ? seconddark : second,
              alignItems: 'center',
              justifyContent: 'center',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: '#fff',
                fontFamily: fontFamily.Sans_Regular,
                fontSize: responsiveFontSize(2.4),
              }}>
              Load{'\n'}
              More
            </Text>
          </View>
        )}
      </TouchableOpacity>
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
        <MainHeader {...props} headertxt={'Wallpapers'} />
        <ScrollView contentContainerStyle={styles.scrollviewcontainer}>
          <MyButton
            title={'Download'}
            myStyles={{
              alignSelf: 'flex-end',
              marginTop: responsiveHeight(2),
              marginRight: responsiveWidth(7),
            }}
          />
          <Image
            source={appImages.tree}
            style={{
              width: responsiveWidth(85),
              height: responsiveHeight(60),
              alignSelf: 'center',
              resizeMode: 'cover',
              marginVertical: responsiveHeight(2),
            }}
          />
          <FlatList data={list} renderItem={renderItem} horizontal />
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Wallpapers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollviewcontainer: {
    flexGrow: 1,
    // paddingHorizontal: responsiveWidth(5),
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
