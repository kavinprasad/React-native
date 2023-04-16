import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react';


const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;
console.log(screenHeight / 8);
export default function AlbumImg() {
  return (
    <View style={{ margin: 10, paddingBottom: 5 }}>


      <TouchableOpacity >
        <View style={{ alignItems: 'center' }}>
          <Image style={styles.Album} />
          <Text style={{ top: 5 }}>Camera</Text>
        </View>

      </TouchableOpacity>

    </View>


  )
}

const styles = StyleSheet.create({
  Album: {
    width: screenWidth / 4 + 10,
    height: screenHeight / 8 + 5,
    backgroundColor: '#EBEBEB',
    borderRadius: 20
  }
})