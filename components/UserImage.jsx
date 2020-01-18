import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default class UserImage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={{ width: 200, height: 200, borderRadius: 125 }}
                    source={{uri: 'https://i.kym-cdn.com/photos/images/original/000/456/353/05a.jpg'}}
                />
                <Text style={styles.name}>Nicholas Cage</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
    },

    name: {
        padding: 10,
        fontSize: 40,
        color: '#fff',
    }

});
