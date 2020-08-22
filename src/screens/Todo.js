import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Todo = ({route}) => {
  const {name, desc} = route.params.todo;
  return (
    <View style={styles.container}>
      <Text style={styles.todoTitle}>{name}</Text>
      <Text style={styles.todoText}>{desc}</Text>
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 10,
  },

  todoTitle: {
    fontSize: 30,
    marginBottom: 10,
  },

  todoText: {
    fontSize: 20,
  },
});
