import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default class LogoHome extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={{ width: this.props.width, height: this.props.height, borderRadius: this.props.radius }}
                    source={require('../assets/images/LogoWhiteBackground.png')}
                />
                <Text style={styles.logoText}>Welcome Back</Text>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },

    logoText: {
        padding: 10,
        fontSize: 20,
        color: '#fff',
    }
});