import { StyleSheet, Text, TouchableOpacity, View , Image, StatusBar} from 'react-native'
import React from 'react'
import Title from '../components/title';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Home = ({navigation}) => {

    return (
        <View style={styles.container}>
            <Title/>
            <View style={styles.bannerContainer}>
                <Image source={require("../assets/Online-Test.png")} style={styles.banner} resizeMode="contain"/>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Ques')} style={styles.button}>
            <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
        </View>
    );
}


export default Home;

const styles = StyleSheet.create({
    banner:{
        height: 300,
        width: 300
    },
    bannerContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    container:{
        paddingTop: 20,
        paddingHorizontal: 20,
        height: '100%'

    },
    button:{
        width: '100%',
        backgroundColor: '#1A759F',
        padding: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30
    },
    buttonText:{
        fontSize: 24,
        fontWeight: '600',
        color: 'white'
    }

});