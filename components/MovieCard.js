import React from "react";
import styled from "styled-components";


class MovieCard extends React.Component{
    render(){
        return (
            <Container>

                {/* <Image source={require("../assets/bigboss.png")}/> */}
                <Image source={{uri: this.props.image}}/>
            
            </Container>
        )
    }
}
export default MovieCard;

const Container = styled.View`
    height: 190px;
    width: 160px;
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
