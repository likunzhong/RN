/**
 * Created by suiyuchen on 2017/6/21.
 */
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
    Image,
    TouchableOpacity
} from 'react-native';

export default class ComNavigator extends Component {
    render() {
        return (
            <View style={NavigatorStyle.container}>
                <TouchableOpacity activeOpacity={0.6}>
                <Image source={{uri:this.props.leftIcon}} style={NavigatorStyle.iconStyle}/>
                </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6}>
                <Image source={{uri:this.props.rightIcon}} style={NavigatorStyle.iconStyle} />
                    </TouchableOpacity>
            </View>
        );
    }
}

var NavigatorStyle = StyleSheet.create({
    container:{
        height:44,
        backgroundColor:"#F15934",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    iconStyle:{
        width:23,
        height:23,
        marginLeft:12,
        marginRight:12
    }
});

module.exports = ComNavigator;