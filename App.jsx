import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Login from './screens/LoginScreen';
import Signup from './screens/SignUpScreen';
import Home from './screens/HomeScreen';
import Profile from './screens/ProfileScreen';
import NewDebt from './screens/NewDebt';
import OldDebt from './screens/OldDebt';

export default class App extends Component {

  state = {
    loggedIn: false
  }

  handleAuth = () => {
    this.setState({ loggedIn: true });
  }


  render() {

    return (
      <Router>
        {this.state.loggedIn ?
          <Stack key="root">
            <Scene key="home" component={Home} title="Home" />
            <Scene key="profile" component={Profile} title="Profile" />
            <Scene key="newDebt" component={NewDebt} title="New Debt" />
            <Scene key="oldDebt" component={OldDebt} title="Old Debt" />
            <Scene key="faq" component={Home} title="FAQ" />
          </Stack> :

          <Stack key="root" >
            <Scene key="login" component={() => <Login handleAuth={this.handleAuth} />} title="Login" />
            <Scene key="signup" component={Signup} title="Signup" />
          </Stack>}




      </Router>
    );

  };

};