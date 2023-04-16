import { StyleSheet, Text, View, StatusBar, Dimensions, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Button, TextInput, Divider, IconButton } from 'react-native-paper';

const screenWidth = Dimensions.get("window").width;

export default function Login({ navigation }) {

  const [showPassword, setShowPassword] = useState(false); // Add this state hook
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  serverURL = "https://learnhub.kavinprasad.me/api/";

  const loginAction = async (username, password) => {
    var myHeaders = new Headers();

    var formdata = new FormData();
    formdata.append("username", username);
    formdata.append("password", password);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

    try {
      var response = await fetch(serverURL + "auth/login", requestOptions)
      var results = await response.json();
      if (response.status == 200) {
        // Success 
        // console.log(results.message);
        setErrorMsg('');
        navigation.navigate('Home');
      } else {
        setErrorMsg(results.error);
      }
    }
    catch (e) {
      console.log(e);
    }

  }


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle='dark-content' />
      <Text style={{ fontSize: 50, fontWeight: 'bold', color: '#15A801', fontWeight: 900, paddingVertical: 20, textAlign: 'center' }}>Learn <Text style={{ color: '#000' }}>Hub</Text></Text>


      <Text style={{ marginVertical: 10, fontSize: 30, fontWeight: 500, textAlign: 'center' }}>Login in to Hub</Text>

      <TextInput
        mode="outlined"
        placeholder="Username or Email"
        left={<TextInput.Icon icon="account" />}
        style={{ marginVertical: 5 }}
        theme={{ colors: { primary: '#15A801' } }}
        value={username}
        onChangeText={username => setUsername(username)}
      />

      <TextInput
        mode="outlined"
        placeholder="Password"
        secureTextEntry={!showPassword} // Toggle the secureTextEntry based on the state
        left={<TextInput.Icon icon="lock" />}
        right={<TextInput.Icon icon={showPassword ? 'eye-off' : 'eye'} onPress={() => setShowPassword(!showPassword)} />} // Toggle the icon and state on button press
        style={{ marginVertical: 5 }}
        theme={{ colors: { primary: '#15A801' } }}
        value={password}
        onChangeText={password => setPassword(password)}
      />

      <Text style={{ marginVertical: 5, fontWeight: 600, textAlign: 'center', color: '#ff0000' }}>{errorMsg}</Text>

      <Button mode="contained" style={{ marginVertical: 15 }} onPress={() => loginAction(username, password)} buttonColor="#15A801">Log In</Button>

      <Button mode="contained" onPress={() => navigation.navigate('SignUp')} style={{ marginHorizontal: '25%', marginBottom: 10 }} buttonColor="#fff" textColor="#0074b7">New to Learning Hub? Sign Up</Button>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Divider style={{ flex: 1, marginHorizontal: 10 }} />
        <Text >or</Text>
        <Divider style={{ flex: 1, marginHorizontal: 10 }} />
      </View>

      {/* <Button mode="contained" style={{ marginVertical: 15 }} buttonColor="#4286F5">Log In</Button> */}


      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
        <IconButton
          icon={() => (
            <Image source={{ uri: 'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png' }} style={{ width: 24, height: 24 }} />
          )}
          style={{ alignSelf: 'center', borderColor: '#4286F5', borderWidth: 1 }}
          onPress={() => console.log('Pressed')}
        >
          Login with Google
        </IconButton>
        <IconButton
          icon={() => (
            <Image source={{ uri: 'https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png' }} style={{ width: 24, height: 24 }} />
          )}
          style={{ alignSelf: 'center', borderColor: '#000', borderWidth: 1 }}
          onPress={() => console.log('Pressed')}
        >
          Login with Google
        </IconButton>
      </View>

      <View style={{ marginTop: 'auto', alignItems: 'center', paddingBottom: 20 }}>
        <Text style={{ fontSize: 13, color: '#999', textAlign: 'center', lineHeight: 20 }}>
          Learn Hub uses cookies for analytics, personalized content and ads.
          By using Learn Hub services, you agree to this use of cookies.

        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15
  },
});
