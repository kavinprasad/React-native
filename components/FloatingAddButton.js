import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const FloatingAddButton = ({ onPress }) => {
    return (
        <View style={styles.float}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Ionicons name="add-outline" size={40} color={'#ffff'} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    float: {
        position: 'absolute',
        bottom: 30,
        right: 30,
    },
    button: {
        backgroundColor: '#FFBB00',
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default FloatingAddButton;
