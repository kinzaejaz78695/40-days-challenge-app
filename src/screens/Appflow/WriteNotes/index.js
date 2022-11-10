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
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import moment from 'moment';
import {LocaleConfig} from 'react-native-calendars';
import {useSelector, useDispatch} from 'react-redux';

// LocaleConfig.locales['fr'] = {
//   monthNames: [
//     'Janvier',
//     'Février',
//     'Mars',
//     'Avril',
//     'Mai',
//     'Juin',
//     'Juillet',
//     'Août',
//     'Septembre',
//     'Octobre',
//     'Novembre',
//     'Décembre',
//   ],
//   monthNamesShort: [
//     'Janv.',
//     'Févr.',
//     'Mars',
//     'Avril',
//     'Mai',
//     'Juin',
//     'Juil.',
//     'Août',
//     'Sept.',
//     'Oct.',
//     'Nov.',
//     'Déc.',
//   ],
//   dayNames: [
//     'Dimanche',
//     'Lundi',
//     'Mardi',
//     'Mercredi',
//     'Jeudi',
//     'Vendredi',
//     'Samedi',
//   ],
//   dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
//   today: "Aujourd'hui",
// };
// LocaleConfig.defaultLocale = 'fr';
const WriteNotes = props => {
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
  const [markedDates, setMarkedDates] = useState();
  const [selectedDate, setSelectedDate] = useState('');
  const [textdate, setTextdate] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.floatingbutton}></View>
      <LinearGradient
        colors={isdarkmode ? doubledark : double}
        style={styles.linearGradient}>
        <MainHeader {...props} headertxt={'Daily Journal'} />
        <ScrollView contentContainerStyle={styles.scrollviewcontainer}>
          <Text
            style={{
              color: '#FFFFFF',
              fontFamily: fontFamily.Sans_Regular,
              fontSize: responsiveFontSize(2.3),
              marginLeft: responsiveWidth(5),
              marginTop: responsiveHeight(5),
              marginBottom: responsiveHeight(6),
            }}>
            Wed, June 22
          </Text>
          <View
            style={{
              width: responsiveWidth(88),
              alignSelf: 'center',
              backgroundColor: isdarkmode ? soliddark : solid,
              paddingVertical: responsiveHeight(3),
              paddingHorizontal: responsiveWidth(4),
              borderTopLeftRadius: responsiveWidth(3),
              borderTopRightRadius: responsiveWidth(3),
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                color: '#FFFFFF',
                fontFamily: fontFamily.Sans_Regular,
                fontSize: responsiveFontSize(2.3),
              }}>
              Write Notes
            </Text>
            <TouchableOpacity activeOpacity={0.65}>
              <Image
                source={appImages.writenotes}
                style={{
                  width: responsiveWidth(6),
                  height: responsiveWidth(6),
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: responsiveHeight(50),
              backgroundColor: '#fff',
              width: responsiveWidth(86),
              alignSelf: 'center',
            }}>
            <TextInput
              style={{
                width: responsiveWidth(78),
                alignSelf: 'center',
                fontFamily: fontFamily.Sans_Regular,
                fontSize: responsiveFontSize(2),
              }}
              multiline
              placeholder={'Type Here'}
            />
            <View
              style={{
                width: responsiveWidth(78),
                alignSelf: 'center',
                height: responsiveHeight(0.2),
                backgroundColor: 'lightgray',
              }}></View>
          </View>
          <View
            style={{
              marginTop: responsiveHeight(3),
              width: responsiveWidth(86),
              alignItems: 'flex-end',
              alignSelf: 'center',
            }}>
            <TouchableOpacity
              onPress={() => props.navigation.goBack()}
              style={{
                backgroundColor: isdarkmode ? seconddark : second,
                paddingHorizontal: responsiveWidth(4),
                paddingVertical: responsiveHeight(1),
                borderRadius: responsiveWidth(100),
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 0.27,
                shadowRadius: 4.65,

                elevation: 6,
              }}
              activeOpacity={0.6}>
              <Text
                style={{
                  color: '#fff',
                  fontFamily: fontFamily.Sans_Regular,
                  fontSize: responsiveFontSize(2.1),
                }}>
                Save
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default WriteNotes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollviewcontainer: {
    flexGrow: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  linearGradient: {
    flex: 1,
    // alignItems: 'center',
    // paddingHorizontal: responsiveWidth(10),
    // zIndex: 1,
  },
});
