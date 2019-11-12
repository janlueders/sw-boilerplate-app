//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text } from 'react-native';
import {fetchUrl} from '../../../lib/components/Network';
// import all basic components

export default class DetailReceipt extends Component {

    constructor(props){
        super(props);
        this.state.receiptImage = null;
        this.state.receiptText = null
        this.state.receiptIngredienceList = null
    }

    componentDidMount(): void {
        getReceipt(0,50);
    }

    getReceipt(start,limit){

    }

    //Screen2 Component
    render() {
        return (
            <View style={styles.MainContainer}>
                <Text style={{ fontSize: 23 }}> I'm a Detail Screen </Text>
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
