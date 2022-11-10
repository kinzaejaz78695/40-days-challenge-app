import {
  GoodMorning,
  ChallengeName,
  ChallengeList,
  Profile,
  AddChallenge,
  Notifications,
  RelaxingMusic,
  AudioPlayer,
  HiddenChallenges,
  EditProfile,
  Tasks,
  AddChallengeList,
  DailyJournal,
  CommunityChallenges,
  LikedChallenges,
  KeepSakes,
  ActiveChallenges,
  WriteNotes,
  CommunityChallengeView,
  EditAvatar,
  Wallpapers,
  Backup,
  BackupAndRestore,
} from '../../screens';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {appImages} from '../../assets/utilities';
import {StyleSheet, View, Text, Image} from 'react-native';
import Customtabbar from '../Customtabbar';
import FastImage from 'react-native-fast-image';
import {fontFamily} from '../../constants/fonts';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from '../CustomDrawer';
const styles = StyleSheet.create({
  mainbottom: {
    height: responsiveHeight(9),
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(10),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  imgstyle1: {
    width: responsiveWidth(5.5),
    height: responsiveWidth(5.5),
  },
  imgstyle2: {
    width: responsiveWidth(5.5),
    height: responsiveWidth(5.5),
    // backgroundColor: 'red',
  },
  pinkcontainer: {
    backgroundColor: '#CA6FE4',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    // paddingVertical: responsiveHeight(1.2),
    paddingHorizontal: responsiveWidth(3),
    justifyContent: 'space-between',
    // width: responsiveWidth(30),
    borderRadius: responsiveWidth(100),
  },
  pinkcontainer2: {
    backgroundColor: '#CA6FE4',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    // paddingVertical: responsiveHeight(0.1),
    paddingHorizontal: responsiveWidth(3),
    justifyContent: 'space-between',
    // width: responsiveWidth(30),
    borderRadius: responsiveWidth(100),
  },
  txt: {
    color: '#fff',
    fontSize: responsiveFontSize(2.1),
    fontFamily: fontFamily.Poppins_Regular,
    marginBottom: responsiveHeight(-0.6),
  },
});
const AppStack = createStackNavigator();
const TabStack = createBottomTabNavigator();
const MusicTabStack = createStackNavigator();
const NotificationTabStack = createStackNavigator();
const ProfileTabStack = createStackNavigator();
const AddTabStack = createStackNavigator();
const MyDrawerStack = createDrawerNavigator();

const MusicTab = () => {
  return (
    <MusicTabStack.Navigator screenOptions={{headerShown: false}}>
      <MusicTabStack.Screen name={'RelaxingMusic'} component={RelaxingMusic} />
    </MusicTabStack.Navigator>
  );
};
const NotificationTab = () => {
  return (
    <NotificationTabStack.Navigator screenOptions={{headerShown: false}}>
      <NotificationTabStack.Screen
        name={'Notifications'}
        component={Notifications}
      />
    </NotificationTabStack.Navigator>
  );
};
const ProfileTab = () => {
  return (
    <ProfileTabStack.Navigator screenOptions={{headerShown: false}}>
      <ProfileTabStack.Screen name={'Profile'} component={Profile} />
    </ProfileTabStack.Navigator>
  );
};
const AddTab = () => {
  return (
    <AddTabStack.Navigator screenOptions={{headerShown: false}}>
      <AddTabStack.Screen name={'AddChallenge'} component={AddChallenge} />
    </AddTabStack.Navigator>
  );
};

const Tab = props => {
  return (
    <TabStack.Navigator
      tabBar={props => <Customtabbar {...props} />}
      initialRouteName={'GoodMorning'}
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <TabStack.Screen name={'GoodMorning'} component={GoodMorning} />
      <TabStack.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              {focused ? (
                <View style={styles.pinkcontainer2}>
                  <View
                    style={{
                      alignItems: 'center',
                      marginRight: responsiveWidth(3),
                    }}>
                    <Text style={styles.txt}>Relaxing</Text>
                    <Text
                      style={[styles.txt, {marginTop: responsiveHeight(-1)}]}>
                      Music
                    </Text>
                  </View>
                  <FastImage
                    source={appImages.pinkchallengetab}
                    style={styles.imgstyle2}
                    resizeMode={'contain'}
                  />
                </View>
              ) : (
                <FastImage
                  source={appImages.relaxingtab}
                  style={styles.imgstyle1}
                  resizeMode={'contain'}
                />
              )}
            </View>
          ),
        }}
        name="MusicStackScreens"
        component={MusicTab}
      />
      <TabStack.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              {focused ? (
                <View style={styles.pinkcontainer}>
                  <Text style={[styles.txt, {marginRight: responsiveWidth(2)}]}>
                    Notification
                  </Text>
                  <FastImage
                    source={appImages.pinknotificationstab}
                    style={styles.imgstyle2}
                    resizeMode={'contain'}
                  />
                </View>
              ) : (
                <FastImage
                  source={appImages.notificationstab}
                  style={styles.imgstyle1}
                  resizeMode={'contain'}
                />
              )}
            </View>
          ),
        }}
        name="NotificationStackScreens"
        component={NotificationTab}
      />
      <TabStack.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              {focused ? (
                <View style={styles.pinkcontainer2}>
                  <View
                    style={{
                      alignItems: 'center',
                      marginRight: responsiveWidth(3),
                    }}>
                    <Text style={styles.txt}>Add</Text>
                    <Text
                      style={[styles.txt, {marginTop: responsiveHeight(-1)}]}>
                      Challenge
                    </Text>
                  </View>

                  <FastImage
                    source={appImages.pinkchallengetab}
                    style={styles.imgstyle2}
                    resizeMode={'contain'}
                  />
                </View>
              ) : (
                <FastImage
                  source={appImages.challengetab}
                  style={styles.imgstyle1}
                  resizeMode={'contain'}
                />
              )}
            </View>
          ),
        }}
        name="AddStackScreens"
        component={AddTab}
      />
      <TabStack.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              {focused ? (
                <View style={styles.pinkcontainer}>
                  <Text style={[styles.txt, {marginRight: responsiveWidth(3)}]}>
                    Profile
                  </Text>
                  <FastImage
                    source={appImages.pinkprofiletab}
                    style={styles.imgstyle2}
                    resizeMode={'contain'}
                  />
                </View>
              ) : (
                <FastImage
                  source={appImages.profiletab}
                  style={styles.imgstyle1}
                  resizeMode={'contain'}
                />
              )}
            </View>
          ),
        }}
        name="ProfileStackScreens"
        component={ProfileTab}
      />
    </TabStack.Navigator>
  );
};

const MyDrawer = () => {
  return (
    <MyDrawerStack.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        keyboardDismissMode: 'on-drag',
        headerShown: false,
        overlayColor: 'rgba(0,0,0,0.5)',
        drawerType: 'slide',
        drawerStyle: {width: responsiveWidth(92)},
      }}>
      <MyDrawerStack.Screen name="MyApp" component={App} />
    </MyDrawerStack.Navigator>
  );
};
const App = () => {
  return (
    <AppStack.Navigator
      initialRouteName={'MyTab'}
      screenOptions={{
        headerShown: false,
      }}>
      <AppStack.Screen name="MyTab" component={Tab} />
      {/* <MyDrawerStack.Screen name="MyDrawer" component={MyDrawer} /> */}
      <AppStack.Screen name={'ChallengeName'} component={ChallengeName} />
      <AppStack.Screen name={'ChallengeList'} component={ChallengeList} />
      <AppStack.Screen name={'AudioPlayer'} component={AudioPlayer} />
      <AppStack.Screen name={'EditAvatar'} component={EditAvatar} />

      <AppStack.Screen name={'HiddenChallenges'} component={HiddenChallenges} />

      <AppStack.Screen name={'EditProfile'} component={EditProfile} />
      <AppStack.Screen name={'Tasks'} component={Tasks} />
      <AppStack.Screen name={'AddChallengeList'} component={AddChallengeList} />
      <AppStack.Screen name={'DailyJournal'} component={DailyJournal} />
      <AppStack.Screen
        name={'CommunityChallenges'}
        component={CommunityChallenges}
      />
      <AppStack.Screen name={'LikedChallenges'} component={LikedChallenges} />
      <AppStack.Screen name={'KeepSakes'} component={KeepSakes} />
      <AppStack.Screen name={'ActiveChallenges'} component={ActiveChallenges} />
      <AppStack.Screen name={'WriteNotes'} component={WriteNotes} />
      <AppStack.Screen
        name={'CommunityChallengeView'}
        component={CommunityChallengeView}
      />
      <AppStack.Screen name={'Wallpapers'} component={Wallpapers} />
      <AppStack.Screen name={'Backup'} component={Backup} />
      <AppStack.Screen name={'BackupAndRestore'} component={BackupAndRestore} />
    </AppStack.Navigator>
  );
};

export default MyDrawer;
