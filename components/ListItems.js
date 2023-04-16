import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";



const ListItems = ({ key, name, date, edit, remove }) => {
    return (

        <View style={styles.itemBox} key={key}>
            <Text style={{ fontSize: 35 }}>🎂</Text>
            <View style={styles.infoBox}>
                <Text style={{ fontSize: 20, color: '#fff', fontWeight: 900 }}>{name}</Text>
                <Text style={{ fontSize: 14, color: '#fff' }}>{date}</Text>
            </View>
            <TouchableOpacity >
                <IconButton color="#fff" icon={props => <Icon name="pen" {...props} />} onPress={edit}/>
            </TouchableOpacity>
            <TouchableOpacity >
                <IconButton color="#fff" icon={props => <Icon name="delete" {...props} />} onPress={remove}/>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    itemBox: {
        width: '100%',
        height: 50,
        backgroundColor: '#009ddb',
        marginVertical: 5,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center"
    },
    infoBox: {
        display: 'flex',
        flexDirection: 'column',
        width: '55%',
        justifyContent: 'center',
        paddingLeft: 5
    }
});
export default ListItems;