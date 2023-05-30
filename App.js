import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Dimensions, TouchableOpacity, TextInput, Share } from 'react-native';
import FloatingAddButton from './components/FloatingAddButton';
import Note from './components/Note';
import SearchInput from './components/SearchInput';
import Tab from './components/Tab';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";
const STORAGE_KEY = 'TASKS';

const currentDate = new Date();
const options = { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' };
const currentDateString = currentDate.toLocaleDateString('en-GB', options);

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;


// Todo : Swipe Back bug && notes list based on Timing

export default function App() {

  const [screen, setScreen] = useState('home');

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [time, setTime] = useState('');
  const [noteId, setId] = useState('');

  const [tasks, setTasks] = useState([]);
  const [searchText, setSearch] = useState('');

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    saveTasks();
  }, [tasks]);

  const resetState = () => {
    setScreen('home');
    setId('');
    setTitle('');
    setText('');
    setTime('');
  };

  const submitNote = (ids) => {
    const edited = tasks.find((obj) => obj.id === ids);


    if (edited) {
      edited.title = title;
      edited.time = currentDateString;
      edited.text = text;
    } else {

      if (text.length > 0) {
        const newTask = {
          id: Date.now(),
          title: title,
          time: currentDateString,
          text: text,
        };
        setTasks([...tasks, newTask]);
      }
    }
    resetState();
    setScreen('home');
  };

  const DeleteNote = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    resetState();
  };

  const searchNote = (searchText) => {
    setSearch(searchText);
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchText.toLowerCase()) || task.text.toLowerCase().includes(searchText.toLowerCase())
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


  const addNote = () => {
    resetState();
    setScreen('newNote');
  };
  const handleGoBack = () => {
    resetState();
    setScreen('home');
  };


  const editNote = (ids) => {
    setId(ids);
    const edit = tasks.find((obj) => obj.id === ids);
    setTitle(edit.title);
    setText(edit.text);
    setTime(edit.time);
    setScreen('newNote');

  };

  const share = async () => {
    try {
      const edited = tasks.find((obj) => obj.id === noteId);
      await Share.share({
        message: "Title : " + edited.title + "\n" + edited.text
      });
    }
    catch (error) {
      console.log(error.message);
    }

  };

  if (screen === 'home') {
    return (

      <View style={styles.container}>
        <StatusBar style="auto" />

        <SearchInput onChangeText={searchNote} value={searchText} />

        <View style={styles.tab}>
          <View style={styles.allTab}>
            <Text style={{ fontWeight: 700 }}>All</Text>
          </View>

          <Tab />

        </View>


        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.noteList}>
            {filteredTasks.map((note) => (
              <TouchableOpacity style={styles.boxNotes} onPress={() => editNote(note.id)} key={note.id}>
                <Note title={note.title} notes={note.text} time={note.time}
                />
              </TouchableOpacity>
            )).reverse()
            }

          </View>
        </ScrollView>

        <FloatingAddButton onPress={addNote} />

      </View>
    );
  }
  else {
    return (
      <View style={styles.containerNewNode}>
        <StatusBar style="auto" />
        <View style={[styles.infoBox, { marginTop: 25 }]}>
          <TouchableOpacity style={{ width: '60%' }} onPress={handleGoBack}>
            <Ionicons name="arrow-back-outline" size={25} color={'#000'} />
          </TouchableOpacity>

          <TouchableOpacity style={{ marginHorizontal: 10 }} onPress={() => submitNote(noteId)}>
            <Ionicons name="checkmark-outline" size={25} color={'#000'} />
          </TouchableOpacity>

          <TouchableOpacity style={{ marginHorizontal: 10 }} onPress={() => share()}>
            <Ionicons name="share-outline" size={25} color={'#000'} />
          </TouchableOpacity>

          <TouchableOpacity style={{ marginHorizontal: 10 }} onPress={() => DeleteNote(noteId)}>
            <Ionicons name="trash-outline" size={25} color={'#000'} />
          </TouchableOpacity>
        </View>
        <TextInput placeholder='Title' style={{ fontSize: 25, marginVertical: 5, width: '100%' }} value={title} onChangeText={(title) =>
          setTitle(title)} />
        <View style={styles.infoBox}>
          <Text style={styles.time}>{currentDateString}</Text>
          <Text style={styles.time}>|</Text>
          <Text style={styles.time}>{text.length} characters</Text>
        </View>

        <TextInput onChangeText={(newText) => setText(newText)} value={text} placeholder='Start typing' multiline={true} style={styles.inputNote} />

      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    padding: 10
  },
  noteList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    height: '100%',
    flex: 1,
    marginTop: 10
  },
  tab: {
    width: '100%',
    height: '5%',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    margin: 10
  },
  allTab: {
    backgroundColor: '#EEEEEE',
    width: 40,
    height: 40,
    borderRadius: 10,
    margin: 5,
    alignItems:
      'center',
    justifyContent: 'center'
  },
  containerNewNode: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  infoBox: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    marginVertical: 10,
    alignItems: 'center'
  },
  time: {
    paddingHorizontal: 5,
    color: '#aaaaaa',
    fontSize: 12
  },
  inputNote: {
    width: '100%',
    height: '100%',
    textAlignVertical: "top",
    padding: 5,
    lineHeight: 25,
    fontSize: 16,
    marginVertical: 10
  },
  boxNotes: {
    backgroundColor: '#fff',
    width: screenWidth / 2 - 18,
    borderRadius: 20,
    padding: 15,
    margin: 4
  }

});
