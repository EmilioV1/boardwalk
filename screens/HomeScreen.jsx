import React from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, ScrollView, View, TextInput, Button, Text } from 'react-native';

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
      <Text>Hello I am in home screen</Text>
      <Button
        onPress={profile}
        title="Profile"
      >
      </Button>
      <Button
        onPress={newDebt}
        title="New Debt"
      >
      </Button>
      <Button
        onPress={oldDebt}
        title="Old Debt"
      >
      </Button>
    </View>
  );

};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

});
