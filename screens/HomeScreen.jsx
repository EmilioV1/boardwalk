import React from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Button, Text, StyleSheet, Alert, ImageBackground } from 'react-native';
import styles from '../constants/Styles';
import LogoHome from '../components/LogoHome';

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
        {
          text: 'OK', onPress: () => {
            alert('Logged Out', '')
            setTimeout(() => props.handleAuth(), 2000);

          }
        },
      ],
      { cancelable: false },
    );

  }

  return (
    <ImageBackground source={require('../assets/images/background.png')} style={styles.backgroundImage}>
    <View style={styles.container}>
      <LogoHome height={200} width={200} radius={20} />

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
          color='black'
          onPress={logOut}
          title="Log Out"

        >
        </Button>
      </View>

      <View style={{ height: 40 }} />
    </View>
    </ImageBackground>
  );
};

const homeStyle = StyleSheet.create({
  buttonsContainer: {
    justifyContent: 'center',
    flexDirection: 'column'
  },
  button: {
    backgroundColor: '#463547',
    margin: 10,
    width: 300,
    padding: 5,
    borderRadius: 2,
    marginVertical: 10,
    borderRadius: 30,
    fontWeight: 'bold'
  },
  logOutButton: {
    backgroundColor: 'white',
    margin: 5,
    width: 100,
    padding: 5,
    borderRadius: 30
  }
});