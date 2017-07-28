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
    Switch,
    TouchableOpacity
} from 'react-native';

var MoreCell = React.createClass({
    getInitialState:function () {
        return {
            checked:false
        }
    },
    render:function () {
        return (
            <TouchableOpacity activeOpacity={0.6}>
                <View style={moreCellStyle.container}>
                    <Text style={{marginLeft:10}}>{this.props.title}</Text>
                    <View style={{marginRight:10}}>
                        {/*用于渲染右侧内容*/}
                        {this.renderRight()}
                    </View>
                </View>
            </TouchableOpacity>
        );
    },
    renderRight:function () {
        if(this.props.type=="switch"){
            return (
                <View>
                    <Switch value={this.state.checked} onValueChange={this.change}/>
                </View>
            );
        }else if(this.props.type=="clsMom"){
            return (
                <View style={moreCellStyle.rightStyle}>
                    <Text style={moreCellStyle.rightTxtStyle}>2.00M</Text>
                    <Image style={moreCellStyle.rightIconStyle} source={require("../../images/icon_cell_rightarrow.png")}/>
                </View>
            );
        }else{
            return (
                <View style={moreCellStyle.rightStyle}>
                    <Image style={moreCellStyle.rightIconStyle} source={require("../../images/icon_cell_rightarrow.png")}/>
                </View>
            );
        }
    },
    change:function (value) {
        this.setState({
            checked:value
        })
    }
});

var moreCellStyle = StyleSheet.create({
    container:{
        height:40,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:"#ffffff",
        marginTop:2
    },
    rightStyle:{
        flexDirection:"row",
        alignItems:"center"
    },
    rightTxtStyle:{
        marginRight:10,
    },
    rightIconStyle:{
        width:10,
        height:10
    }
});

module.exports = MoreCell;