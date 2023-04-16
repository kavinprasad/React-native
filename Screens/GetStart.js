import { StyleSheet, Text, View, StatusBar, Animation, Dimensions, Image } from 'react-native';
import React from 'react'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Button } from 'react-native-paper';

const screenWidth = Dimensions.get("window").width;

export default function GetStart({ navigation }) {

    const data = [

        {
            title: 'Take Video Courses',
            desc: 'From cooking to coding and evething',
            image: require('../assets/getSartSlide/slide2.png'),
        },
        {
            title: 'Get Start With Us',
            desc: 'Keep your skills on the leading edge',
            image: require('../assets/getSartSlide/slide1.png'),
        },
        {
            title: 'Calrify Your Doubts',
            desc: 'Start your experiential learning',
            image: require('../assets/getSartSlide/slide3.png'),

        },
    ];

    _renderItem = ({ item, index }) => {
        return (
            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={item.image} style={{ height: 400, width: '90%' }} />
                <Text style={{ marginTop: 20, fontSize: 30, fontWeight: 500 }}>{item.title}</Text>
                <Text style={{ fontSize: 18 }}>{item.desc}</Text>
            </View>
        );
    }

    const [activeSlide, setActiveSlide] = React.useState(0);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#fff" barStyle='dark-content' />
            <Text style={{ fontSize: 50, fontWeight: 'bold', color: '#15A801', fontWeight: 900, paddingVertical: 30, textAlign: 'center' }}>Learn <Text style={{ color: '#000' }}>Hub</Text></Text>

            <Carousel
                data={data}
                sliderWidth={screenWidth}
                itemWidth={screenWidth}
                loop={true} // enable loop
                renderItem={this._renderItem}
                onSnapToItem={(index) => setActiveSlide(index)} // set active slide
                autoplay={true}
                autoplayDelay={2000}
                autoplayInterval={5000}
            />
            <Pagination // add pagination
                dotsLength={data.length}
                activeDotIndex={activeSlide}
                containerStyle={{ marginBottom: 50 }}
                dotStyle={{ backgroundColor: '#15A801' }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={1}
            />

            <Button mode="contained" onPress={() => navigation.navigate('Login')} style={{ margin: 10 }} buttonColor="#15A801">Log In</Button>

            <Button mode="contained" onPress={() => navigation.navigate('SignUp')} style={{ marginHorizontal: '25%', marginVertical: 10 }} buttonColor="#fff" textColor="#0074b7">New to Learning Hub? Sign Up</Button>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
});
