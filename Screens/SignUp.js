import { StyleSheet, Text, View, StatusBar, Dimensions, Image } from 'react-native';
import React, { useState } from 'react';
import { Button, TextInput, Divider, Checkbox } from 'react-native-paper';
// import SelectDropdown from 'react-native-select-dropdown';

const screenWidth = Dimensions.get("window").width;
// const countries = ["India", "Canada", "Australia", "Ireland"];

export default function SignUp({ navigation }) {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const [errorMsg, setErrorMsg] = useState('');

  serverURL = "https://learnhub.kavinprasad.me/api/";


  const signUpAction = async (username, email, password) => {
    var myHeaders = new Headers();

    var formdata = new FormData();
    formdata.append("username", username);
    formdata.append("email", email);
    formdata.append("password", password);


    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

    try {
      var response = await fetch(serverURL + "auth/signup", requestOptions)
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

  const checkAgreement = () => {
    if (agreedToTerms)
      setAgreedToTerms(false);
    else
      setAgreedToTerms(true);
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle='dark-content' />
      <Text style={{ fontSize: 50, fontWeight: 'bold', color: '#15A801', fontWeight: 900, paddingVertical: 20, textAlign: 'center' }}>Learn <Text style={{ color: '#000' }}>Hub</Text></Text>


      <Text style={{ marginVertical: 10, fontSize: 30, fontWeight: 500, textAlign: 'center' }}>Sign up to sharpen skills</Text>


      <Button icon="google" mode="contained" style={{ marginVertical: 15 }} buttonColor="#4286F5">Continue with Google</Button>


      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Divider style={{ flex: 1, marginHorizontal: 10 }} />
        <Text >or</Text>
        <Divider style={{ flex: 1, marginHorizontal: 10 }} />
      </View>


      <TextInput mode="outlined" placeholder="Username" style={{ marginVertical: 5 }} theme={{ colors: { primary: '#15A801' } }} onChangeText={username => setUsername(username)} value={username} />

      <TextInput mode="outlined" placeholder="Email" style={{ marginVertical: 5 }} theme={{ colors: { primary: '#15A801' } }} onChangeText={email => setEmail(email)} value={email} />

      <TextInput
        mode="outlined"
        placeholder="Password"
        secureTextEntry={!showPassword}
        right={<TextInput.Icon icon={showPassword ? 'eye-off' : 'eye'} onPress={() => setShowPassword(!showPassword)} />}
        style={{ marginVertical: 5 }}
        theme={{ colors: { primary: '#15A801' } }}
        onChangeText={password => setPassword(password)}
        value={password}
      />

      <TextInput
        mode="outlined"
        placeholder="Confirm password"
        secureTextEntry={!showConfirmPassword}
        right={<TextInput.Icon icon={showConfirmPassword ? 'eye-off' : 'eye'} onPress={() => setConfirmShowPassword(!showConfirmPassword)} />}
        style={{ marginVertical: 5 }}
        theme={{ colors: { primary: '#15A801' } }}
        onChangeText={confirmPassword => setConfirmPassword(confirmPassword)}
        value={confirmPassword}
      />

      {/* <SelectDropdown
        data={countries}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        defaultButtonText={'Select country'}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
        buttonStyle={styles.dropdown1BtnStyle}
        buttonTextStyle={styles.dropdown1BtnTxtStyle}
        renderDropdownIcon={isOpened => {
          return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#777'} size={18} />;
        }}
        dropdownIconPosition={'right'}
        dropdownStyle={styles.dropdown1DropdownStyle}
        rowStyle={styles.dropdown1RowStyle}
        rowTextStyle={styles.dropdown1RowTxtStyle}
        style={{ fontSize: 20, width: '100%' }}
      /> */}

      <Text style={{ marginVertical: 5, fontWeight: 600, textAlign: 'center', color: '#ff0000' }}>{errorMsg}</Text>

      <View style={styles.checkboxContainer}>
        <Checkbox
          status={agreedToTerms ? 'checked' : 'unchecked'}
          onPress={checkAgreement}
          theme={{ colors: { primary: '#15A801' } }}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Yes, I understand and agree to the <Text style={styles.inner}>Upwork terms of service, </Text>including the <Text style={styles.inner}>User Agreement </Text>and <Text style={styles.inner}>Privacy Policy.</Text></Text>
      </View>

      <Button mode="contained" style={{ marginVertical: 15 }} buttonColor="#15A801" onPress={() => signUpAction(username, email, password)}>Create my account</Button>

      <Button mode="contained" onPress={() => navigation.navigate('Login')} style={{ marginBottom: 10 }} buttonColor="#fff" textColor="#0074b7">Already have an account? Login</Button>


      {/* <Button mode="contained" style={{ marginVertical: 15 }} buttonColor="#4286F5">Log In</Button> */}


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15
  },
  dropdown1BtnStyle: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#777',
    marginVertical: 10
  },
  dropdown1BtnTxtStyle: {
    color: '#777',
    textAlign: 'left',
    fontSize: 14
  },
  dropdown1DropdownStyle: {
    backgroundColor: '#EFEFEF'
  },
  dropdown1RowStyle: {
    backgroundColor: '#EFEFEF',
    borderBottomColor: '#C5C5C5'
  },
  dropdown1RowTxtStyle: {
    color: '#444',
    textAlign: 'left'
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    padding: 5,
    paddingRight: 25,
    lineHeight: 15
  },
  inner: {
    color: '#15A801'
  }
});


