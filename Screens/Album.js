import { Dimensions, StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import Img from '../components/Img';
import AlbumImg from '../components/AlbumImg';

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

export default function Album() {
  return (
    <View style={styles.Screen}>
      <Text style={styles.albumText}>Album</Text>

      <View style={styles.Background}>

        <View style={{top: 20}}>
            <TouchableOpacity><Text style={[styles.navText,{left: screenWidth / 8, color: '#A4A4A4'}]} >All Photos</Text></TouchableOpacity>
            <Text style={[styles.navText, {left: screenWidth / 4 + 72, color: '#27A0DF'}]} >Albums</Text>
            <TouchableOpacity><Text style={[styles.navText, {left: screenWidth / 2 + 85, color: '#A4A4A4'}]} >Favourite</Text></TouchableOpacity>
            
            <ScrollView style={styles.scrollBox} showsVerticalScrollIndicator={true} >
            <View style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                <AlbumImg/>
                <AlbumImg/>
                <AlbumImg/>
                <AlbumImg/>
                <AlbumImg/>
            </View>
            </ScrollView>

        
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({  
Screen: {    
    flex: 1,
    backgroundColor: '#27A0DF',
    position: 'relative',
},
albumText: {
    position: 'absolute',
    left: 149,
    top: 40,
    fontFamily: 'Nunito',
    fontStyle: 'normal',
    fontSize: 36,
    lineHeight: 49,
    color: '#FFFFFF'
},
Background: {
    position: 'absolute',
    width: screenWidth,
    height: 816,
    left: 0,
    top: 110,
    backgroundColor: '#FFFFFF',
    borderRadius: 50
},
navText: {
    position: 'absolute',
    fontStyle: 'normal',
    fontSize: 20,
    lineHeight: 27
},
scrollBox: {
    left: 5,
    top: 40
}
})