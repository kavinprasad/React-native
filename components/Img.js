import { StyleSheet, Text, View ,Image, TouchableOpacity, ScrollView, Dimensions} from 'react-native'
import React from 'react'


const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

export default function Img() {
  return (
            <TouchableOpacity style={styles.img}>
            <Image style={{width: screenWidth/5 -7,height: screenHeight/10 -3,}} source={{uri: 'file:///storage/emulated/0/DCIM/Screenshots/Screenshot_2022-04-08-21-50-47-546_com.google.android.youtube.jpg'}}/>
            </TouchableOpacity>

  )
}

const styles = StyleSheet.create({
  img: {
    margin: 1,
    width: screenWidth/5 -7,
    height: screenHeight/10 -3,
    backgroundColor: '#E6E6E6'

  },

})








