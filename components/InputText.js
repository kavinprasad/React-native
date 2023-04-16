import { StyleSheet, TextInput } from 'react-native'
import React from 'react'



const InputText = ({ placeholder, onChangeText, value }) => {
    return (
        <TextInput color="white" backgroundColor='#32435e' placeholder={placeholder} placeholderTextColor='#fff' style={styles.searchBar} onChangeText={onChangeText} value={value} />
    )
};

const styles = StyleSheet.create({
    searchBar: {
        marginTop: 15,
        color: '#ffffff',
        fontSize: 20,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        paddingBottom: 10,
        borderColor: '#fff',
        width: '100%'
    }
});
export default InputText;