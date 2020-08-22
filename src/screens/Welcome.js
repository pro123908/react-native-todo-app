import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>TODO App</Text>
      <TouchableOpacity
        style={styles.welcomeBtn}
        onPress={() => navigation.navigate('TodoList')}>
        <Text style={styles.welcomeBtnText}>Proceed</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  welcomeBtn: {
    marginVertical: 20,
  },

  welcomeBtnText: {
    fontSize: 20,
    backgroundColor: '#2A9D8F',
    color: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
});
