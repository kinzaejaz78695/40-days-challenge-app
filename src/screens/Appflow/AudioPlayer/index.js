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
  AppState,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
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
import Carousel from 'react-native-snap-carousel';
import Slider from '@react-native-community/slider';
import {setCustomstopstate} from '../../../redux/actions';
import TrackPlayer, {
  Capability,
  Event,
  RepeatMode,
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import {useFocusEffect} from '@react-navigation/native';
import {duration} from 'moment';
import {useSelector, useDispatch} from 'react-redux';
import {setIsplaying} from '../../../redux/actions';

// const setupPlayer = async () => {
//   await TrackPlayer.setupPlayer();
//   await TrackPlayer.add(songs);
// };

const togglePlayback = async playbackState => {
  console.log('THE PLAYBACK STATE===========', playbackState);
  const currentTrack = await TrackPlayer.getCurrentTrack();
  console.log('ENTERED===========');
  if (currentTrack !== null) {
    // console.log('currentTrackhere=========', currentTrack);
    if (playbackState == State.Paused || playbackState == 1) {
      // console.log('PAUSED', playbackState);
      await TrackPlayer.play();
    } else {
      // console.log('PLAYING', playbackState);
      await TrackPlayer.pause();
    }
  }
};

const AudioPlayer = props => {
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
  const dispatch = useDispatch();
  // const [isplaying, setIsplaying] = useState(false);
  const refContainer = useRef();
  const playbackState = usePlaybackState();
  const {isplaying} = useSelector(state => state.userReducer);
  // console.log('IS PLAYING==============', isplaying);
  const progress = useProgress();
  // console.log('PlayBACkSTATE==============', playbackState);
  // console.log('PAUSEDSTATE==============', State.Paused);
  // console.log('PLAYSTATE==============', State.Playing);
  // console.log('STOPPEDSTATE==============', State.Stopped);
  // console.log('NONESTATE==============', State.None);

  const songs = [
    {
      id: 1,
      title: 'Tera Hone Laga Hoon',
      url: require('../../../assets/songs/Tera_Hone_Laga_Hoon.mp3'),
      duration: 300,
      artwork: appImages.addemoji,
    },
    {
      id: 2,
      title: 'Tere Liye',
      url: require('../../../assets/songs/Tere_Liye.mp3'),
      duration: 400,
      artwork: appImages.musicplay,
    },

    {
      id: 3,
      title: 'Piya O Re Piya',
      url: require('../../../assets/songs/Piya_O_Re_Piya.mp3'),
      duration: 350,
      artwork: appImages.allcolors,
    },
  ];
  const setUpTrackPlayer = async () => {
    // console.log(
    //   'CURRENT PLAYER STATE=============================',
    //   await TrackPlayer.getState(),
    // );
    if ((await TrackPlayer.getState()) == 0) {
      await TrackPlayer.add(songs);
      TrackPlayer.updateOptions({});
      const myvalue = await TrackPlayer.getCurrentTrack();
      console.log('ITS HERE IN RUNNING', myvalue);
      console.log('CURRENT', myvalue);
    }
  };
  // const skipTo = async trackId => {
  //   await TrackPlayer.skip(trackId);
  // };

  const [myvalue, setmyvalue] = useState();
  useFocusEffect(
    React.useCallback(() => {
      setUpTrackPlayer();
      // skipTo(1);
      setmyvalue([{scale: 1.4}]);
    }, []),
  );
  // useEffect(() => {
  //   setUpTrackPlayer();
  //   setmyvalue([{scale: 1.4}]);
  // }, []);
  // useFocusEffect(
  //   React.useCallback(() => {

  //   }, []),
  // );
  const renderItem = ({item, index}) => {
    return (
      <Image
        source={item.artwork}
        resizeMode="contain"
        style={{
          zIndex: 1,
          width: responsiveWidth(80),
          height: responsiveWidth(65),
          // backgroundColor: 'red',
          alignSelf: 'center',
          marginTop: responsiveHeight(5),
        }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.floatingbutton}></View>
      <LinearGradient
        colors={isdarkmode ? doubledark : double}
        style={styles.linearGradient}>
        <MainHeader {...props} headertxt={'Relaxing Music'} />
        <View style={styles.scrollviewcontainer}>
          <Carousel
            scrollEnabled={false}
            data={songs}
            renderItem={renderItem}
            sliderWidth={responsiveWidth(100)}
            itemWidth={responsiveWidth(100)}
            ref={refContainer}
            ListFooterComponent={() => {
              return <Text>HELLO</Text>;
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            width: responsiveWidth(100),
            alignSelf: 'center',
          }}>
          <View
            style={{
              width: responsiveWidth(80),
              alignSelf: 'center',
              marginTop: responsiveHeight(3.5),
              marginBottom: responsiveHeight(4),
            }}>
            <Text
              style={{
                fontFamily: fontFamily.Sans_Regular,
                color: '#FFF',
                fontSize: responsiveFontSize(2.7),
              }}>
              Song Name
            </Text>
          </View>
          <Slider
            style={[styles.progressContainer, {transform: myvalue}]}
            value={progress.position}
            minimumValue={0}
            maximumValue={progress.duration}
            thumbTintColor={'#fff'}
            minimumTrackTintColor={'#fff'}
            maximumTrackTintColor={'#9A9A9A'}
            onSlidingComplete={async value => {
              await TrackPlayer.seekTo(value);
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              // alignSelf: 'center',
              justifyContent: 'space-between',
              width: responsiveWidth(82),
              alignSelf: 'center',
              marginTop: responsiveHeight(3),
            }}>
            <Text style={styles.time}>
              {new Date(progress.position * 1000).toISOString().substr(14, 5)}
            </Text>
            <Text style={styles.time}>
              {new Date((progress.duration - progress.position) * 1000)
                .toISOString()
                .substr(14, 5)}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: responsiveWidth(70),
              alignSelf: 'center',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: responsiveHeight(3),
            }}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                refContainer.current.snapToPrev();
                TrackPlayer.skipToPrevious();
              }}>
              <FastImage
                source={appImages.backwardsong}
                resizeMode="contain"
                style={styles.twobuttons2}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={async () => {
                // dispatch(setIsplaying(!isplaying)),
                togglePlayback(playbackState);

                dispatch(setCustomstopstate(false));
              }}>
              {playbackState == State.Playing ? (
                <FastImage
                  source={appImages.musicpause}
                  resizeMode="contain"
                  style={styles.twobuttons}
                />
              ) : (
                <FastImage
                  source={appImages.musicplay}
                  resizeMode="contain"
                  style={styles.twobuttons}
                />
              )}
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                refContainer.current.snapToNext();
                TrackPlayer.skipToNext();
              }}>
              <FastImage
                source={appImages.forwardsong}
                resizeMode="contain"
                style={styles.twobuttons2}
              />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default AudioPlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  progressContainer: {
    width: responsiveWidth(64),
    alignSelf: 'center',
    // transform: [{scale: responsiveWidth(0.35)}],
    // height: 40,
  },
  scrollviewcontainer: {
    flex: 1,
    width: responsiveWidth(100),
    alignSelf: 'center',
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
  twobuttons: {
    width: responsiveWidth(10),
    height: responsiveWidth(10),
  },
  twobuttons2: {
    width: responsiveWidth(7),
    height: responsiveWidth(7),
  },
  time: {
    color: '#fff',
    fontFamily: fontFamily.Poppins_Regular,
    fontSize: responsiveFontSize(1.9),
  },
});
