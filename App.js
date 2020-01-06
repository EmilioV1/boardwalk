import React, { Component } from 'react';
import { StatusBar, StyleSheet, View, Text } from 'react-native';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './screens/LoginScreen';
import Signup from './screens/SignUpScreen';


export default class App extends Component {
  render() {
    return (
      <Router>
      <Stack key="root" >
        <Scene key="login" component={Login} title="Login" />
        <Scene key="signup" component={Signup} title="Signup" />
      </Stack>
      </Router>

    )}
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
