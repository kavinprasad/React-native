import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {React,useState} from 'react';
import {COLORS} from '../constants/theme';
import FromInput from '../components/shared/FromInput';
import FormButton from '../components/shared/FormButton';
import { signIn } from '../utils/auth';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';


const SignInScreen = ({navigation}) => {

  state={
    email:"",
    password:""
  };

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState(''); 

  // const handleOnSubmit = () => {
  //   if(email!='' && password!=''){
  //       // signIn(email ,password)
  //       console.log(email,password);
  //   }
  // };

  const handleLogin = () => {
    console.log("email : ", this.state.email);
    console.log("password : ", this.state.password);
  }


  return (
    <SafeAreaView style={{
      backgroundColor: COLORS.white,
      flex:1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: 20
    }}>
    
      {/* Header */}
      <Text style={{fontSize: 24,color:COLORS.black,fontWeight: 'bold',marginVertical: 32}}>Sign In</Text>

      <TextInput 
    placeholder = 'Email' 
    keyboardType = 'email-address'
    onChangeText = {email => {this.setState({email: email})}}/>

    <TextInput 
    placeholder = 'Password' 
    secureTextEntry = {true} 
    onChangeText = {password => {this.setState({password: password})}}/>

    <TouchableOpacity onPress={handleLogin}>
      <Text>Submit</Text>
    </TouchableOpacity>










      {/* Email  */}
      {/* <FromInput 
      labelText = 'Email'
      placeholderText='Enter your email' 
      onChangeText={value => setEmail(value)}
      value={email}
      keyboardType={'email-address'}
      textEntry={false}
      /> */}

      {/* Password */}
      {/* <FromInput 
      labelText = 'Password' 
      placeholderText='Enter your password' 
      onChangeText={value => setPassword(value)}
      value={password} 
      textEntry={true}/> */}


      {/* Submit */}
      {/* <FormButton labelText="Submit" handleOnPress={handleOnSubmit} /> */}


      {/* Footer */}
      {/* <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
      <Text>Don't have an account?</Text>
      <Text style={{marginLeft: 4, color: COLORS.primary}} 
        onPress={()=> navigation.navigate("SignUpScreen")}>
        Create an account
      </Text>

      </View> */}



    </SafeAreaView>
  )
}

export default SignInScreen;

const styles = StyleSheet.create({})