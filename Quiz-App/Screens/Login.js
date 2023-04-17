import React from "react";
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity} from 'react-native';


const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

class Login extends React.Component{
    render(){
      return (
        <Container>
          <StatusBar style="light"/>
          <DesignText > Let's sign you in.</DesignText>
          <DesignText> Welcome</DesignText>
          <DesignText> To Quiz Events !</DesignText>
            {/* <SmallText>Enter you register mail ID</SmallText> */}
            <TextInput placeholder="Email " keyboardType="email-address" placeholderTextColor="#666666"/>
            {/* <SmallText>Password = Date of Birth(27/03/2003)</SmallText> */}
            <TextInput placeholder="Password" secureTextEntry={true} placeholderTextColor="#666666"/>
    
            <TouchableOpacity style={{top: screenHeight - 70, position: "absolute"}} >
              <BottonView>
                <BottonText>Login</BottonText>
            </BottonView>
        </TouchableOpacity>
        </Container>
      );
    }
}
    
export default (Login);

const Container = styled.View`
    height: ${screenHeight};
    width: ${screenWidth};
    background-color: #0D0D0D;
    align-items: center;
    justify-content: center;
`;

const SmallText = styled.Text`
    color: white;
    font-size: 15px;
    margin-right: ${screenWidth - 220};
    margin-top: 20px;
`;

const DesignText = styled.Text`
    color: white;
    font-size: 50px;
    top: -80;
`;

const TextInput = styled.TextInput`
    width: ${screenWidth-30}px;
    height: 60px;
    background-color: #121212;
    border: 1px;
    border-radius: 20px;
    paddingLeft: 20px;
    color: white;
    font-size: 20px;
    margin-top: 20px;
    border-color: #666666;
`;

const BottonView = styled.View`
    width: ${screenWidth -40};
    height: 60px;
    background: #ffffff;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    
`;

const BottonText = styled.Text`
    font-weight: 100;
    font-size: 30px;
    text-align: center;
    color: #000000;
    
`;