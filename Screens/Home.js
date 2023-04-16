import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react';

export default function Home() {

  const [text, setText] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      var myHeaders = new Headers();
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
      };
      var serverURL = "https://learnhub.kavinprasad.me/api/";

      try {
        var response = await fetch(serverURL + "test", requestOptions)
        // .then(response => response.text())
        // .then(result => console.log(result))
        // .catch(error => console.log('error', error));

        var results = await response.json();
        var returnObj = {};
        if (response.status == 200) {
          returnObj.error = false;
          returnObj.message = "Success";
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
        setText(returnObj.message);
        // console.log(results); 

        // var results = await response.json();
        // setText("API : " + response.Host);

        // console.log(results);
        // setText(results.Host);
      }
      catch (e) {
        console.log(e);
      }

    }
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25 }}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
});
