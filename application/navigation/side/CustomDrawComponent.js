import React, { Component } from 'react';
import {ScrollView, Text, View, Image, SafeAreaView, StyleSheet} from 'react-native';
import { NavigationActions } from 'react-navigation';

class CustomDrawComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { data: null };
    }

    async componentDidMount() {
        let data = [
            {
                id: 0,
                name:'Rezepte A-Z',
                picture: require('../../images/catImgs/essen.png'),
            },
            {
                id: 2,
                name:'Herzhafte Rezepte',
                picture: require('../../images/catImgs/croissant.png'),
            },
            {
                id: 3,
                name:'Süße Rezepte',
                picture: require('../../images/catImgs/kuchen.png'),
            },
            {
                id: 4,
                name:'Getränke',
                picture: require('../../images/catImgs/drinks.png'),
            },
            {
                id: 5,
                name:'Saisonal',
                picture: require('../../images/catImgs/essen.png'),
            },
            {
                "id": 6,
                "name":'Sallys Welt',
                "picture": require('../../images/catImgs/drinks.png'),
            },
        ]
        this.setState({ data })
    }

    navigateToScreen(routeName, params) {
        return () => { this.props.navigation.dispatch(NavigationActions.navigate({ routeName, params })) };
    }

    render() {
        if (this.state.data === null) {
            return <Text></Text>;
        }

        return (

            <SafeAreaView style={styles.safeView}>
                <View style={styles.logo} >
                    <Image
                        source={require('../../images/Sally_Logo.png')}
                        style={{ flex:1, height: 65, width: 66}}
                    />
                </View>
                <ScrollView>
                    <View>
                        <View key={'view0'} style={styles.navRowContainer}>
                            <Image source={require('../../images/shop.png')}
                                   style={styles.navContainerImage}
                            />

                            <Text key='0' style={styles.navContainerText}
                                  onPress={this.navigateToScreen('Home')}
                            >
                                Startseite
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            borderBottomColor: 'grey',
                            borderBottomWidth: 0.2,
                        }}
                    />
                    <View>
                        {this.state.data.map(x => (
                            <View key={'view'+x.id} style={styles.navRowContainer}>
                                <Image source={x.picture}
                                       style={styles.navContainerImage}
                                />

                                <Text key={x.id} style={styles.navContainerText}
                                    onPress={this.navigateToScreen('Home',{x})}
                                >
                                    {x.name}
                                </Text>
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    safeView: {
        flex: 1,
        paddingTop: 30
    },
    logo:{
        height:65,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    navRowContainer:{
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 10,
        alignItems: 'center'
    },
    navContainerImage:{
        height: 24,
        width: 24,
        marginRight: 10,
    },
    navContainerText:{
        fontSize: 16,
        lineHeight: 30,
    }
});

export default CustomDrawComponent;
