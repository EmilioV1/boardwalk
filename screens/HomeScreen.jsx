import React from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Button, Text, StyleSheet, Alert } from 'react-native';
import styles from '../constants/Styles';
import Logo from '../components/Logo';

export default function HomeScreen(props) {

  const profile = () => {
    Actions.profile();
  };

  const newDebt = () => {
    Actions.newDebt();
  };

  const oldDebt = () => {
    Actions.oldDebt();
  };

  const logOut = () => {

    Alert.alert(
      'Warning',
      'You are about to log out',
      [
        {
          text: 'Cancel',
          onPress: () => alert('Yay Staying'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => {alert('Logged Out','')
        setTimeout(() => props.handleAuth(), 2000);
        
      } },
      ],
      { cancelable: false },
    );
   
  }

  return (
    <View style={styles.container}>
      <Logo height={100} width={100} radius={20} />

      <View>
        <View style={homeStyle.buttonsContainer}>
          <View style={homeStyle.button}>
            <Button
              onPress={profile}
              title="Profile"
              color='#fff'
            >
            </Button>
          </View>
          <View style={homeStyle.button}>
            <Button
              onPress={newDebt}
              title="New Debt"
              color='#fff'
            >
            </Button>
          </View>
          <View style={homeStyle.button}>
            <Button
              color='#fff'
              onPress={oldDebt}
              title="Old Debt"
            >
            </Button>
          </View>
        </View>
      </View>
      <View style={homeStyle.logOutButton}>
        <Button
          color='#fff'
          onPress={logOut}
          title="Log Out"
        >
        </Button>
      </View>

      <View style={{ height: 40 }} />
    </View>
  );
};

const homeStyle = StyleSheet.create({
  buttonsContainer: {
    justifyContent: 'center',
    flexDirection: 'column'
  },
  button: {
    backgroundColor: 'black',
    margin: 10,
    width: 300,
    padding: 5,
    borderRadius: 2,
    marginVertical: 10,
    shadowOffset: { width: 10, height: 10, },
    shadowColor: 'white',
    shadowOpacity: 1.0,
  },
  logOutButton: {
    backgroundColor: 'red',
    margin: 5,
    width: 100,
    padding: 5,
    shadowOffset: { width: 4, height: 2, },
    shadowColor: 'white',
    shadowOpacity: 0.5,
  }
});