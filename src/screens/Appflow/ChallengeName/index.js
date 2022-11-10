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
import {fontFamily} from '../../../constants/fonts';
import {TouchableRipple} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import DatePicker from 'react-native-date-picker';
import {DateSelect} from '../../../components/dateTimePicker/dateTimePicker';
import {useSelector, useDispatch} from 'react-redux';

const ChallengeName = props => {
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
  const [date, setDate] = useState('Select Date');
  console.log('DATE', date);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <LinearGradient
        colors={isdarkmode ? doubledark : double}
        style={styles.linearGradient}>
        <View style={styles.maintop}>
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
                400{'  '}
              </Text>
              <FastImage
                source={appImages.coins}
                style={styles.coinstyle}
                resizeMode="contain"
              />
            </View>
          </View>
          <FastImage
            source={appImages.runner}
            style={styles.runnerimg}
            resizeMode="contain"
          />
        </View>
        <View style={styles.mainbottom}>
          <Text style={styles.challengetxt}>Challenge name</Text>
          <Text style={styles.loremtxt}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna
          </Text>

          <DateSelect
            Text={date}
            textstyle={[
              styles.buttontxt,
              {color: isdarkmode ? seconddark : second},
            ]}
            style={styles.button}
            getDate={setDate}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => props.navigation.navigate('ChallengeList')}
            activeOpacity={0.7}>
            <Text
              style={[
                styles.buttontxt,
                {color: isdarkmode ? seconddark : second},
              ]}>
              Start now
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default ChallengeName;

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
    backgroundColor: '#fff',
  },
  maintop: {
    backgroundColor: '#fff',
    paddingBottom: responsiveHeight(4.5),
    borderBottomRightRadius: responsiveWidth(7),
    borderBottomLeftRadius: responsiveWidth(7),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
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
  runnerimg: {
    width: responsiveWidth(35),
    height: responsiveWidth(35),
    // backgroundColor: 'red',
    alignSelf: 'center',
  },
  mainbottom: {
    width: responsiveWidth(85),
    alignSelf: 'center',
    marginTop: responsiveHeight(3),
  },
  challengetxt: {
    color: '#fff',
    fontSize: responsiveFontSize(2.7),
    fontFamily: fontFamily.Sans_Regular,
  },
  loremtxt: {
    color: '#DFDFDF',
    fontSize: responsiveFontSize(2.1),
    fontFamily: fontFamily.Sans_Regular,
    marginTop: responsiveHeight(1.6),
    marginBottom: responsiveHeight(4),
  },
  button: {
    backgroundColor: '#fff',
    width: responsiveWidth(48),
    alignSelf: 'center',
    paddingVertical: responsiveHeight(2.8),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(3),
    borderRadius: responsiveWidth(100),
  },
  buttontxt: {
    fontFamily: fontFamily.Sans_Regular,
    fontSize: responsiveFontSize(2.3),
  },
});
