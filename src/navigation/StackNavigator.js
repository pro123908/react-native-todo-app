import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from '../screens/Welcome';
import TodoList from '../screens/TodoList';
import Todo from '../screens/Todo';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="TodoList"
        component={TodoList}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="Todo"
        component={Todo}
        options={{headerShown: false}}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
