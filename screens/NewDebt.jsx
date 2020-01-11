import React from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, View, Text } from 'react-native';

export default function NewDebt() {

  return (
    <View style={styles.container}>
      <Text style={styles.newDebtText}>Hello, I am the new debt screen!</Text>
    </View>
  );

};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#17233f',
    alignItems: 'center',
    justifyContent: 'center',
  },

  newDebtText: {
    color: '#fff'
  }

});