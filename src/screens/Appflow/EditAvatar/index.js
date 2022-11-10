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
import {Modal} from 'react-native-paper';

const EditAvatar = props => {
  const [modalvisible, setModalVisible] = useState(false);

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);
  const [selectedavatar, setSelectedAvatar] = useState(appImages.avatar);
  const [list, setList] = useState([
    {
      id: 1,
      img: appImages.avatar1,
      status: 'unlocked',
    },
    {
      id: 2,
      img: appImages.avatar2,
      status: 'unlocked',
    },
    {
      id: 3,
      img: appImages.avatar3,
      status: 'unlocked',
    },
    {
      id: 4,
      img: appImages.avatar4,
      status: 'locked',
    },
    {
      id: 5,
      img: appImages.avatar5,
      status: 'locked',
    },
    {
      id: 6,
      img: appImages.avatar6,
      status: 'locked',
    },
    {
      id: 7,
      img: appImages.avatar7,
      status: 'locked',
    },
    {
      id: 8,
      img: appImages.avatar8,
      status: 'locked',
    },
  ]);
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        style={{
          borderRadius: responsiveWidth(100),
          width: responsiveWidth(18),
          height: responsiveWidth(18),
          marginBottom: responsiveHeight(3),
        }}
        onPress={() => {
          if (item.status == 'locked') {
            showModal();
          } else {
            setSelectedAvatar(item.img);
          }
        }}>
        <Image
          source={item.img}
          style={{
            resizeMode: 'contain',
            borderRadius: responsiveWidth(100),
            width: responsiveWidth(18),
            height: responsiveWidth(18),
          }}
        />
        {item.status == 'locked' ? (
          <View
            style={{
              borderRadius: responsiveWidth(100),
              width: responsiveWidth(18),
              height: responsiveWidth(18),
              position: 'absolute',
              backgroundColor: 'rgba(0,0,0,0.325)',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={appImages.yellowlock}
              style={{
                resizeMode: 'contain',
                width: responsiveWidth(6),
                height: responsiveWidth(6),
              }}
            />
          </View>
        ) : null}
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
        <MainHeader {...props} headertxt={'Avatar'} />
        <ScrollView contentContainerStyle={styles.scrollviewcontainer}>
          <Image
            source={selectedavatar}
            style={{
              resizeMode: 'contain',
              width: responsiveWidth(35),
              height: responsiveWidth(35),
              borderRadius: responsiveWidth(100),
              alignSelf: 'center',
              marginTop: responsiveHeight(7),
              backgroundColor: '#fff',
            }}
          />
          <FlatList
            data={list}
            renderItem={renderItem}
            numColumns={4}
            contentContainerStyle={{
              marginTop: responsiveHeight(6),
            }}
            columnWrapperStyle={{
              justifyContent: 'space-between',
            }}
          />
        </ScrollView>
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
            Oops! Avatar Locked
          </Text>
          <TouchableOpacity
            activeOpacity={0.65}
            onPress={() => hideModal()}
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
              Unlock Avatar with{'\n'} 20 coins
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default EditAvatar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollviewcontainer: {
    flexGrow: 1,
    paddingHorizontal: responsiveWidth(5),
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
