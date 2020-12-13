/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{ useState, useEffect }  from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  ScrollView
} from 'react-native';
import TodoList from "./TodoList";
export default function App() {

const [title, setTitle] = useState('');
const [todos, setTodos] = useState([]);
  
const checkTodo = id => {
  setTodos(
    todos.map(todo => {
      if (todo.key === id) {
        todo.isChecked = !todo.isChecked;
      }
      return todo;
    })
  );
};

const addTodo = () => {
  if (title.length > 0) {      
    setTodos([...todos, { key: Date.now(), name: title }]);    
    setTitle("");
  }
};

const deleteTodo = (index) => {
  const temp = [...todos]; 
  temp.splice(index, 1);
  setTodos(temp);
};

  return (
    <View>
      <View style={styles.appBar}>
      <Text style={styles.heading}>Todo App</Text>
  </View>
  <View style={styles.todo}>
      <TextInput 
        placeholder="Add a todo" 
        value={title}
        onChangeText={value=>setTitle(value)}
        style={styles.textbox} />
      <Button 
        title="Add" 
        color='#7F39FB'
        onPress={addTodo}
      />
    </View>
    <ScrollView>
        {todos.map((todo, index) => (          
          <TodoList
            key={index}
            todo={todo}
            checkTodo={checkTodo}
            deleteTodo={deleteTodo}
            index={index}           
          />
        ))}
        
      </ScrollView>
 </View>

  );
};

const styles = StyleSheet.create({
  listTile: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#666666"
  },
  leading: {
    width: "20%"
  },
  title: {
    width: "60%",
    fontSize: 18
  },
  trailing: {
    width: "20%"
  },
  appBar: {
    backgroundColor: "#7F39FB",
    color: "white",
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  heading: {
    color: "white",
    fontSize: 24,
    fontWeight: "400"
  },
  todo: {
    flexDirection: "row",
    width: "100%",
    justifyContent:'center',
    alignItems:'center'
  },
  textbox: {
    borderWidth: 1,
    borderColor: "#7F39FB",
    borderRadius: 8,
    padding: 10,
    margin: 10,
    width:'80%'
  }
});
