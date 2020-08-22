import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Counter from './src/Counter';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';

const initialState = {
  counter: 0,
};

const limits = {
  LOWER: 0,
  UPPER: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE': {
      return state.counter === limits.UPPER
        ? state
        : {counter: state.counter + 1};
    }
    case 'DECREASE': {
      return state.counter === limits.LOWER
        ? state
        : {counter: state.counter - 1};
    }

    default:
      return state;
  }
};

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
