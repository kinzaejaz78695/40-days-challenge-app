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

function AddChallenge(props) {
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
  const [emoji, setEmoji] = useState();
  const [searchemoji, setSearchemoji] = useState(false);
  const [isskip, setIsskip] = useState(false);
  const renderItemDays = ({item}) => {
    return (
      <View>
        <Text style={styles.txt2}>Day {item.id}</Text>
        <TextInput
          style={styles.txtinput2}
          placeholder={'Add day description'}
        />
      </View>
    );
  };
  const renderItemEmoji = ({item}) => {
    return (
      <View
        style={{
          backgroundColor: '#fff',
          //   marginRight: responsiveWidth(2.2),
          marginLeft: responsiveWidth(3.8),
        }}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            setEmoji(item.name), setSearchemoji(false);
          }}>
          <Text style={styles.txtemoji}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const [emojilist, setEmojiList] = useState([
    {
      id: 1,
      name: '😀',
    },
    {
      id: 2,
      name: '😁',
    },
    {
      id: 3,
      name: '😂',
    },
    {
      id: 4,
      name: '😃',
    },
    {
      id: 5,
      name: '😄',
    },
    {
      id: 6,
      name: '😆',
    },
    {
      id: 7,
      name: '😇',
    },
    {
      id: 8,
      name: '😈',
    },
    {
      id: 9,
      name: '😉',
    },
    {
      id: 10,
      name: '😊',
    },
    {
      id: 11,
      name: '😋',
    },
    {
      id: 12,
      name: '😌',
    },
    {
      id: 13,
      name: '😍',
    },
    {
      id: 14,
      name: '😎',
    },
    {
      id: 15,
      name: '😏',
    },
    {
      id: 16,
      name: '😐',
    },
    {
      id: 17,
      name: '😑',
    },
    {
      id: 18,
      name: '😒',
    },
    {
      id: 19,
      name: '😓',
    },
    {
      id: 20,
      name: '😔',
    },
    {
      id: 21,
      name: '😕',
    },
    {
      id: 22,
      name: '😖',
    },
    {
      id: 23,
      name: '😗',
    },
    {
      id: 24,
      name: '😘',
    },
    {
      id: 25,
      name: '😙',
    },
    {
      id: 26,
      name: '😚',
    },
    {
      id: 27,
      name: '😛',
    },
    {
      id: 28,
      name: '😜',
    },
    {
      id: 29,
      name: '😝',
    },
    {
      id: 30,
      name: '😞',
    },
    {
      id: 31,
      name: '😟',
    },
    {
      id: 32,
      name: '😠',
    },
    {
      id: 33,
      name: '😡',
    },
    {
      id: 34,
      name: '😢',
    },
    {
      id: 35,
      name: '😣',
    },
    {
      id: 36,
      name: '😤',
    },
    {
      id: 37,
      name: '😥',
    },
    {
      id: 38,
      name: '😦',
    },
    {
      id: 39,
      name: '😧',
    },
    {
      id: 40,
      name: '😨',
    },
  ]);
  const [days, setDays] = useState([
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
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => props.navigation.navigate('AddChallengeList')}
        style={[
          styles.floatingbutton,
          {backgroundColor: isdarkmode ? soliddark : solid},
        ]}>
        <Text style={styles.createtxt}>Create</Text>
      </TouchableOpacity>
      <LinearGradient
        colors={isdarkmode ? doubledark : double}
        style={styles.linearGradient}>
        <MainHeader {...props} headertxt={'Add Challenge'} />

        <ScrollView contentContainerStyle={styles.scrollviewcontainer}>
          <View style={styles.innercontainer}>
            <Text style={styles.txt1}>Icons</Text>
            <View style={styles.iconselector}>
              {searchemoji === false ? (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => setSearchemoji(true)}>
                  {emoji == '' || emoji == null ? (
                    <FastImage
                      source={appImages.addemoji}
                      resizeMode={'contain'}
                      style={styles.addiconstyle}
                    />
                  ) : (
                    <Text style={styles.txtemoji2}>{emoji}</Text>
                  )}
                </TouchableOpacity>
              ) : (
                <View
                  style={{
                    height: responsiveHeight(30),
                    backgroundColor: '#fff',
                  }}>
                  <View style={{height: responsiveHeight(5)}}>
                    <Pressable
                      onPress={() => {
                        console.log('PRESSED CLOSE');
                        setSearchemoji(false);
                      }}>
                      <FastImage
                        source={appImages.closeemoji}
                        resizeMode={'contain'}
                        style={{
                          width: responsiveWidth(4.5),
                          height: responsiveWidth(4.5),
                          alignSelf: 'flex-end',
                          marginRight: responsiveWidth(3),
                          marginTop: responsiveHeight(1),
                        }}
                      />
                    </Pressable>
                  </View>
                  <FlatList
                    nestedScrollEnabled={true}
                    showsVerticalScrollIndicator
                    data={emojilist}
                    renderItem={renderItemEmoji}
                    numColumns={7}
                    contentContainerStyle={{
                      width: responsiveWidth(88),
                      borderRadius: responsiveWidth(3),
                    }}
                    removeClippedSubviews={true} // Unmount components when outside of window
                    initialNumToRender={1} // Reduce initial render amount
                    maxToRenderPerBatch={1} // Reduce number in each render batch
                    updateCellsBatchingPeriod={200} // Increase time between renders
                    windowSize={7} // Reduce the window size
                  />
                  <View style={{height: responsiveHeight(5)}}></View>
                </View>
              )}
            </View>
            <Text style={[styles.txt1, {marginTop: responsiveHeight(2)}]}>
              Challenge Name
            </Text>
            <TextInput style={styles.txtinput1} />
            <View>
              <Text style={[styles.txt1, {marginTop: responsiveHeight(2)}]}>
                Challenge Description
              </Text>
              <Text style={styles.desctxt}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum
              </Text>
              {isskip ? null : (
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={[
                    styles.skipview,
                    {backgroundColor: isdarkmode ? seconddark : second},
                  ]}
                  onPress={() => setIsskip(true)}>
                  <Text style={styles.skiptxt}>Skip</Text>
                </TouchableOpacity>
              )}
            </View>
            {isskip ? null : (
              <FlatList
                data={days}
                renderItem={renderItemDays}
                contentContainerStyle={{marginBottom: responsiveHeight(12)}}
              />
            )}
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}
export default AddChallenge;
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
  txt1: {
    fontSize: responsiveFontSize(2.8),
    color: '#fff',
    fontFamily: fontFamily.Sans_Regular,
  },
  txt2: {
    fontSize: responsiveFontSize(2.4),
    color: '#fff',
    fontFamily: fontFamily.Sans_Regular,
    marginTop: responsiveHeight(2),
  },
  txtemoji: {
    fontSize: responsiveFontSize(3.2),
    color: '#fff',
    fontFamily: fontFamily.Sans_Regular,
  },
  txtemoji2: {
    fontSize: responsiveFontSize(3.7),
    color: '#fff',
    fontFamily: fontFamily.Sans_Regular,
  },
  addiconstyle: {
    width: responsiveWidth(15),
    height: responsiveWidth(15),
    // backgroundColor: 'red',
  },
  iconselector: {
    marginTop: responsiveHeight(3),
    borderBottomColor: '#FFF',
    borderBottomWidth: responsiveWidth(0.1),
    paddingBottom: responsiveHeight(2),
    alignItems: 'center',
  },
  txtinput1: {
    borderBottomColor: '#FFF',
    borderBottomWidth: responsiveWidth(0.1),
    paddingVertical: responsiveHeight(1),
    fontFamily: fontFamily.Sans_Regular,
    color: '#fff',
    fontSize: responsiveFontSize(2.2),
  },
  desctxt: {
    marginTop: responsiveHeight(2),
    color: '#F8F8F8',
    fontFamily: fontFamily.Sans_Regular,
    fontSize: responsiveFontSize(1.7),
    lineHeight: responsiveHeight(3.5),
  },
  txtinput2: {
    backgroundColor: '#fff',
    borderRadius: responsiveWidth(5.5),
    marginTop: responsiveHeight(1.8),
    paddingHorizontal: responsiveWidth(4),
    fontSize: responsiveFontSize(2.2),
    fontFamily: fontFamily.Sans_Regular,
  },
  skipview: {
    position: 'absolute',
    alignSelf: 'flex-end',
    bottom: responsiveHeight(-6),
    paddingVertical: responsiveHeight(1.2),
    paddingHorizontal: responsiveWidth(5),
    borderRadius: responsiveWidth(100),
    zIndex: 1,
  },
  skiptxt: {
    fontFamily: fontFamily.Sans_Regular,
    color: '#fff',
    fontSize: responsiveFontSize(2.2),
  },
  floatingbutton: {
    position: 'absolute',
    zIndex: 1,
    alignSelf: 'center',
    bottom: responsiveHeight(2),
    paddingVertical: responsiveHeight(1.3),
    paddingHorizontal: responsiveWidth(9),
    borderRadius: responsiveWidth(100),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  createtxt: {
    fontFamily: fontFamily.Sans_Regular,
    color: '#fff',
    fontSize: responsiveFontSize(2.5),
  },
});
