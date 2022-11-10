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
  Image,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import FastImage from 'react-native-fast-image';
import {appImages} from '../../../assets/utilities';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {fontFamily} from '../../../constants/fonts';
import {TouchableRipple} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector, useDispatch} from 'react-redux';

const GoodMorning = props => {
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
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
    {
      id: 9,
    },
    {
      id: 10,
    },
    {
      id: 11,
    },
  ]);
  // console.log('THE CONSOLE SCREEN=========', STYLES.doublecolorbackground);
  const renderItem = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={[
          styles.singleview,
          {backgroundColor: isdarkmode ? soliddark : solid},
        ]}
        onPress={() => props.navigation.navigate('ChallengeName')}>
        <FastImage
          source={appImages.runner}
          style={styles.runnerimg}
          resizeMode="contain"
        />
        <Text style={styles.challengetxt}>Challenge</Text>
        <Text style={styles.challengetxt}>Name</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <LinearGradient
        colors={isdarkmode ? doubledark : double}
        style={styles.linearGradient}>
        <View style={styles.header}>
          <TouchableRipple
            onPress={() => {
              props.navigation.toggleDrawer();
            }}
            rippleColor="rgba(0, 0, 0, .1)"
            style={styles.drawerview}>
            <Image
              source={appImages.drawericon}
              resizeMode="contain"
              style={[
                styles.drawericonstyle,
                {tintColor: isdarkmode ? '#fff' : '#000'},
              ]}
            />
          </TouchableRipple>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={styles.cointxt}>400{'  '}</Text>
            <FastImage
              source={appImages.coins}
              style={styles.coinstyle}
              resizeMode="contain"
            />
          </View>
        </View>
        <View>
          <FastImage
            source={appImages.avatar}
            resizeMode="contain"
            style={styles.avatarstyle}
          />
          <Text style={styles.txt1}>Good Morning</Text>
          <Text style={styles.txt2}>Rose</Text>
          <Text
            style={[styles.loremtxt, {color: isdarkmode ? '#fff' : '#000'}]}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy
          </Text>
        </View>
        <View style={styles.secondview}>
          <Text
            style={[styles.alltxt, {color: isdarkmode ? soliddark : solid}]}>
            All Challenges
          </Text>
          <FlatList
            contentContainerStyle={styles.listcontainer}
            renderItem={renderItem}
            data={list}
            keyExtractor={item => item.id}
            numColumns={2}
          />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default GoodMorning;

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
    width: responsiveWidth(6.5),
    height: responsiveWidth(6.5),
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
    color: '#fff',
    fontSize: responsiveFontSize(2.1),
    fontFamily: fontFamily.Sans_Regular,
  },
  avatarstyle: {
    width: responsiveWidth(17),
    height: responsiveWidth(17),
    backgroundColor: '#fff',
    borderRadius: responsiveWidth(100),
    alignSelf: 'center',
    marginTop: responsiveHeight(-2.5),
  },
  txt1: {
    fontFamily: fontFamily.Segoe_Bold,
    fontSize: responsiveFontSize(2.7),
    color: '#fff',
    alignSelf: 'center',
    marginTop: responsiveHeight(1.5),
  },
  txt2: {
    fontFamily: fontFamily.Segoe_Regular,
    fontSize: responsiveFontSize(2.5),
    color: '#fff',
    alignSelf: 'center',
    marginTop: responsiveHeight(1),
  },
  loremtxt: {
    fontFamily: fontFamily.Poppins_Regular,
    fontSize: responsiveFontSize(2.1),
    alignSelf: 'center',
    marginTop: responsiveHeight(1),
    // backgroundColor: 'red',
    width: responsiveWidth(90),
    marginBottom: responsiveHeight(2),
  },
  secondview: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopRightRadius: responsiveWidth(15),
    borderTopLeftRadius: responsiveWidth(15),
  },
  alltxt: {
    fontFamily: fontFamily.Sans_Regular,

    fontSize: responsiveFontSize(2.7),
    marginTop: responsiveHeight(2.5),
    marginLeft: responsiveWidth(8),
  },
  singleview: {
    width: responsiveWidth(39),

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    borderRadius: responsiveWidth(4),
    // paddingVertical: responsiveHeight(2),
    paddingBottom: responsiveHeight(2),
    elevation: 2,
    marginLeft: responsiveWidth(7),
    marginBottom: responsiveHeight(4),
  },
  challengetxt: {
    fontFamily: fontFamily.Sans_Regular,
    color: '#FFF',
    fontSize: responsiveFontSize(2.2),
    alignSelf: 'center',
  },
  runnerimg: {
    width: responsiveWidth(30),
    height: responsiveWidth(30),
    // backgroundColor: 'red',
    alignSelf: 'center',
  },
  listcontainer: {
    marginTop: responsiveHeight(2),
  },
});
