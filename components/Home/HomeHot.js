import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

var HomeHotCell = require("./HomeHotCell.js");

var Dimensions = require("Dimensions");
var width = Dimensions.get("window").width;

// 读取到所需的数据
var topMiddle = require("../../LocalData/HomeTopMiddle.json")
var data = topMiddle.data;

var Home_D4 = require("../../LocalData/Home_D4.json")
var homeD4Data = Home_D4.data;

var HomeHot = React.createClass({
    render:function(){
        return (
            <View style={HomeHotStyle.container}>
                {/*头部第一行*/}
                <TouchableOpacity activeOpacity={0.6}>
                    {this.renderHeader()}
                </TouchableOpacity>
                {/*下面一排 4个*/}
                <View style={HomeHotStyle.bottomStyle}>
                    {this.renderBottom()}
                </View>
            </View>
        );
    },
    renderHeader:function () {
        var arr = [];
        for(var i=0;i<data.length;i++){
            var dt = data[i];
        arr.push(
            <View key={i} style={HomeHotStyle.headerStyle}>
                {/*左侧*/}
                {this.renderLeft(dt)}
                {/*右侧*/}
                {this.renderRight(dt)}
            </View>
        )
        }
        return arr;
    },
    renderLeft:function (dt) {
        return (
            <View style={HomeHotStyle.leftStyle}>
                <Text style={HomeHotStyle.leftTitStyle}>{dt.title}</Text>
                <Text>{dt.subTitle}</Text>
            </View>
        );
    },
    renderRight:function () {
        return (
            <View style={HomeHotStyle.rightStyle}>
                <Image source={require("../../images/nsj.png")} style={HomeHotStyle.headerRightIconStyle}/>
            </View>
            );
    },
    renderBottom:function () {
        var arr = [];
        for(var i=0;i<homeD4Data.length;i++){
            var dt = homeD4Data[i];
            arr.push(
                <HomeHotCell key={i} data={dt} jumpList={this.props.jumpList}/>
            )
        }
        return arr;
    },
});
//
var HomeHotStyle = StyleSheet.create({
    container:{
        marginTop:12
    },
    headerStyle:{
        width:width,
        flexDirection:"row",
        alignItems:"center",
        height:80,
        justifyContent:"space-between",
        backgroundColor:"#fff"
    },
    headerRightIconStyle:{
        width:130,
        height:80,
        resizeMode:"contain",

    },
    leftStyle:{
        marginLeft:20
    },
    leftTitStyle:{
        color:"#FB7F66",
        fontSize:20,
        marginBottom:10
    },
    rightStyle:{
        marginRight:10
    },
    bottomStyle:{
        backgroundColor:"#fff",
        borderTopWidth:2,
        borderTopColor:"#F0EFF5",
        flexDirection:"row",
        flexWrap:"wrap"
    }
});

module.exports=HomeHot;

