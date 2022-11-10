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
const DailyJournal = props => {
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
  const getSelectedDayEvents = date => {
    let markedDates = {};
    markedDates[date] = {
      selected: true,
      color: '#00B0BF',
      textColor: '#FFFFFF',
    };
    let serviceDate = moment(date);
    serviceDate = serviceDate.format('DD.MM.YYYY');
    setSelectedDate(serviceDate);
    console.log('THE SELCTED DATE========', selectedDate);
    setMarkedDates(markedDates);
    setTextdate(moment(date).format('ddd, MMMM YY'));
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.floatingbutton}></View>
      <LinearGradient
        colors={isdarkmode ? doubledark : double}
        style={styles.linearGradient}>
        <MainHeader {...props} headertxt={'Daily Journal'} />
        <ScrollView contentContainerStyle={styles.scrollviewcontainer}>
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
            {selectedDate !== '' ? (
              <>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontFamily: fontFamily.Sans_Regular,
                    fontSize: responsiveFontSize(2.3),
                  }}>
                  {textdate}
                </Text>
                <TouchableOpacity
                  activeOpacity={0.65}
                  onPress={() => props.navigation.navigate('WriteNotes')}>
                  <Image
                    source={appImages.whiteeditpencil}
                    style={{
                      width: responsiveWidth(5.5),
                      height: responsiveWidth(5.5),
                    }}
                  />
                </TouchableOpacity>
              </>
            ) : null}
          </View>
          <Calendar
            style={{
              width: responsiveWidth(88),
              alignSelf: 'center',
            }}
            enableSwipeMonths
            initialDate="2022-04-01"
            onMonthChange={item => {
              console.log('THE MONTHS', item);
            }}
            onVisibleMonthsChange={item => {
              console.log('THE MONTHS VISIBLE', item);
            }}
            theme={{
              backgroundColor: '#ffffff',
              calendarBackground: '#ffffff',
              textSectionTitleColor: '#b6c1cd',
              textSectionTitleDisabledColor: '#d9e1e8',
              selectedDayBackgroundColor: isdarkmode ? soliddark : solid,
              selectedDayTextColor: '#ffffff',
              todayTextColor: '#00adf5',
              dayTextColor: '#2d4150',
              textDisabledColor: '#d9e1e8',
              dotColor: isdarkmode ? soliddark : solid,
              selectedDotColor: '#ffffff',
              arrowColor: 'orange',
              disabledArrowColor: '#d9e1e8',
              monthTextColor: 'blue',
              indicatorColor: 'blue',
              textDayFontFamily: 'monospace',
              textMonthFontFamily: 'monospace',
              textDayHeaderFontFamily: 'monospace',
              textDayFontWeight: '300',
              textMonthFontWeight: 'bold',
              textDayHeaderFontWeight: '300',
              textDayFontSize: 16,
              textMonthFontSize: 16,
              textDayHeaderFontSize: 16,
            }}
            markedDates={markedDates}
            onDayPress={day => {
              getSelectedDayEvents(day.dateString);
              console.log(day);
            }}
            // // Initially visible month. Default = now
            // initialDate={'2012-03-01'}
            // // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
            // minDate={'2012-05-10'}
            // // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
            // maxDate={'2012-05-30'}
            // // Handler which gets executed on day press. Default = undefined
            // onDayPress={day => {
            //   console.log('selected day', day);
            // }}
            // month={month => {
            //   console.log('selected day', month);
            // }}
            // // Handler which gets executed on day long press. Default = undefined
            // onDayLongPress={day => {
            //   console.log('selected day', day);
            // }}
            // // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
            // monthFormat={'yyyy MM'}
            // // Handler which gets executed when visible month changes in calendar. Default = undefined
            // onMonthChange={month => {
            //   console.log('month changed', month);
            // }}
            // // Hide month navigation arrows. Default = false
            // hideArrows={true}
            // // Replace default arrows with custom ones (direction can be 'left' or 'right')
            // renderArrow={direction => <Arrow />}
            // // Do not show days of other months in month page. Default = false
            // hideExtraDays={true}
            // // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
            // // day from another month that is visible in calendar page. Default = false
            // disableMonthChange={true}
            // // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
            // firstDay={1}
            // // Hide day names. Default = false
            // hideDayNames={true}
            // // Show week numbers to the left. Default = false
            // showWeekNumbers={true}
            // // Handler which gets executed when press arrow icon left. It receive a callback can go back month
            // onPressArrowLeft={subtractMonth => subtractMonth()}
            // // Handler which gets executed when press arrow icon right. It receive a callback can go next month
            // onPressArrowRight={addMonth => addMonth()}
            // // Disable left arrow. Default = false
            // disableArrowLeft={true}
            // // Disable right arrow. Default = false
            // disableArrowRight={true}
            // // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
            // disableAllTouchEventsForDisabledDays={true}
            // // Replace default month and year title with custom one. the function receive a date as parameter
            // renderHeader={date => {
            //   /*Return JSX*/
            // }}
            // // Enable the option to swipe between months. Default = false
            // enableSwipeMonths={true}
            hideExtraDays={true}
          />
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default DailyJournal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollviewcontainer: {
    flexGrow: 1,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    flex: 1,
    // alignItems: 'center',
    // paddingHorizontal: responsiveWidth(10),
    // zIndex: 1,
  },
});
