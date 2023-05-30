import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const SearchInput = ({ onChangeText, value }) => {
    return (
        <View style={styles.inputSearch}>
            <Ionicons name="search-outline" size={20} color={'#8E8E8E'} />
            <TextInput placeholder='Search notes' placeholderTextColor="#B9B9B9" style={{ paddingLeft: 10, width: '90%' }} onChangeText={onChangeText} value={value} />
        </View>

    );
};

const styles = StyleSheet.create({
    inputSearch: {
        width: '100%',
        padding: 10,
        backgroundColor: '#EDEDED',
        marginTop: 50,
        borderRadius: 20,
        fontSize: 20,
        paddingHorizontal: 15,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }
});

export default SearchInput;