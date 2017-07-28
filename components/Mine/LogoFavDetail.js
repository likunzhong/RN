/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default class LogoFavDetail extends Component {
    render() {
        return (
            <View style={[LogoFavStyle.container,{borderRightWidth:2-this.props.wd}]}>
                <Text style={LogoFavStyle.txtStyle}>{this.props.num}</Text>
                <Text style={LogoFavStyle.txtStyle}>{this.props.desc}</Text>
            </View>
        );
    }
}

var LogoFavStyle = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",

        borderRightColor:"#fff"
    },
    txtStyle:{
        color:"#fff",
        fontSize:15
    }
});

module.exports = LogoFavDetail;