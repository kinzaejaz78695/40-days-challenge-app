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

const CommunityChallenges = props => {
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
  const [list, setList] = useState([
    {
      id: 1,
      name: 'First Challenge',
      creator: 'John Doe',
    },
    {
      id: 2,
      name: 'Second Challenge',
      creator: 'Will Smith',
    },
    {
      id: 3,
      name: 'Third Challenge',
      creator: 'Blossom',
    },
    {
      id: 4,
      name: 'Fourth Challenge',
      creator: 'Superman',
    },
  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredlist, setFilteredlist] = useState([]);
  const onChangeValue = async (itemSelected, index) => {
    const newData = list.map(item => {
      if (item.id == itemSelected.id) {
        return {
          ...item,
          selected: !item.selected,
        };
      }
      return {
        ...item,
        selected: item.selected,
      };
    });
    setList(newData);
  };

  const search = searchText => {
    console.log('okiuhh');
    console.log(searchText);
    setSearchQuery(searchText);
    let filteredData = list.filter(function (item) {
      var searchIdNameLowerCase = searchText.toLowerCase();
      var itemNameLowerCase = item.name.toLowerCase();
      console.log(item);
      var a = itemNameLowerCase.includes(searchIdNameLowerCase);
      return a;
    });
    console.log('SEARCH', search);
    setFilteredlist(filteredData);
  };

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.65}
        onPress={() => props.navigation.navigate('CommunityChallengeView')}
        style={{
          width: responsiveWidth(87),
          alignSelf: 'center',
          borderRadius: responsiveWidth(6),
          marginBottom: responsiveHeight(4),
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.36,
          shadowRadius: 6.68,

          elevation: 11,
        }}>
        <LinearGradient
          colors={isdarkmode ? doubledark : double}
          start={{x: -0.2, y: 1}}
          end={{x: 1, y: 1}}
          style={[
            styles.linearGradient,
            {
              borderTopLeftRadius: responsiveWidth(6),
              borderTopRightRadius: responsiveWidth(6),
            },
          ]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: responsiveHeight(3.3),
              paddingHorizontal: responsiveWidth(5),
            }}>
            <Text>{''}</Text>
            <Image
              source={appImages.runner}
              style={{
                width: responsiveWidth(25),
                height: responsiveWidth(25),
                resizeMode: 'contain',
              }}
            />
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                onChangeValue(item, index);
              }}>
              <Image
                source={
                  item.selected ? appImages.heartred : appImages.heartempty
                }
                style={{
                  width: responsiveWidth(6),
                  height: responsiveWidth(6),
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          </View>
        </LinearGradient>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: responsiveWidth(5),
            backgroundColor: '#fff',
            borderBottomLeftRadius: responsiveWidth(6),
            borderBottomRightRadius: responsiveWidth(6),
            paddingVertical: responsiveHeight(2.3),
            justifyContent: 'space-between',
          }}>
          <View>
            <Text
              style={[styles.txt1, {color: isdarkmode ? soliddark : solid}]}>
              {item.name}
            </Text>
            <Text
              style={[styles.txt2, {color: isdarkmode ? soliddark : solid}]}>
              {item.creator}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              //   alignItems: 'center',
            }}>
            <Image
              source={appImages.heartred}
              style={{
                width: responsiveWidth(6),
                height: responsiveWidth(6),
                resizeMode: 'contain',
              }}
            />
            <Text
              style={[
                styles.txt1,
                {color: '#444444', marginLeft: responsiveWidth(2.5)},
              ]}>
              222
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.floatingbutton}></View>
      <LinearGradient
        colors={isdarkmode ? doubledark : double}
        style={styles.linearGradient}>
        <MainHeader {...props} headertxt={'Community Challenges'} />
        <View
          style={{
            width: responsiveWidth(100),
            backgroundColor: '#fff',
            paddingTop: responsiveHeight(7),
            borderBottomLeftRadius: responsiveWidth(20),
            borderBottomRightRadius: responsiveWidth(20),
            paddingBottom: responsiveHeight(12),
          }}>
          <View
            style={{
              backgroundColor: '#F5F5F5',
              width: responsiveWidth(80),
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: responsiveWidth(5),
              alignSelf: 'center',
              paddingHorizontal: responsiveWidth(4),
            }}>
            <TextInput
              style={{
                backgroundColor: '#F5F5F5',
                width: responsiveWidth(65),
                fontFamily: fontFamily.Sans_Regular,
                fontSize: responsiveFontSize(2.1),
                borderRadius: responsiveWidth(5),
                paddingRight: responsiveWidth(2),
              }}
              onChangeText={text => {
                search(text);
              }}
              value={searchQuery}
              placeholder="Search"
            />
            <Image
              source={appImages.searchicon}
              style={{width: responsiveWidth(5), height: responsiveWidth(5)}}
            />
          </View>
        </View>
        <View
          style={{
            // backgroundColor: 'red',
            marginTop: responsiveHeight(-6),
            flex: 1,
          }}>
          <FlatList
            data={searchQuery == '' ? list : filteredlist}
            renderItem={renderItem}
          />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default CommunityChallenges;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  txt1: {
    fontFamily: fontFamily.Sans_Regular,
    fontSize: responsiveFontSize(2.3),
  },
  txt2: {
    fontFamily: fontFamily.Sans_Regular,
    fontSize: responsiveFontSize(2.1),
  },
});
