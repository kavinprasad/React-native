import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import MenuBar from "../components/MenuBar";
import { Text, Button } from "@react-native-material/core";
import InputText from "../components/InputText";
import database from "../config/FirebaseConfig";
import { ref, push, set } from "firebase/database";
import { useRoute } from '@react-navigation/native';

export default function AddNew({ navigation }) {
    const route = useRoute();


    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [id, setId] = useState('');


    useEffect(() => {
        if (route && route.params && !id) {
            setName(route.params.name);
            setDate(route.params.date);
            setId(route.params.id);
        }
    }, [route]);



    const addNewInfo = () => {
        if (name.trim().length > 0 && date.trim().length > 0) {
          if (route.params && id) {
            set(ref(database, `students/${id}`), { name, date , id: id})
              .then(() => {
                setDate('');
                setName('');
                setId('');
                navigation.navigate('Home');
              })
              .catch((error) => {
                console.log(error);
              });
          } else {
            const newId = push(ref(database, 'students/')).key;
            // console.log(newId);
            set(ref(database, `students/${newId}`), { name, date, id: newId })
              .then(() => {
                setDate('');
                setName('');
                setId('');
                navigation.navigate('Home');
              })
              .catch((error) => {
                console.log(error);
              });
          }
        }
      };
      




    const changeName = (text) => {
        setName(text);
    };
    const changeDate = (text) => {
        setDate(text);
    };

    return (
        <View style={styles.container}>

            {/* StatusBar Starts Here  */}
            <StatusBar style="light" backgroundColor="#0F172A" />

            {/* Menu Bar Starts Here  */}
            <MenuBar />

            {/* Box View Start Here  */}
            <View style={styles.Box}>
                <Text variant="h5" color="#fff" style={{ marginVertical: 10 }}>Add Details</Text>

                <InputText placeholder="Enter name" onChangeText={changeName} value={name} />
                <InputText placeholder="Enter date of Birth" onChangeText={changeDate} value={date} />

                <Button title="Submit" color="primary" style={{ margin: 20 }} onPress={addNewInfo} />


            </View>
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0F172A',
        marginTop: 30,
    },
    Box: {
        width: '90%',
        backgroundColor: '#32435e',
        borderRadius: 20,
        margin: 20,
        padding: 10,
        justifyContent: "center",
        alignItems: 'center'
    },
});

