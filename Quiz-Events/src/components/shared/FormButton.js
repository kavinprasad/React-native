import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS } from '../../constants/theme';

const screenWidth = Dimensions.get("window").width;


const FormButton = ({
    labelText = '',
    handleOnPress = null,
    style,
    isPrimary = true,

}) => {
  return (
    <TouchableOpacity 
    style={{
        width: screenWidth - 40,
        paddingVertical: 10,
        backgroundColor: isPrimary ? COLORS.primary : COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.primary,
        borderRadius: 10,
        style
    }}
    activeOpacity={0.9}
    onPress={handleOnPress}
    >
        <Text style={{
            textAlign: 'center',
            fontSize: 18,
            color: isPrimary ? COLORS.white : COLORS.primary,

            }}>
            {labelText}
        </Text>
    </TouchableOpacity>
  )
}

export default FormButton;

const styles = StyleSheet.create({})