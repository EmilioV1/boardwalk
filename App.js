import React, { Component } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';

import Routes from './routes/Routes';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#1c313a" barStyle="light-content" />   
        <Routes/>     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
