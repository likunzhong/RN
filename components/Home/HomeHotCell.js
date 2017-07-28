import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

var Dimensions = require("Dimensions");
var width = Dimensions.get("window").width;

var HomeHotCell = React.createClass({
    render:function(){
        return (
            <TouchableOpacity activeOpacity={0.6} onPress={this.jump(this.props.data.title)}>
                <View style={[CommonCellStyle.container,{width:width/2}]}>
                    {/*左侧*/}
                    {this.renderLeft()}
                    {/*右侧*/}
                    {this.renderRight()}
                </View>
            </TouchableOpacity>
        );
    },
    renderLeft:function () {
        var myStyle;
        myStyle = {color:this.props.data.typeface_color}
        return (
            <View style={CommonCellStyle.leftStyle}>
                <Text style={[CommonCellStyle.titStyle,myStyle]}>{this.props.data.maintitle}</Text>
                <Text style={CommonCellStyle.subTitleStyle}>{this.props.data.deputytitle}</Text>
            </View>
        )
    },
    renderRight:function () {
        var url = this.props.data.imageurl;
        var width = 60,height=60;
        url = url.replace("w.h",width+"."+height);
        return (
            <Image source={{uri:url}}
                   style={{width:width,height:height}}/>
        )
    },
    jump:function (txt) {
        var that = this;
        return function () {
            that.props.jumpList(txt);
        }
    }
});

var CommonCellStyle = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
        borderBottomWidth:2,
        borderBottomColor:"#F0EFF5",
        height:90,
        borderRightWidth:1,
        borderRightColor:"#F0EFF5",
    },
    titStyle:{
        fontSize:16,
        marginBottom:10
    },
    subTitleStyle:{
        fontSize:12
    },
    leftStyle:{
        paddingLeft:15
    }
});

module.exports=HomeHotCell;

