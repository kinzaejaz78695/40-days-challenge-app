import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    FlatList,
    Pressable,
    ImageBackground,
    TextInput,
    Image,
    LogBox,
} from 'react-native';
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
} from 'react-native-responsive-dimensions';

import AsyncStorage from '@react-native-async-storage/async-storage';
import bgimage from '../NewScreens/Images/a.png'
// import { fontFamily } from '../../constants/fonts';
import { fontFamily } from '../constants/fonts'
import React, { useState } from 'react';
import FastImage from 'react-native-fast-image';
// import { appImages } from '../../assets/utilities';
import { appImages } from '../assets/utilities'
import bg from '../NewScreens/Images/bg.jpeg'
import intro from '../NewScreens/Images/Intro.png'
// import DeviceInfo from 'react-native-device-info';

// or ES6+ destructured imports

import { DeviceInfo, getApplicationName, getBrand, getUniqueId, getManufacturer, getDeviceId } from 'react-native-device-info';
LogBox.ignoreAllLogs();
const Introduction = () => {
    const [gender, setGender] = useState('');
    const [name, setname] = useState('')
    const asy = async () => {
        try {
            // await AsyncStorage.setItem('name', name)
            // AsyncStorage.setItem('name', name)
            // JSON.stringify() //yah use kartay hn string ma change karna kay liya
            let obj = {
                name: name,
                gender: gender,
                deviceid: getDeviceId()
            }
            AsyncStorage.setItem('user', JSON.stringify(obj));
            let user = await AsyncStorage.getItem('user');
            let parsed = JSON.parse(user);
            alert(parsed.name);
            alert(parsed.gender);
            alert(parsed.deviceid);
            // alert(name)
            // props.navigation.goBack()
        } catch (e) {
            // saving error
        }
    }

    // const getAsyncValue =async()=>{
    //   const valuedate=await AsyncStorage.getItem("deviceid")
    // await AsyncStorage.getItem('key');  
    //   console.log('valuedate',valuedate)
    // }



    return (
        <ImageBackground source={bg} style={styles.container}>
            {/* <Image source={bgimage} style={styles.image} /> */}
            <View style={{top:30}}>
            <Text style={{ color: '#fff', fontWeight: "bold", fontSize: 20, left: 100, top: 150 }}>Introduce Yourself</Text>
            <FastImage
                source={intro}
                resizeMode="contain"
                style={styles.imgstyle}
            />
            <Text style={styles.txt2}>Enter name</Text>
            <TextInput style={styles.txtinputstyle} onChangeText={(name) => setname(name)} />
            <Text style={styles.txt2}>Gender</Text>
            <View style={styles.gendercontainer}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={[
                        styles.genderview,
                        {
                            backgroundColor: gender === 'male' ? 'lightgray' : '#fff',
                        },
                    ]}
                    onPress={() => setGender('male')}>
                    <FastImage
                        source={appImages.male}
                        resizeMode={'contain'}
                        style={[
                            styles.genderimg,
                            {
                                marginRight: responsiveWidth(0.4),
                            },
                        ]}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={[
                        styles.genderview,
                        {
                            backgroundColor: gender === 'female' ? 'lightgray' : '#fff',
                        },
                    ]}
                    onPress={() => setGender('female')}>
                    <FastImage
                        source={appImages.female}
                        resizeMode={'contain'}
                        style={[
                            styles.genderimg,
                            {
                                marginLeft: responsiveWidth(0.4),
                            },
                        ]}
                    />



                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={[
                        styles.genderview,
                        {
                            backgroundColor:
                                gender === 'thirdgender' ? 'lightgray' : '#fff',
                        },
                    ]}
                    onPress={() => setGender('thirdgender')}>
                    <FastImage
                        source={appImages.thirdgender}
                        resizeMode={'contain'}
                        style={styles.genderimg}
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.nextview} activeOpacity={0.7}
                // onPress={() => props.navigation.goBack()}
                onPress={() => asy()}
            >
                <Text
                    style={[
                        styles.nexttxt,
                    ]}>
                    Next
                </Text>
            </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

export default Introduction;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: 140,
        height: 140,
        borderRadius: 100,
        left: 110,
        top: 60
    },
    imgstyle: {
        width: responsiveWidth(33),
        height: responsiveWidth(33),
        backgroundColor: '#fff',
        alignSelf: 'center',
        borderRadius: responsiveWidth(100),
    },
    txtinputstyle: {
        borderBottomWidth: responsiveWidth(0.1),
        //borderColor: '#fff',
        paddingVertical: responsiveHeight(0.2),
        width: responsiveWidth(78),

        marginTop: responsiveHeight(0.5),
        alignSelf: 'center',
        // backgroundColor: 'red',

        fontFamily: fontFamily.Sans_Regular,
        color: '#fff',
        fontSize: responsiveFontSize(2.1),
    },
    txt2: {
        fontFamily: fontFamily.Sans_Regular,
         color: '#fff',
        fontSize: responsiveFontSize(2.3),
        marginTop: responsiveHeight(9),
        left: 40,
        bottom: 10
    },
    gendercontainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: responsiveWidth(65),
        alignSelf: 'center',
        marginTop: responsiveHeight(3),
    },
    genderimg: {
        width: responsiveWidth(12),
        height: responsiveHeight(9),
        // backgroundColor: 'red',
        // borderRadius: responsiveWidth(100),
    },
    genderview: {
        width: responsiveWidth(17),
        height: responsiveWidth(17),
        backgroundColor: '#fff',
        borderRadius: responsiveWidth(100),

        alignItems: 'center',
        justifyContent: 'center',

        overflow: 'hidden',
    },
    nexttxt: {
        fontFamily: fontFamily.Sans_Regular,
        color: '#cc3366',
        fontSize: responsiveFontSize(2.3),
    },
    nextview: {
        backgroundColor: '#fff',
        alignSelf: 'center',
        marginTop: responsiveHeight(11),
        paddingHorizontal: responsiveWidth(9.5),
        paddingVertical: responsiveHeight(2.3),
        borderRadius: responsiveWidth(1),
        marginLeft:160
        // borderColor: 'pink',
        // borderWidth: 2
    },
});
