import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Switch,
  ScrollView,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {appImages} from '../../assets/utilities';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {fontFamily} from '../../constants/fonts';
import {Modal, Portal, Button, Provider} from 'react-native-paper';
import STYLES from '../../screens/STYLES';
import {useSelector, useDispatch} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import {
  setFirst,
  setDouble,
  setSecond,
  setSolid,
  setIsDarkMode,
} from '../../redux/actions';
const CustomDrawer = props => {
  const dispatch = useDispatch();
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
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [selected, setSelected] = useState();
  const toggleSwitch = item => {
    setIsEnabled(previousState => !previousState);
    if (item) {
      dispatch(setIsDarkMode(true));
    } else {
      dispatch(setIsDarkMode(false));
    }
  };
  const [themelist, setThemelist] = useState([
    {
      id: 1,
      doublecolors: ['red', 'blue'],
      firstcolor: 'red',
      secondcolor: 'blue',
      solidcolor: 'orange',
    },
    {
      id: 2,
      doublecolors: ['#0642FF', '#688CFF'],
      firstcolor: '#0642FF',
      secondcolor: '#688CFF',
      solidcolor: '#3667FF',
    },
    {
      id: 3,
      doublecolors: ['#E60F4E', '#CA6FE4'],
      firstcolor: '#E60F4E',
      secondcolor: '#CA6FE4',
      solidcolor: '#EC1D94',
    },
    {
      id: 4,
      doublecolors: ['red', 'blue'],
      firstcolor: 'red',
      secondcolor: 'blue',
      solidcolor: 'orange',
    },
    {
      id: 5,
      doublecolors: ['red', 'blue'],
      firstcolor: 'red',
      secondcolor: 'blue',
      solidcolor: 'orange',
    },
    {
      id: 6,
      doublecolors: ['red', 'blue'],
      firstcolor: 'red',
      secondcolor: 'blue',
      solidcolor: 'orange',
    },
    {
      id: 7,
      doublecolors: ['red', 'blue'],
      firstcolor: 'red',
      secondcolor: 'blue',
      solidcolor: 'orange',
    },
    {
      id: 8,
      doublecolors: ['red', 'blue'],
      firstcolor: 'red',
      secondcolor: 'blue',
      solidcolor: 'orange',
    },
    {
      id: 9,
      doublecolors: ['red', 'blue'],
      firstcolor: 'red',
      secondcolor: 'blue',
      solidcolor: 'orange',
    },
  ]);
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        disabled={item == selected ? true : false}
        activeOpacity={0.5}
        onPress={() => setSelected(item)}>
        {item == selected ? (
          <View
            style={{
              width: responsiveWidth(17),
              height: responsiveWidth(17),

              marginHorizontal: responsiveWidth(2),
              marginVertical: responsiveHeight(1),
            }}>
            <LinearGradient colors={item.doublecolors}>
              <View
                style={{
                  width: responsiveWidth(17),
                  height: responsiveWidth(17),
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={appImages.themeselected}
                  resizeMode={'contain'}
                  style={{
                    width: responsiveWidth(13),
                    height: responsiveWidth(13),
                  }}
                />
              </View>
            </LinearGradient>
          </View>
        ) : (
          <View
            style={{
              width: responsiveWidth(17),
              height: responsiveWidth(17),
              marginHorizontal: responsiveWidth(2),
              marginVertical: responsiveHeight(1),
            }}>
            <LinearGradient colors={item.doublecolors}>
              <View
                style={{
                  width: responsiveWidth(17),
                  height: responsiveWidth(17),
                }}></View>
            </LinearGradient>
          </View>
        )}
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <ScrollView
        contentContainerStyle={{
          backgroundColor: isdarkmode ? soliddark : solid,
          flexGrow: 1,
        }}>
        <View style={styles.subcontainer}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('ProfileStackScreens')}
            activeOpacity={0.65}
            style={styles.viewstyle}>
            <Image source={appImages.profiletab} style={styles.iconstyle} />
            <Text style={styles.txtstyle}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.65}
            style={styles.viewstyle}
            onPress={() => props.navigation.navigate('CommunityChallenges')}>
            <Image source={appImages.community} style={styles.iconstyle} />
            <Text style={styles.txtstyle}>Community Challenges</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('ActiveChallenges')}
            activeOpacity={0.65}
            style={styles.viewstyle}>
            <Image source={appImages.profiletab} style={styles.iconstyle} />
            <Text style={styles.txtstyle}>My Challenges</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.65}
            style={styles.viewstyle}
            onPress={() => props.navigation.navigate('ActiveChallenges')}>
            <Image
              source={appImages.activechallenge}
              style={styles.iconstyle}
            />
            <Text style={styles.txtstyle}>Active Challenges</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('HiddenChallenges')}
            activeOpacity={0.65}
            style={styles.viewstyle}>
            <Image source={appImages.hidechallenge} style={styles.iconstyle} />
            <Text style={styles.txtstyle}>Hide Challenges</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.65}
            style={styles.viewstyle}
            onPress={() => {
              showModal();
            }}>
            <Image source={appImages.theme} style={styles.iconstyle} />
            <Text style={styles.txtstyle}>Theme</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('KeepSakes')}
            activeOpacity={0.65}
            style={styles.viewstyle}>
            <Image source={appImages.keepsakes} style={styles.iconstyle} />
            <Text style={styles.txtstyle}>Keepsakes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.65}
            style={styles.viewstyle}
            onPress={() => props.navigation.navigate('Wallpapers')}>
            <Image source={appImages.wallpaper} style={styles.iconstyle} />
            <Text style={styles.txtstyle}>Wallpaper</Text>
          </TouchableOpacity>
          <View
            activeOpacity={0.65}
            style={[
              styles.viewstyle,
              {
                justifyContent: 'space-between',
                paddingRight: responsiveWidth(8),
              },
            ]}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={appImages.darkmode} style={styles.iconstyle} />
              <Text style={styles.txtstyle}>Dark Mode</Text>
            </View>

            <Switch
              trackColor={{false: '#f4f3f4', true: '#f4f3f4'}}
              thumbColor={isdarkmode ? '#9A9A9A' : '#9A9A9A'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={item => toggleSwitch(item)}
              value={isdarkmode}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.65}
            style={styles.viewstyle}
            onPress={() => props.navigation.navigate('BackupAndRestore')}>
            <Image source={appImages.backup} style={styles.iconstyle} />
            <Text style={styles.txtstyle}>Backup & Restore</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.65} style={styles.viewstyle}>
            <Image source={appImages.share} style={styles.iconstyle} />
            <Text style={styles.txtstyle}>Share</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.65} style={styles.viewstyle}>
            <Image source={appImages.logout} style={styles.iconstyle} />
            <Text style={styles.txtstyle}>Logout</Text>
          </TouchableOpacity>
        </View>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.containerStyle}>
          <View
            style={{
              backgroundColor: '#fff',
              //   width: responsiveWidth(88),
              width: responsiveWidth(80),
              marginLeft: responsiveWidth(9),
              paddingVertical: responsiveHeight(3),
              alignSelf: 'center',
              borderRadius: responsiveWidth(10),
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: responsiveWidth(5),
              }}>
              <Text>{''}</Text>
              <Text
                style={{
                  fontFamily: fontFamily.Poppins_Regular,
                  color: isdarkmode ? soliddark : solid,
                  fontSize: responsiveFontSize(2.3),
                }}>
                Change Theme
              </Text>
              <TouchableOpacity
                onPress={() => {
                  hideModal();
                }}>
                <Image
                  source={appImages.closeemoji}
                  style={{
                    width: responsiveWidth(4.5),
                    height: responsiveWidth(4.5),
                  }}
                />
              </TouchableOpacity>
            </View>
            <FlatList
              contentContainerStyle={{
                alignSelf: 'center',
                // backgroundColor: 'red',
                paddingVertical: responsiveHeight(3.5),
              }}
              data={themelist}
              renderItem={renderItem}
              numColumns={3}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'flex-end',
              }}>
              <TouchableOpacity
                style={styles.modalbutton}
                onPress={() => {
                  hideModal();
                }}>
                <Text
                  style={[
                    styles.modaltxt3,
                    {
                      color: isdarkmode ? seconddark : second,
                    },
                  ]}>
                  No
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalbutton}
                onPress={() => {
                  dispatch(setFirst(selected.firstcolor));
                  dispatch(setSecond(selected.secondcolor));
                  dispatch(setSolid(selected.solidcolor));
                  dispatch(setDouble(selected.doublecolors));
                  hideModal();
                }}>
                <Text
                  style={[
                    styles.modaltxt3,
                    {color: isdarkmode ? seconddark : solid},
                  ]}>
                  Yes
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  iconstyle: {
    width: responsiveWidth(5),
    height: responsiveWidth(5),
    resizeMode: 'contain',
    tintColor: '#fff',
  },
  viewstyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: responsiveHeight(3.2),
  },
  txtstyle: {
    fontFamily: fontFamily.Segoe_Regular,
    color: '#fff',
    fontSize: responsiveFontSize(2.3),
    marginLeft: responsiveWidth(2.2),
  },
  subcontainer: {
    marginLeft: responsiveWidth(7),
    marginTop: responsiveHeight(5.5),
  },
  containerStyle: {
    flex: 1,
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
