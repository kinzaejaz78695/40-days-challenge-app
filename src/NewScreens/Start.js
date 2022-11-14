import React, { useState } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    Dimensions,
    View, Image, Text, TouchableOpacity
} from 'react-native'
// import bg1 from '../NewScreens/Images/a.png'
// import bg2 from '../NewScreens/Images/b.png'
// import bg3 from '../NewScreens/Images/c.png'
import { ScrollView } from 'react-native-gesture-handler';
import left from '../NewScreens/Images/left.png'
import right from '../NewScreens/Images/right.png'
import left1 from '../NewScreens/Images/iconforward.png'
import right1 from '../NewScreens/Images/iconfab.png'
// import Icon from 'react-native-vector-icons'
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
// import Icon from 'react-native-vector-icons/MaterialIcons'
// import Icon from 'react-native-vector-icons/FontAwesome'
import Icon from 'react-native-vector-icons/FontAwesome';
// Generate required css
// import iconFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf';

const images = [
    // { image_url: require("../NewScreens/Images/a.png") },
    // { image_url: require("../NewScreens/Images/b.png") },
    // { image_url: require("../NewScreens/Images/c.png") },
    "https://www.classicinformatics.com/hubfs/startup%20mistakes.png",
    "https://www.neoito.com/blog/wp-content/uploads/2021/09/Might-Not-Be-Ready-to-be-a-Business-Owner.png",
    "https://okcredit-blog-images-prod.storage.googleapis.com/2021/03/businessideasforcollegestudents2.jpg"
    // "https://ibb.co/rpKsDpn",
    // "https://ibb.co/zZSvHYX",
    // "https://ibb.co/4NLXyLt"
]
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const App = ({navigation}) => {
    const [imgActive, setimgActive] = useState(0)
    onChange = (nativeEvent) => {
        if (nativeEvent) {
            const slider = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
            if (slider != imgActive) {
                setimgActive(slider)
            }
        }
    }
    const next = () => {
        navigation.navigate("Introduction")
    }
    return (
        <SafeAreaView style={StyleSheet.container}>
            <View style={styles.wrap}>
                <View>
                    <ScrollView onScroll={({ nativeEvent }) => onChange(nativeEvent)}
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        horizontal
                        style={styles.wrap}
                    >
                        {
                            images.map((e, index) =>
                                <Image
                                    key={e}
                                    resizeMode='stretch'
                                    style={styles.wrap}
                                    source={{ uri: e }}
                                />
                            )
                        }
                    </ScrollView>
                </View>
                <View>
                    <Text style={styles.txt1}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                    </Text>
                    <Text style={styles.txt2}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing nonumy magna
                        aliquyam erat, sed diam
                    </Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.left} >
                        {/* <Image source={left1} style={styles.left} /> */}
                        <Icon name="arrow-left" size={40} color={'white'} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.right} onPress={()=> next()}>
                        {/* <Image source={right1} style={styles.right} /> */}
                        <Icon name="arrow-right" size={40} color={'white'}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.wrapDot}>
                    {
                        images.map((e, index) =>
                            <Text
                                key={e}
                                style={imgActive == index ? styles.dotActive : styles.dot}
                            >
                                ●
                            </Text>
                        )
                    }
                </View>
            </View>
        </SafeAreaView >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }, wrap: {
        // width: WIDTH,
        // flex:0.2,
        width: 300,
        // height: HEIGHT * 0.25
        height: 350,
        left: 13,
        top: 3
    },
    wrapDot: {
        position: 'absolute',
        // bottom: 0,
        top: 680,
        flexDirection: 'row',
        alignSelf: 'center'
    },
    dotActive: {
        margin: 3,
        color: 'black'

    },
    dot: {
        margin: 3,
        color: 'white'
    },
    txt1: {
        top: 30,
        fontSize: 20,
        color: '#000000',
        fontWeight: 'bold',
left:20,
        alignSelf: 'center',
        // textAlign: 'center',
    },
    txt2: {
        top: 30,
        color: '#000000',
        alignSelf: 'center',
        textAlign: 'center',
        opacity: 0.45,
        
        left:20,
        // backgroundColor: 'red',
    },
    left: {
        width: 80,
        height: 40,
        top: 180,
        backgroundColor:'#cc3366',
        justifyContent: 'center',
        // alignSelf:'center',
        // alignContent:'center',
        // alignitems: 'center',
        alignItems:'center',justifyContent:'center' 
    },
    right: {
        width: 80,
        height: 40,
        top: 140,
        left: 250,backgroundColor:'#cc3366',
        alignItems:'center',justifyContent:'center' 
    },
})
export default App;