import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

var HomeCommonCell = require("./HomeCommonCell.js");

var HomeMiddleOne = React.createClass({
    render:function(){
        var leftData = this.props.data.dataLeft;
        var rightLeft = this.props.data.dataRight;
        return (
            <View style={MiddleOneStyle.container}>
                {/*左侧*/}
                {this.renderLeft(leftData)}
                {/*右侧*/}
                <View style={MiddleOneStyle.rightStyle}>
                    {this.renderRight(rightLeft)}
                </View>
            </View>
        );
    },
    renderLeft:function (leftData) {

        var data = leftData[0];
        return (
            <View style={MiddleOneStyle.leftStyle}>
                <Image source={{uri:data.img1}}
                    style={MiddleOneStyle.leftIconStyle}
                />
                <Image source={{uri:data.img2}}
                       style={MiddleOneStyle.leftIconStyle}/>
                <Text>{data.title}</Text>
                <View style={MiddleOneStyle.priceAndSale}>
                    <Text style={MiddleOneStyle.priceStyle}>{data.price}</Text>
                    <Text style={MiddleOneStyle.saleStyle}>{data.sale}</Text>
                </View>
            </View>
        );
    },
    renderRight:function (rightData) {
        var arr = [];
        for(var i=0;i<rightData.length;i++){
            var data = rightData[i];
            arr.push(
                <HomeCommonCell key={i} data={data} index={i}/>
            )
        }
        return arr;
    }
});

var MiddleOneStyle = StyleSheet.create({
    container:{
        flexDirection:"row",
        backgroundColor:"#fff",
        marginTop:12
    },
    leftIconStyle:{
        width:80,
        height:30,
        resizeMode:"contain"
    },
    leftStyle:{
        flex:1,
        alignItems:"center",
        borderRightWidth:2,
        borderRightColor:"#F0EFF5",
        height:120,
        justifyContent:"center"
    },
    priceAndSale:{
        flexDirection:"row"
    },
    priceStyle:{
        color:"#21C0AF"
    },
    saleStyle:{
        color:"#FFBE00",
        backgroundColor:"#FFFF00",
        borderRadius:3,
        padding:2
    },
    rightStyle:{
        flex:1,
        height:120,
        justifyContent:"center"
    }
})

module.exports=HomeMiddleOne;

