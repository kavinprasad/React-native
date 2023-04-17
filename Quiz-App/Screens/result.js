import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Result = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View>
            <Text>Result</Text>
        </View>

        <View style={styles.bannerContainer}>
            <Image source={require("../assets/Analytics.png")} style={styles.banner} resizeMode="contain"/>
        </View>
        
        <View>
            <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                <Text>Home</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Result;
const styles = StyleSheet.create({
    banner:{
        height: 300,
        width: 300
    },
    bannerContainer:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    container:{
        paddingTop: 20,
        paddingHorizontal: 20,
        height: '100%'

    }
})