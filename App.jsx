import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Login from './screens/LoginScreen';
import Signup from './screens/SignUpScreen';
import Home from './screens/HomeScreen';

export default class App extends Component {

  state = {
    loggedIn: false
  }

handleAuth = () => {
  this.setState({loggedIn: true});
}


  render() {

    return (
      <Router>
        {this.state.loggedIn?
        <Stack key = "root">
          <Scene key="home" component={Home} title="Home" />
        </Stack>:
        
        <Stack key="root" >
          <Scene key="login" component={()=><Login handleAuth = {this.handleAuth}/>} title="Login"/>
          <Scene key="signup" component={Signup} title="Signup" />
        </Stack>}
        

        

      </Router>
    );

  };

};