import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


export default function Title() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quizzler</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  title:{
    fontSize: 36,
    fontWeight: '600',
   
  },
  container:{
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
  }
})