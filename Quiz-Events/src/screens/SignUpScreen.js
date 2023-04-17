import { StyleSheet, Text, View, SafeAreaView, Alert} from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../constants/theme';
import FromInput from '../components/shared/FromInput';
import FormButton from '../components/shared/FormButton';
import { signUp } from '../utils/auth';

const SignUpScreen = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleOnSubmit = () =>{
    if(email!='' && password!='' && confirmPassword!=''){
      if(password==confirmPassword){
        signUp(email,password);

      }else{
        Alert.alert('Password did not match');
      }
    }
  };

  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: COLORS.white,
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: 20
    }}>

      {/* Header  */}
      <Text 
      style={{
        fontSize: 24,
        color: COLORS.black,
        fontWeight: 'bold',
        marginVertical: 32
      }}>
      Sign Up
      </Text>

      {/* Email  */}
      <FromInput 
        labelText='Email'
        placeholderText='Enter your email'
        onChangeText={value => this.setState(value)}
        value={email}
        keyboardType = {'email-address'}
        textEntry = {false}
      />

      {/* Password  */}
      <FromInput 
        labelText='Password'
        placeholderText='Enter your password'
        onChangeText={value => setPassword(value)}
        value={password}
        textEntry = {true}
      />

      {/* Confirm Password  */}
      <FromInput 
        labelText='Confirm Password'
        placeholderText='Enter your password again'
        onChangeText={value => setConfirmPassword(value)}
        value={confirmPassword}
        textEntry = {true}
      />
      
      {/* Submit Button  */}
      <FormButton labelText='Sign up' handleOnPress={handleOnSubmit} />

      {/* Footer  */}
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
      <Text>Already have an account?</Text>
      <Text style={{marginLeft: 4, color: COLORS.primary}} 
        onPress={()=> navigation.navigate("SignInScreen")}>
        Sign in
      </Text>
      </View>

    
    </SafeAreaView>
  )
}

export default SignUpScreen;

const styles = StyleSheet.create({})