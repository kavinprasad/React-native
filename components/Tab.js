import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const Tab = ({ onPress }) => {
    return (
        <TouchableOpacity style={[styles.shadowProp, styles.btnTab]} onPress={onPress}>
            <Ionicons name="folder-outline" size={20} color={'#FFBB00'} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    shadowProp: {
        shadowColor: "#444444",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.95,
        shadowRadius: 2.84,
        elevation: 2,
    },
    btnTab: {
        backgroundColor: '#fff',
        width: 40,
        height: 40,
        borderRadius: 10,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center'
    }

});

export default Tab;