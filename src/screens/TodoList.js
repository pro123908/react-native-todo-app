import React from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';

const TodoList = ({navigation}) => {
  const TodoList = [
    {
      id: 1,
      name: 'Todo1',
      desc: 'Todo1 Description',
    },
    {
      id: 2,
      name: 'Todo2',
      desc: 'Todo2 Description',
    },
    {
      id: 3,
      name: 'Todo3',
      desc: 'Todo3 Description',
    },
    {
      id: 4,
      name: 'Todo4',
      desc: 'Todo4 Description',
    },
    {
      id: 5,
      name: 'Todo5',
      desc: 'Todo5 Description',
    },
    {
      id: 6,
      name: 'Todo6',
      desc: 'Todo6 Description',
    },
    {
      id: 7,
      name: 'Todo7',
      desc: 'Todo7 Description',
    },
    {
      id: 8,
      name: 'Todo8',
      desc: 'Todo8 Description',
    },
  ];

  const renderTodo = ({item}) => (
    <TouchableOpacity
      style={styles.todoItem}
      onPress={() => navigation.push('Todo', {todo: item})}>
      <Text style={styles.todoTitle}>{item.name}</Text>
      <Text style={styles.todoText}>{item.desc}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TodoList</Text>
      <FlatList
        data={TodoList}
        renderItem={renderTodo}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {flex: 1},
  title: {
    fontSize: 30,
    textAlign: 'center',
  },

  todoItem: {
    marginVertical: 20,
    marginHorizontal: 10,
  },

  todoTitle: {
    fontSize: 20,
    marginBottom: 5,
    fontWeight: 'bold',
  },

  todoText: {},
});
