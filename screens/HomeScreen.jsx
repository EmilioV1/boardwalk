import React from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, View, Button, Text } from 'react-native';
import Logo from '../components/Logo';

export default function HomeScreen() {

  const profile = () => {
    Actions.profile();
  };

  const newDebt = () => {
    Actions.newDebt();
  };

  const oldDebt = () => {
    Actions.oldDebt();
  };

  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.homeText}>Hello, I am the home screen!</Text>
      <View style={styles.homeButtonsContainer}>
        <View style={styles.homeButtons}>
          <Button
            onPress={profile}
            title="Profile"
          >
          </Button>
        </View>
        <View style={styles.homeButtons}>
          <Button
            onPress={newDebt}
            title="New Debt"
          >
          </Button>
        </View>
        <View style={styles.homeButtons}>
          <Button
            onPress={oldDebt}
            title="Old Debt"
          >
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#17233f',
    alignItems: 'center',
    justifyContent: 'center'
  },

  homeText: {
    color: '#fff'
  },

  homeButtonsContainer: {
    justifyContent: 'center',
  },

  homeButtons: {
    backgroundColor: 'black',
    margin: 10,
    fontWeight: '500',
  }

});
