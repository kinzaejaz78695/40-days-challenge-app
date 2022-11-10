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
import {Button, Menu, Divider, Provider} from 'react-native-paper';
import {appImages} from '../../../assets/utilities';
import {Modal} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {BlurView} from '@react-native-community/blur';
const KeepSakes = props => {
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
  const [modalvisible, setModalVisible] = useState(false);

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const [list, setList] = useState([
    {
      id: 1,
      keepsake: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
    },
    {
      id: 2,
      keepsake:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod  sadipscing elitr, sed diam nonumy eirmod ',
    },
  ]);

  const renderItem = ({item}) => {
    return (
      <Pressable
        activeOpacity={0.7}
        onPress={() => {
          showModal();
        }}
        disabled={item.id !== 1 ? true : false}
        style={{
          backgroundColor: '#fff',
          borderRadius: responsiveWidth(3),
          width: responsiveWidth(40),
          marginTop: responsiveHeight(3),
          paddingVertical: responsiveHeight(8),
          alignSelf: 'flex-start',
        }}>
        {item.id == 1 ? (
          <View
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: '#fff',
              borderRadius: responsiveWidth(3),
              zIndex: 1,
              opacity: 0.975,
              width: responsiveWidth(40),
            }}>
            <View
              style={{
                backgroundColor: 'rgba(0,0,0,0.04)',
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                borderRadius: responsiveWidth(3),
              }}></View>
          </View>
        ) : null}

        <Text style={[styles.txtstyle, {width: responsiveWidth(40)}]}>
          {item.keepsake}
        </Text>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={isdarkmode ? doubledark : double}
        style={styles.linearGradient}>
        <MainHeader {...props} headertxt={'Keepsakes'} />
        <FlatList
          data={list}
          renderItem={renderItem}
          contentContainerStyle={{
            paddingHorizontal: responsiveWidth(6),
          }}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: 'space-between',
          }}
        />
        <View
          style={{
            paddingTop: 50,
            flexDirection: 'row',
            justifyContent: 'center',
          }}></View>
      </LinearGradient>
      <Modal visible={modalvisible} onDismiss={hideModal}>
        <View
          style={{
            backgroundColor: '#fff',
            width: responsiveWidth(80),
            alignSelf: 'center',
            borderRadius: responsiveWidth(10),
            alignItems: 'center',
            paddingVertical: responsiveHeight(3),
            paddingHorizontal: responsiveWidth(2),
          }}>
          <Image
            source={appImages.alert}
            style={{
              width: responsiveWidth(13),
              height: responsiveWidth(13),
              resizeMode: 'contain',
            }}
          />
          <Text
            style={{
              color: isdarkmode ? soliddark : solid,
              fontFamily: fontFamily.Poppins_Regular,
              fontSize: responsiveFontSize(2.4),
              paddingVertical: responsiveHeight(3),
            }}>
            Oops! Keepsake Locked
          </Text>
          <TouchableOpacity
            onPress={() => hideModal()}
            activeOpacity={0.65}
            style={{
              width: responsiveWidth(68),
              backgroundColor: isdarkmode ? seconddark : second,
              paddingVertical: responsiveHeight(1),
              borderRadius: responsiveWidth(7),
            }}>
            <Text
              style={{
                fontFamily: fontFamily.Poppins_Regular,
                fontSize: responsiveFontSize(2),
                // paddingVertical: responsiveHeight(0.5),
                width: responsiveWidth(60),
                textAlign: 'center',
                color: '#fff',
                alignSelf: 'center',
              }}>
              Unlock Keepsake with{'\n'} 20 coins
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default KeepSakes;

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
    color: '#787878',
    fontFamily: fontFamily.Sans_Regular,
    fontSize: responsiveFontSize(1.9),
    // alignSelf: 'center',
    textAlign: 'center',
  },
});
