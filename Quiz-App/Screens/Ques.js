import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Ques = ({navigation}) =>  {
  const [questions, setQuestions] = useState();
  const getQuiz=async()=>{
    
  };
  useEffect(() => {
    getQuiz();
  },[]);
  
  return (
    <View style={styles.Container}>
      <View style={styles.Top}>
          <Text style={styles.question}>Q. Imagine this is a really cool question </Text>
      </View>

      <View style={styles.Options}>
      <TouchableOpacity style={styles.optionButton}>
        <Text style={styles.option}> Cool Option 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionButton}>
        <Text style={styles.option}> Cool Option 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionButton}>
        <Text style={styles.option}> Cool Option 3</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionButton}>
        <Text style={styles.option}> Cool Option 4</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.Bottom}>
      <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Result")}>
              <Text style={styles.buttonText}>End</Text>
          </TouchableOpacity> */}
      </View>
    </View>
  )
}

export default Ques;
const styles = StyleSheet.create({
    Container:{
        padding: 20,
        paddingHorizontal: 20,
        height: '100%'
    },
    Top:{
        marginVertical: 16
    },
    Options:{
        marginVertical: 16,
        flex: 1,
    },
    Bottom:{
        marginBottom: 12,
        paddingVertical: 16,
        justifyContent: "space-between",
        flexDirection: 'row',
    },
    button:{
      backgroundColor: '#1A759F',
      padding: 12,
      paddingHorizontal: 25,
      borderRadius: 16,
      alignItems: 'center',
      marginBottom: 20
    },
    buttonText:{
      fontSize: 18,
      fontWeight: '600',
      color: 'white'
    },
    question:{
      fontSize: 28,

    },
    option:{
      fontSize: 18,
      fontWeight: '400',
      color: 'white'

    },
    optionButton:{
      paddingVertical: 12,
      marginVertical: 6,
      backgroundColor: '#34A0A4',
      paddingHorizontal: 12,
      borderRadius: 12
    }
})