import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import NavigationDrawerStructure from '../side/NavigationDrawerStructure';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Platform } from 'react-native';

import search from '../../views/main/search';
import faved from '../../views/main/faved';
import main from '../../views/main/main';
import shop from '../../views/main/shop';
import ingredients from '../../views/main/ingredients';

Icon.loadFont();

export const bottomTabBar = createBottomTabNavigator({
    Home: {
        screen: createStackNavigator({
            Home:{
                screen: main,
                navigationOptions: ({ navigation }) => ({
                    title: '',
                    headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
                    headerStyle: {
                        backgroundColor: '#FFF',
                    },
                    headerTintColor: '#eee',
                }),
            }
        }),
        navigationOptions: {
            tabBarLabel:'',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="home" size={30} color={tintColor} />
            ),

        }
    },
    Suche: {
        screen: createStackNavigator({
            Suche:{
                screen: search,
                navigationOptions: ({ navigation }) => ({
                    title: '',
                    headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
                    headerStyle: {
                        backgroundColor: '#FFF',
                    },
                    headerTintColor: '#eee',
                }),
            }
        }),
        navigationOptions: {
            tabBarLabel:'',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="search" size={30} color={tintColor} />
            )
        }
    },
    Shop: {
        screen: createStackNavigator({
            Shop:{
                screen: shop,
                navigationOptions: ({ navigation }) => ({
                    title: '',
                    headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
                    headerStyle: {
                        backgroundColor: '#FFF',
                    },
                    headerTintColor: '#eee',
                }),
            }
        }),
        navigationOptions: {
            tabBarLabel:'',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="shopping-basket" size={30} color={tintColor} />
            )
        }
    },
    Gemerkt: {
        screen: createStackNavigator({
            Gemerkt:{
                screen: faved,
                navigationOptions: ({ navigation }) => ({
                    title: '',
                    headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
                    headerStyle: {
                        backgroundColor: '#FFF',
                    },
                    headerTintColor: '#eee',
                }),
            }
        }),
        navigationOptions: {
            tabBarLabel:'',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="bookmark" size={30} color={tintColor} />
            )
        }
    },
    Einkaufsliste:{
        screen: createStackNavigator({
            Einkaufsliste:{
                screen: ingredients,
                navigationOptions: ({ navigation }) => ({
                    title: '',
                    headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
                    headerStyle: {
                        backgroundColor: '#FFF',
                    },
                    headerTintColor: '#eee',
                }),
            }
        }),
        navigationOptions: {
            tabBarLabel:'',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="list-alt" size={30} color={tintColor} />
            )
        }
    }
},{
    initialRouteName: 'Home',
    tabBarOptions: {
        headerMode: 'none',
        activeTintColor: '#e6007e',  // Color of tab when pressed
        inactiveTintColor: '#b5b5b5', // Color of tab when not pressed
        showIcon: 'true', // Shows an icon for both iOS and Android
        showLabel: (Platform.OS !== 'android'), //No label for Android
        labelStyle: {
            fontSize: 11,
        },
        style: {
            backgroundColor: '#fff', // Makes Android tab bar white instead of standard blue
            height: (Platform.OS === 'ios') ? 48 : 50 // I didn't use this in my app, so the numbers may be off.
        }
    },
});
