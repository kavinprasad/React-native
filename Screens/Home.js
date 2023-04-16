import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, ToastAndroid, View } from 'react-native';
import { Text } from "@react-native-material/core";

// Manual Import 
import ListItems from "../components/ListItems";
import FloatingAddButton from "../components/FloatingAddButton";
import database from '../config/FirebaseConfig';
import InputText from "../components/InputText";
import MenuBar from "../components/MenuBar";

import { ref, onValue, remove } from "firebase/database";

export default function Home({ navigation }) {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        return onValue(ref(database, '/students'), querySnapShot => {
            let data = querySnapShot.val() || {};
            let students = { ...data };
            setData(Object.values(students));
        });
    }, []);

    // Todo : Sort Based on Nearest Brithday

    const searchItem = (text) => {
        setSearch(text);
    };

    const listItems = data.filter((task) =>
        task.name.toLowerCase().includes(search.toLowerCase()),
    );

    const deleteItem = (id) => {
        if (!id) {
            console.log("Invalid id for deleting item");
            return;
        }

        // Remove the item from the Firebase database
        remove(ref(database, `students/${id}/`))
            .then(() =>
                ToastAndroid.show('Deleted', ToastAndroid.SHORT))
            .catch((error) => console.log(error));
    };


    const editInfo = (id) => {
        const dbRef = ref(database, "students");
        onValue(dbRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const student = Object.values(data).find((item) => item.id === id);
                if (student) {
                    // console.log(student.id + ") " + student.name + " - " + student.date);
                    navigation.navigate('AddNew', { id: student.id, name: student.name, date: student.date });
                }
            }
        });
    };


    return (
        <View style={styles.container}>

            {/* StatusBar Starts Here  */}
            <StatusBar style="light" backgroundColor="#0F172A" />


            {/* Menu Bar Starts Here  */}
            <MenuBar />

            {/* Box View Start Here  */}
            <View style={styles.Box} >
                {/* Search INPUT Starts Here */}
                <InputText onChangeText={searchItem} value={search} placeholder='Search' />

                <Text style={styles.upText} variant="h5" color="#fff">Upcoming Brithdays</Text>

                {/* List View Starts Here  */}
                <ScrollView showsVerticalScrollIndicator={false} style={{ padding: 10, width: '100%',marginBottom: 140}}>
                    {listItems.map(item => (
                        <ListItems name={item.name} date={item.date} edit={() => editInfo(item.id)}
                            remove={() => deleteItem(item.id)}
                        />
                        
                    ))}
                </ScrollView>
            </View>
            {/* Floating button  */}
            <FloatingAddButton onPress={() => navigation.navigate('AddNew')} />
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0F172A',
        marginTop: 30
    },
    Box: {
        width: '90%',
        backgroundColor: '#32435e',
        borderRadius: 20,
        margin: 20,
    },
    upText: {
        paddingLeft: 20,
        paddingVertical: 10,
    },

});

