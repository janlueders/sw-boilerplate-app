//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';
import {getData} from '../../lib/components/Network';

export default class Faved extends Component {

    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            data: null
        };
    }

    webCall() {
        getData('articles',0,50).then((responseJson) => {
            this.setState({ data: responseJson, isLoading: false});
        });
    }

    componentDidMount(): void {
        this.webCall();
    }

    //Search Component
    render() {
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <ActivityIndicator size="large"/>
                </View>
            );
        }

        return (
            <View style={styles.MainContainer}>
                <Text style={{ fontSize: 23 }}> Shop </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        paddingTop: 20,
        alignItems: 'center',
        marginTop: 50,
        justifyContent: 'center',
    },
});
