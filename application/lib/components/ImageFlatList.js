import React, {Component} from 'react';
import {StyleSheet, Platform, View, ActivityIndicator, FlatList, Image, Alert, YellowBox,TouchableWithoutFeedback,RefreshControl} from 'react-native';

export default class ImageFlatList extends Component {

    constructor(props) {

        super(props);

        this.state = {
            isLoading: true,
        };

        YellowBox.ignoreWarnings([
            'Warning: componentWillMount is deprecated',
            'Warning: componentWillReceiveProps is deprecated',
        ]);

    }

    GetItem(flower_name) {

        Alert.alert(flower_name);

    }

    webCall = () => {
        this.setState({
            isLoading: false,
            dataSource: this.props.dataSource,
        });
        /*return fetch('https://reactnativecode.000webhostapp.com/FlowersList.php')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                }, function () {
                    // In this block you can do something with new state.
                });
            })
            .catch((error) => {
                console.error(error);
            });*/
    };

    componentDidMount() {
        this.webCall();
    }

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
                <FlatList
                    horizontal={this.props.listDirection}
                    data={this.state.dataSource}
                    renderItem={({item}) =>
                        <TouchableWithoutFeedback onPress={() => this.GetItem('thouched')}>
                        <View key={item.id}
                              style={{height: this.props.imageHeight, width:this.props.imageWidth}}>
                            <Image source={item.picture}
                                   style={styles.flatListImage}
                            />
                        </View>
                        </TouchableWithoutFeedback>
                    }
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({

    MainContainer: {
        justifyContent: 'center',
        margin: 5,
        marginTop: (Platform.OS === 'ios') ? 20 : 0,

    },
    imageView: {
        width: '50%',
        height: 100,
        margin: 7,
        borderRadius: 7,
    },
    flatListImage:{
        borderRadius: 20,
        marginLeft: 30
    }
});
