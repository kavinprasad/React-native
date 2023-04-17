import React, { useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from "@react-native-async-storage/async-storage";
const STORAGE_KEY = 'TASKS';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    saveTasks();
  }, [tasks]);

  const handleAddTask = () => {
    if (task.length > 0) {
      const newTask = {
        id: Date.now(),
        title: task,
      };
      setTasks([...tasks, newTask]);
      setTask('');
    }
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleSearch = (text) => {
    setSearch(text);
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase()),
  );

  const saveTasks = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (error) {
      console.log('Error saving tasks:', error);
    }
  };

  const loadTasks = async () => {
    try {
      const tasksString = await AsyncStorage.getItem(STORAGE_KEY);
      if (tasksString !== null) {
        const tasksArray = JSON.parse(tasksString);
        setTasks(tasksArray);
      }
    } catch (error) {
      console.log('Error loading tasks:', error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.headText}>Todo List</Text>

      <Text style={styles.newTodoText}>Add a new Todo</Text>

      <TextInput placeholder='Enter the Text' placeholderTextColor="#fff" style={styles.inputStyle} onChangeText={(text) =>
        setTask(text)} value={task} />

      <TouchableOpacity style={styles.button} onPress={handleAddTask}>
        <View style={styles.button}>
          <Text style={styles.newTodoText}>Add</Text>
        </View>
      </TouchableOpacity>

      <TextInput placeholder='Search Todos' placeholderTextColor="#fff" style={[styles.inputStyle, { marginTop: '15%' }]} onChangeText={handleSearch} value={search} />

      <ScrollView showsVerticalScrollIndicator={false}>

        {filteredTasks.map((task) => (
          <View style={styles.listView}>
            <Text style={[styles.newTodoText, { width: '93%' }]}>{task.title}</Text>
            <TouchableOpacity key={task.id} style={styles.delete} onPress={() => handleDeleteTask(task.id)}>
              <Icon name="trash" size={20} color="#fff" />
            </TouchableOpacity>
          </View>

        ))}



      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#352f5b',
    alignItems: 'center',
    padding: '5%'
  },
  headText: {
    color: 'white',
    fontSize: 50,
    marginTop: '15%',
    marginBottom: '5%',
    fontWeight: 600
  },
  inputStyle: {
    width: '100%',
    color: '#fff',
    backgroundColor: '#201C37',
    borderRadius: 5,
    fontSize: 18,
    padding: 10,
    marginBottom: '5%',
    marginTop: '5%'
  },
  newTodoText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 400,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#3CA2FF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  listView: {
    backgroundColor: '#423A6F',
    padding: 10,
    width: '100%',
    borderRadius: 5,
    margin: 3,
    display: 'flex',
    flexDirection: 'row'
  },
  delete: {
    justifyContent: 'center',
    alignItems: 'center'
  }

});
