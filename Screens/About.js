import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import { TextInput } from 'react-native-paper';

export default function About() {

    const [version, setVersion] = useState('');
    const [text, setText] = useState('');

        const fetchData = async () => {
            var myHeaders = new Headers();
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                redirect: 'follow',
            };
            var serverURL = "https://learnhub.kavinprasad.me/api/";

            try {
                var response = await fetch(serverURL + "about?version="+version, requestOptions)
                // .then(response => response.text())
                // .then(result => console.log(result))
                // .catch(error => console.log('error', error));

                var results = await response.json();
                var returnObj = {};
                if (response.status == 200) {
                    returnObj.error = false;
                    returnObj.message = results;
                }
                else if (response.status == 400) {
                    returnObj.error = true;
                    returnObj.message = results.error;
                }
                else if (response.status == 409) {
                    returnObj.error = true;
                    returnObj.message = results.error;
                } else {
                    returnObj.message = "No response from server";
                }
                setText("Description : "+returnObj.message.desc + "\nVersion : "+ returnObj.message.version+"\nMethod : "+returnObj.message.method);
                // console.log(results);
            }
            catch (e) {
                console.log(e);
            }
        }

const submit = () => {
    fetchData();
};

    return (
        <View style={styles.container}>
            <TextInput placeholder='Enter App Version' value={version} onChangeText={(text) => { setVersion(text); console.log(version); }} />
            <Text style={{ fontSize: 20,  padding: 10 }}>{text}</Text>
            <Button onPress={submit} title="Submit"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        textAlign: 'center',
        margin: 20,
        alignContent: 'center',
    },
});
