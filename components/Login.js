import React from "react";
import styled from 'styled-components';
import {TouchableOpacity} from "react-native";
import Loading from "./Loading";
import Success from "./Success";

class Login extends React.Component{
    state={
        email: "",
        password: "",
        isLoading: false,
        isSuccess: false
    }
    handleLogin = () =>{
        this.setState({isLoading: true});

        setTimeout(() => {
            this.setState({ isLoading: false});
            this.setState({ isSuccess: true})
        },2000)
    };

    render(){
        return(
            <Container>
                <Box>
                    <Text>Members Login</Text>
                    <TextInput placeholder="Email or Username" keyboardType="email-address" 
                    onChangeText = {(email) =>  {
                        this.setState({email: email})                        
                    }}/>
                    <TextInput placeholder="Password" secureTextEntry={true}
                    onChangeText = {(password) =>  {
                        this.setState({password: password})                        
                    }}
                    />
                    <TouchableOpacity onPress={this.handleLogin}>
                        <BottonView>
                            <BottonText>LOGIN</BottonText>
                        </BottonView>
                    </TouchableOpacity>
                </Box>
                <Loading isActive={this.state.isLoading}/>
                <Success isSuccess = {this.state.isSuccess}/>
            </Container>
        )
    }
}

export default (Login);

const Container = styled.View`
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba( 0, 0, 0, 0.8);
    justify-content: center;
    align-items: center;
`;

const Box = styled.View`
    width: 370px;
    height: 400px;  
    background: white;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
`;

const Text = styled.Text`
    font-weight: 500;
    font-size: 30px;
    text-align: center;
    margin-bottom: 50px;
`;

const TextInput = styled.TextInput`
    width: 325px;
    height: 40px;
    background: #ECECEC;
    border-radius: 10px;
    margin-top: 20px;
    padding-left: 10px;
    font-size: 20px;
    
`;

const BottonView = styled.View`
    width: 180px;
    height: 40px;
    margin-top: 40px;
    background: #3CA2FF;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;

const BottonText = styled.Text`
    font-weight: 900;
    font-size: 22px;
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;
    
`;