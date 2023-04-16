import React from "react";
import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from '@expo/vector-icons';

class MedCard extends React.Component{
    render(){
        return (
            <Container>

                {/* <Image source={require("../assets/bigboss.png")}/> */}
                <Image source={{uri: this.props.image}}/>

                <LinearGradient 
                    colors={["rgba(0,0,0,0)","rgba(0,0,0,0.8)"]}
                    style={{position: "absolute" , width: "100%", height: "50%", top: 60}}/>
                <TextContainer>

                <Ionicons name="ios-play" color="white" size={18} />
                <Text>Tap To Play</Text>

                </TextContainer>
            
            </Container>
        )
    }
}
export default MedCard;

const Container = styled.View`
    height: 120px;
    width: 180px;
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
    margin-left: 5px;
    margin-right: 5px;

`;
const Image = styled.Image`
    width: 100%;
    height: 100%;
`;
const Text = styled.Text`
    position: absolute;
    font-size: 15px;
    font-weight: 500;
    color: white;
    left: 10px;
    padding-left: 10px;
`;
const TextContainer = styled.View`
    position: absolute;
    flex-direction: row;
    align-items: center;
    top: 95px;
    left: 5px;

`;