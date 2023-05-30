import { StyleSheet, Text, Dimensions, TouchableOpacity, View } from 'react-native'
import React from 'react'

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const Note = ({ onPress, title, notes, time, key }) => {
    return (
        <View>

            <Text style={styles.headText}>
                {title}
            </Text>
            <Text numberOfLines={4} style={styles.todoText}>
                {notes}
            </Text>
            <Text >{time}</Text>
        </View>
        
    );
};

const styles = StyleSheet.create({

    headText: {
        fontSize: 20,
        fontWeight: 500,
        marginBottom: 15
    },
    todoText: {
        color: '#7A7A7A',
        paddingBottom: 10
    },
});

export default Note;
