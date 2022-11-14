/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
// import App from './src/NewScreens/Start'
// import App from './src/screens/Appflow/Introduction/index'
import App from './src/NewScreens/Introduction'
import {name as appName} from './app.json';
import TrackPlayer from 'react-native-track-player';

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.setupPlayer();
TrackPlayer.registerPlaybackService(() => require('./service'));
