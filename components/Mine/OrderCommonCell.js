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

var OrderCommonCell = React.createClass({
    render:function () {
        return (
            <TouchableOpacity>
                <View style={OrderCommonCellStyle.container}>
                    <Image
                        style={OrderCommonCellStyle.iconStyle}
                        source={{uri:this.props.icon}}/>
                    <Text>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
});

var OrderCommonCellStyle = StyleSheet.create({
    container:{
        alignItems:"center"
    },
   iconStyle:{
       width:30,
       height:25
   }
})

module.exports = OrderCommonCell;