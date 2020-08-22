import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

const Counter = ({counter, increaseCounter, decreaseCounter}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btn}
        onPress={decreaseCounter}
        disabled={counter === 0}>
        <Text style={{fontSize: 50}}>-</Text>
      </TouchableOpacity>
      <Text style={{fontSize: 50}}>{counter}</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={increaseCounter}
        disabled={counter === 10}>
        <Text style={{fontSize: 50}}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: () => dispatch({type: 'INCREASE'}),
    decreaseCounter: () => dispatch({type: 'DECREASE'}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  btn: {
    marginHorizontal: 50,
  },
});
