import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity} from 'react-native';

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

export default function Quiz() {
  return (
    <Container>
      <StatusBar style="light" hidden={true}/>

      <Menu>
        {/* <Icon/> */}
        <Text style={{color: "white", fontSize: 30}}>Quiz App</Text>
        <Circle/>
        <SmallCircle/>
      </Menu>

      <QuizCountsContainer>
          <QuizNo>Quiz No : 01</QuizNo>
          <TotalQuiz>Total Quiz : 10</TotalQuiz>
          <Line/>
      </QuizCountsContainer>

      <QuizQuestion>
        who is the Richest man in the world ?
      </QuizQuestion>
      
        
    </Container>
  );
}

const Container = styled.View`
  height: ${screenHeight};
  width: ${screenWidth};
  background-color: #0D0D0D;

`;

const Menu = styled.View`
  height: 60px;
  width: ${screenWidth};
  background-color: #262626;
  color: white;
  padding-left: 80px;
  justify-content: center;
`;

// const Icon = styled.View`
//   width: 50px;
//   height: 40px;
//   background-color: black;
//   border-radius: 10px;
//   position: absolute;
//   margin-left: 10px;
// `;

const Circle = styled.View`
  width: 90px;
  height: 100px;
  border-radius: 60px;
  background-color: #262626;
  position: absolute;
  top: 10px;
  margin-left: ${screenWidth - 85};
`;

const SmallCircle = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: #0D0D0D;
  position: absolute;
  top: 35px;
  margin-left: ${screenWidth - 70};
`;

const QuizCountsContainer = styled.View`
  width: ${screenWidth};
  height: 40px;
  margin-top: 70px;
  margin-left: 40px;

`;

const QuizNo = styled.Text`
  color: white;
  font-size: 20px;
  position: absolute;
`;

const TotalQuiz = styled.Text`
  fontSize: 20px;
  color: white;
  position: absolute;
  margin-left: ${screenWidth -200}
  
`;

const Line = styled.View`
  width: ${screenWidth - 80};
  height: 1px;
  background-color: white;
  border-radius: 2px;
  align-items: center;
  margin-top: 30px;
`;

const QuizQuestion = styled.Text`
  color: white;
  font-size: 28px;
  margin-top: 10px;
  padding: 10px;
  text-align: center;
`;