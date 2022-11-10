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
import {MenuProvider} from 'react-native-popup-menu';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import {Modal} from 'react-native-paper';
const AddChallengeList = props => {
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
  const [modalvisible, setModalVisible] = React.useState(false);
  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const [list, setList] = useState([
    {
      id: 1,
    },
    {
      id: 2,
    },
  ]);

  const renderItem = () => {
    return (
      <View
        style={{
          backgroundColor: '#fff',
          borderRadius: responsiveWidth(3),
          alignSelf: 'center',
          width: responsiveWidth(91),
          marginTop: responsiveHeight(3),
          paddingVertical: responsiveHeight(1.2),
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: responsiveWidth(4),
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={appImages.runner}
            style={{
              width: responsiveWidth(15),
              height: responsiveWidth(15),
              marginRight: responsiveWidth(3),
            }}
          />
          <Text
            style={[
              styles.txtstyle,
              {
                width: responsiveWidth(51),
                color: isdarkmode ? seconddark : second,
              },
            ]}>
            Challenge name
          </Text>
        </View>
        <Menu>
          <MenuTrigger
            style={{
              width: responsiveWidth(5),
              height: responsiveWidth(7),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={appImages.threedots}
              style={{
                width: responsiveWidth(1.5),
                height: responsiveHeight(3.5),
                resizeMode: 'contain',
              }}
            />
          </MenuTrigger>
          <MenuOptions
            optionsContainerStyle={{
              paddingHorizontal: responsiveWidth(4),
            }}>
            <MenuOption
              onSelect={() => alert(`Save`)}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: responsiveHeight(1),
              }}>
              <Image
                source={appImages.dupdate}
                style={{
                  width: responsiveWidth(5),
                  height: responsiveWidth(5),
                  resizeMode: 'contain',
                }}
              />
              <Text
                style={{
                  fontFamily: fontFamily.Sans_Regular,
                  fontSize: responsiveFontSize(2.3),
                  color: '#4D4D4D',
                  marginLeft: responsiveWidth(4),
                }}>
                Update
              </Text>
            </MenuOption>
            <View
              style={{
                width: responsiveWidth(40),
                height: responsiveHeight(0.2),
                backgroundColor: 'lightgray',
                alignSelf: 'center',
                marginVertical: responsiveHeight(1),
              }}></View>
            <MenuOption
              onSelect={() => alert(`Save`)}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={appImages.dshare}
                style={{
                  width: responsiveWidth(5),
                  height: responsiveWidth(5),
                  resizeMode: 'contain',
                }}
              />
              <Text
                style={{
                  fontFamily: fontFamily.Sans_Regular,
                  fontSize: responsiveFontSize(2.3),
                  color: '#4D4D4D',
                  marginLeft: responsiveWidth(4),
                }}>
                Share
              </Text>
            </MenuOption>
            <MenuOption
              onSelect={() => alert(`Save`)}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: responsiveHeight(1),
              }}>
              <Image
                source={appImages.dnotification}
                style={{
                  width: responsiveWidth(5),
                  height: responsiveWidth(5),
                  resizeMode: 'contain',
                }}
              />
              <Text
                style={{
                  fontFamily: fontFamily.Sans_Regular,
                  fontSize: responsiveFontSize(2.3),
                  color: '#4D4D4D',
                  marginLeft: responsiveWidth(4),
                }}>
                Notification
              </Text>
            </MenuOption>
            <View
              style={{
                width: responsiveWidth(40),
                height: responsiveHeight(0.2),
                backgroundColor: 'lightgray',
                alignSelf: 'center',
                marginVertical: responsiveHeight(1),
              }}></View>
            <MenuOption
              onSelect={() => alert(`Save`)}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: responsiveHeight(1),
              }}>
              <Image
                source={appImages.ddelete}
                style={{
                  width: responsiveWidth(5),
                  height: responsiveWidth(5),
                  resizeMode: 'contain',
                }}
              />
              <Text
                style={{
                  fontFamily: fontFamily.Sans_Regular,
                  fontSize: responsiveFontSize(2.3),
                  color: '#4D4D4D',
                  marginLeft: responsiveWidth(4),
                }}>
                Delete
              </Text>
            </MenuOption>
          </MenuOptions>
        </Menu>
        {/* <TouchableOpacity
          activeOpacity={0.6}
          style={{
            width: responsiveWidth(5),
            height: responsiveWidth(5),
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={openMenu}>
         
        </TouchableOpacity> */}
      </View>
    );
  };

  return (
    <MenuProvider>
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={isdarkmode ? doubledark : double}
          style={styles.linearGradient}>
          <MainHeader {...props} headertxt={'Add Challenge'} />

          <FlatList
            data={list}
            renderItem={renderItem}
            contentContainerStyle={{padding: responsiveHeight(1.5)}}
          />
          <View
            style={{
              paddingTop: 50,
              flexDirection: 'row',
              justifyContent: 'center',
            }}></View>
        </LinearGradient>
        <Modal visible={modalvisible} onDismiss={hideModal}>
          <Text>Example Modal. Click outside this area to dismiss.</Text>
        </Modal>
      </SafeAreaView>
    </MenuProvider>
  );
};

export default AddChallengeList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollviewcontainer: {
    flexGrow: 1,
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
  txtstyle: {
    fontFamily: fontFamily.Sans_Regular,
    fontSize: responsiveFontSize(2.3),
  },
});
