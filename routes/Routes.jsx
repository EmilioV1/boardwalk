import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from '../screens/LoginScreen';
import Signup from '../screens/LoginScreen';

export default class AppRoutes extends Component {
    render() {

        return(
            <Router>
            <Stack key="root" >
              <Scene key="login" component={Login} title="Login" />
              <Scene key="signup" component={Signup} title="Signup" />
            </Stack>
            </Router>
        );

    };
};