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
import {useSelector, useDispatch} from 'react-redux';

import {fontFamily} from '../../../constants/fonts';
import {TouchableRipple} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import DatePicker from 'react-native-date-picker';
import {FAB, Portal, Provider} from 'react-native-paper';
import {DateSelect} from '../../../components/dateTimePicker/dateTimePicker';
import Modal from 'react-native-modal';
const ChallengeList = props => {
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
  const [modalVisible, setModalVisible] = useState(false);
  const [state, setState] = React.useState({open: false});
  const [modaltype, setModaltype] = useState('');
  const onStateChange = ({open}) => setState({open});
  const [iscompleted, setIsCompleted] = useState(false);
  const {open} = state;
  const [currentday, setCurrentday] = useState(3);
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
  ]);

  const renderItem = ({item, index}) => {
    console.log('MYINDEX=======', index);
    console.log('LENGTH========', list.length);
    return (
      <View
        style={[
          styles.singleview,
          {
            marginRight: index === list.length - 1 ? responsiveWidth(4) : null,
            backgroundColor:
              item.id === currentday
                ? isdarkmode
                  ? seconddark
                  : second
                : isdarkmode
                ? soliddark
                : solid,
            height:
              item.id === currentday
                ? responsiveWidth(24)
                : responsiveWidth(18),

            marginTop: item.id === currentday ? responsiveWidth(-3) : null,
          },
        ]}>
        <Text style={styles.daytxt}>Day</Text>
        <Text style={styles.daytxt}>{item.id}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <LinearGradient
        colors={isdarkmode ? doubledark : double}
        style={styles.linearGradient}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'space-between',
          }}>
          <View>
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
              <View
                style={{
                  flexDirection: 'row',
                  width: responsiveWidth(92),
                  alignSelf: 'center',
                  alignItems: 'center',
                  //   justifyContent: 'center',
                  paddingBottom: responsiveHeight(6),
                  paddingTop: responsiveHeight(2),
                }}>
                <FastImage
                  source={appImages.runner}
                  style={styles.runnerimg}
                  resizeMode="contain"
                />
                <View
                  style={{
                    width: responsiveWidth(65),
                    marginLeft: responsiveWidth(2.5),
                  }}>
                  <Text
                    style={[
                      styles.challengetxt,
                      {color: isdarkmode ? soliddark : solid},
                    ]}>
                    Challenge name
                  </Text>
                  <Text
                    style={[
                      styles.loremtxt,
                      {color: isdarkmode ? seconddark : second},
                    ]}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.mainbottom}>
              <FlatList
                data={list}
                renderItem={renderItem}
                horizontal={true}
                contentContainerStyle={styles.listcontainer}
                showsHorizontalScrollIndicator={false}
              />
              <View style={styles.txtview}>
                <Text style={styles.centertxt}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.fixedfooter}>
            <TouchableOpacity
              style={[
                styles.sharebutton,
                {backgroundColor: isdarkmode ? soliddark : solid},
              ]}
              activeOpacity={0.7}>
              <Text style={styles.sharetxt}>Share</Text>
            </TouchableOpacity>
            {iscompleted == false ? (
              <TouchableOpacity
                onPress={() => {
                  setModaltype('challengecompleted');
                  setModalVisible(true);
                  setIsCompleted(true);
                }}
                style={styles.challengebutton}
                activeOpacity={0.7}>
                <Text
                  style={[
                    styles.challengebuttontxt,
                    {color: isdarkmode ? seconddark : second},
                  ]}>
                  Challenge completed
                </Text>
              </TouchableOpacity>
            ) : null}
          </View>
        </ScrollView>

        <FAB.Group
          open={open}
          icon={open ? appImages.crossfab : appImages.iconfab}
          color={'#fff'}
          fabStyle={[
            styles.fabstylemain,
            {
              backgroundColor: open
                ? isdarkmode
                  ? seconddark
                  : second
                : isdarkmode
                ? soliddark
                : solid,
            },
          ]}
          actions={[
            {
              icon: appImages.restartfab,

              onPress: () => {
                setModaltype('restart');
                setModalVisible(true);
              },
              style: [
                styles.fabStyle,
                {backgroundColor: isdarkmode ? soliddark : solid},
              ],
            },
            {
              icon: appImages.hidefab,

              onPress: () => {
                setModaltype('hidefab');
                setModalVisible(true);
              },
              style: [
                styles.fabStyle,
                {backgroundColor: isdarkmode ? soliddark : solid},
              ],
            },
            {
              icon: appImages.notificationsfab,

              onPress: () =>
                props.navigation.navigate('NotificationStackScreens'),
              style: [
                styles.fabStyle,
                {backgroundColor: isdarkmode ? soliddark : solid},
              ],
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
        <Modal
          animationIn={'fadeIn'}
          animationOut={'zoomOut'}
          statusBarTranslucent={true}
          backdropColor={'black'}
          backdropOpacity={0.7}
          isVisible={modalVisible}
          onBackButtonPress={() => setModalVisible(!modalVisible)}>
          <View style={styles.modalview}>
            {modaltype == 'challengecompleted' ? (
              <>
                <Text
                  style={[
                    styles.modaltxt1,
                    {color: isdarkmode ? soliddark : solid},
                  ]}>
                  Challenge Completed!
                </Text>
                <Text
                  style={[
                    styles.modaltxt2,
                    {color: isdarkmode ? soliddark : solid},
                  ]}>
                  You Got 3 Coins
                </Text>
                <TouchableOpacity
                  style={styles.modalbutton}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text
                    style={[
                      styles.modaltxt3,
                      {color: isdarkmode ? seconddark : second},
                    ]}>
                    OK
                  </Text>
                </TouchableOpacity>
              </>
            ) : modaltype == 'hidefab' ? (
              <>
                <Image
                  source={appImages.hideimg}
                  style={{
                    width: responsiveWidth(12),
                    height: responsiveWidth(12),
                    alignSelf: 'center',
                  }}
                />
                <Text
                  style={[
                    styles.modaltxt2,
                    {color: isdarkmode ? soliddark : solid},
                  ]}>
                  Do You want to Hide this Challenge?
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    alignSelf: 'flex-end',
                  }}>
                  <TouchableOpacity
                    style={styles.modalbutton}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text
                      style={[
                        styles.modaltxt3,

                        {color: isdarkmode ? seconddark : second},
                      ]}>
                      No
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.modalbutton}
                    onPress={() => {
                      setModalVisible(!modalVisible);
                      props.navigation.navigate('HiddenChallenges');
                    }}>
                    <Text
                      style={[
                        styles.modaltxt3,
                        {color: isdarkmode ? soliddark : solid},
                      ]}>
                      Yes
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : modaltype == 'restart' ? (
              <>
                <Image
                  source={appImages.hideimg}
                  style={{
                    width: responsiveWidth(12),
                    height: responsiveWidth(12),
                    alignSelf: 'center',
                  }}
                />
                <Text
                  style={[
                    styles.modaltxt2,
                    {color: isdarkmode ? soliddark : solid},
                  ]}>
                  Do You want to Restart this Challenge?
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    alignSelf: 'flex-end',
                  }}>
                  <TouchableOpacity
                    style={styles.modalbutton}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text
                      style={[
                        styles.modaltxt3,

                        {color: isdarkmode ? seconddark : second},
                      ]}>
                      No
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.modalbutton}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text
                      style={[
                        styles.modaltxt3,
                        {
                          color: isdarkmode ? soliddark : solid,
                        },
                      ]}>
                      Yes
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : null}
          </View>
        </Modal>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default ChallengeList;

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
    // paddingBottom: responsiveHeight(3),
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
    width: responsiveWidth(24),
    height: responsiveWidth(24),

    // backgroundColor: 'red',
    // alignSelf: 'center',
  },
  mainbottom: {
    marginTop: responsiveHeight(2),
  },
  challengetxt: {
    fontSize: responsiveFontSize(2.6),
    fontFamily: fontFamily.Sans_Regular,
  },
  loremtxt: {
    fontSize: responsiveFontSize(2.1),
    fontFamily: fontFamily.Sans_Regular,
    marginTop: responsiveHeight(1.6),
  },
  listcontainer: {
    paddingTop: responsiveHeight(3),
  },
  singleview: {
    width: responsiveWidth(18),
    height: responsiveWidth(18),

    marginLeft: responsiveWidth(4),
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    marginBottom: responsiveHeight(2.5),
    borderRadius: responsiveWidth(3),
  },
  daytxt: {
    color: '#fff',
    fontSize: responsiveFontSize(2.1),
    fontFamily: fontFamily.Sans_Regular,
  },
  txtview: {
    backgroundColor: '#fff',
    width: responsiveWidth(87),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: responsiveHeight(3),
  },
  centertxt: {
    paddingHorizontal: responsiveWidth(8),
    paddingVertical: responsiveHeight(5),
    fontFamily: fontFamily.Sans_Regular,
    color: '#000000',
    opacity: 0.5,
    fontSize: responsiveFontSize(2.6),
  },
  sharebutton: {
    alignSelf: 'center',
    marginTop: responsiveHeight(2.4),
    width: responsiveWidth(35),
    paddingVertical: responsiveHeight(1.6),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: responsiveWidth(4),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  challengebutton: {
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
    paddingVertical: responsiveHeight(2.3),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: responsiveWidth(4),
    width: responsiveWidth(87),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  sharetxt: {
    fontFamily: fontFamily.Sans_Regular,
    color: '#fff',
    fontSize: responsiveFontSize(2.4),
  },
  challengebuttontxt: {
    fontFamily: fontFamily.Sans_Regular,

    fontSize: responsiveFontSize(2.4),
  },
  fixedfooter: {
    marginBottom: responsiveHeight(3),
  },
  fabicon2: {
    width: responsiveWidth(17),
    height: responsiveWidth(17),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: responsiveWidth(100),
  },
  fabStyle: {
    height: responsiveWidth(16),
    width: responsiveWidth(16),
    // marginLeft: responsiveWidth(2),
    // borderRadius: responsiveWidth(100),
    alignItems: 'center',
    justifyContent: 'center',
    // marginLeft: responsiveWidth(3)
    left: responsiveWidth(2),
    // alignSelf:"center"
  },
  fabstylemain: {
    height: responsiveWidth(16),
    width: responsiveWidth(16),
    // marginLeft: responsiveWidth(2),
    // borderRadius: responsiveWidth(100),
    alignItems: 'center',
    justifyContent: 'center',
    // marginRight: responsiveWidth(6.5)
    // alignSelf:"center"
  },
  modalview: {
    // height: responsiveHeight(30),
    alignSelf: 'center',
    width: responsiveWidth(75),
    backgroundColor: '#fff',
    borderRadius: responsiveWidth(7),
    justifyContent: 'space-between',
    paddingVertical: responsiveHeight(4.5),
  },
  modaltxt1: {
    fontFamily: fontFamily.Poppins_SemiBold,

    fontSize: responsiveFontSize(2.7),
    alignSelf: 'center',
  },
  modaltxt2: {
    fontFamily: fontFamily.Poppins_Regular,
    fontSize: responsiveFontSize(2.2),
    alignSelf: 'center',
    paddingVertical: responsiveHeight(3),
    width: responsiveWidth(55),
    textAlign: 'center',
  },
  modaltxt3: {
    fontFamily: fontFamily.Poppins_Regular,
    fontSize: responsiveFontSize(2.2),
  },
  modalbutton: {
    alignSelf: 'flex-end',
    marginRight: responsiveWidth(7),
  },
});
