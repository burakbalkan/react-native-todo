import React,{ useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import CheckBox from '@react-native-community/checkbox';
export default function TodoList(props) {
  //console.log(props.todo, "logging props");
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.listTile}>
       <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
      <Text style={isSelected === true ? ({textDecorationLine:'line-through',width: "60%",fontSize: 18}) : {width: "60%",fontSize: 18}}>{props.todo.name}</Text>
      <Button title="Delete"onPress={() => {props.deleteTodo(props.index)}} color="#7F39FB" />      
    </View>
  );
}

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
  }
});
