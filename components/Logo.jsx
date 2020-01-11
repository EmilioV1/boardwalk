import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default class Logo extends Component {
    render() {

        return (
            <View style={styles.container}>
                <Image
                    style={{ width: 250, height: 250, borderRadius: 50 }}
                    source={require('../assets/images/LogoWhiteBackground.png')}
                />
                <Text style={styles.logoText}>Welcome to Boardwalk</Text>
            </View>
        );

    };
};

const styles = StyleSheet.create({

    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    logoText: {
        marginVertical: 40,
        fontSize: 20,
        color: '#fff',
    }

});