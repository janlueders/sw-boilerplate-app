import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

class SplashScreen extends Component {
    performTimeConsumingTask = async() => {
        return new Promise((resolve) =>
            setTimeout(
                () => { resolve('result') },
                2000
            )
        )
    }

    async componentDidMount() {
        // Preload data from an external API
        // Preload data using AsyncStorage
        const data = await this.performTimeConsumingTask();

        if (data !== null) {
            this.props.navigation.navigate('App');
        }
    }

    render() {
        const viewStyles = [
            styles.container,
            { backgroundColor: 'white' }
        ];

        return (
            <View style={styles.viewStyles}>
                <Image source={require('../../images/Sally_Logo.png')} style={{ height: 64, width:64}}/>
            </View>
        );
    }
}

const styles = {
    viewStyles: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyles: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold'
    }
}

export default SplashScreen;
