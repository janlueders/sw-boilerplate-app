import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    Image,
    Dimensions,
    FlatList,
    ScrollView,
    RefreshControl,
} from 'react-native';
import ImageFlatList from '../../lib/components/ImageFlatList';

export default class Screen1 extends Component {
    constructor(props) {
        super(props);
        this.state = { data: null, refreshing:false };
    }

    loadData = () => {
        let data = [
            {
                id: 0,
                name:'Testrezept',
                picture: require('../../images/300.png'),
            },
            {
                id: 2,
                name:'Testrezept',
                picture: require('../../images/300.png'),
            },
            {
                id: 3,
                name:'Testrezept',
                picture: require('../../images/300.png'),
            },
            {
                id: 4,
                name:'Testrezept',
                picture: require('../../images/300.png'),
            },
            {
                id: 5,
                name:'Testrezept',
                picture: require('../../images/300.png'),
            },
            {
                "id": 6,
                name:'Testrezept',
                picture: require('../../images/300.png'),
            },
        ]
        return data;
    }

    componentDidMount() {
        this.setState({ data: this.loadData() })
    }

    onRefresh = () => {
        this.setState({ data: this.loadData() })
    }

    //Screen1 Component
    render() {
        let dimensions = Dimensions.get("window");
        let imageHeight = Math.round((dimensions.width * 9) / 16);
        let imageWidth = dimensions.width;

        if (this.state.data === null) {
            return <Text></Text>;
        }

        return (
            <SafeAreaView style={styles.MainContainer}>
                <ScrollView
                    refreshControl={
                        <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />
                    }
                >
                    <View >
                        <Text style={styles.sallyText}>Unsere <Text style={{color:'#e6007e'}}>neuen</Text> Rezepte</Text>
                        <ImageFlatList imageHeigh={imageHeight} imageWidth={imageWidth} dataSource={this.state.data} listDirection={true}/>
                    </View>
                    <View >
                        <Text style={styles.sallyText}>Torten & <Text style={{color:'#e6007e'}}>Sahnerollen</Text></Text>
                        <ImageFlatList imageHeigh={imageHeight} imageWidth={imageWidth} dataSource={this.state.data} listDirection={true}/>
                    </View>
                    <View >
                        <Text style={styles.sallyText}>Ausgewählte Rezepte von <Text style={{color:'#e6007e'}}>Sally</Text></Text>
                        <ImageFlatList imageHeigh={imageHeight} imageWidth={imageWidth} dataSource={this.state.data} listDirection={true}/>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    horizontalImage:{
        height:80
    },
    sallyText:{
        fontSize: 24
    }
});
