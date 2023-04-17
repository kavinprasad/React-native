import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/theme';

const FromInput = ({
    labelText = '',
    placeholderText = '',
    onChangeText = null,
    value = null,
    textEntry=''

}) => {
  return (
    <View style={{width: '100%' , marginBottom: 20}}>
      <Text>{labelText}</Text>
      <TextInput style={{
          padding:10,
          borderColor: COLORS.black+'20',
          borderWidth: 1,
          width: '100%',
          borderRadius: 9,
          marginTop: 10,
      }} 
        placeholder={placeholderText} 
        onChangeText={onChangeText} 
        value={value}
        secureTextEntry={textEntry}

      />
    </View>
  )
}
export default FromInput;

const styles = StyleSheet.create({})