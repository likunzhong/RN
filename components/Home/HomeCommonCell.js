import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

var HomeCommonCell = React.createClass({
    render:function(){
        return (
            <View style={CommonCellStyle.container}>
                {/*左侧*/}
                {this.renderLeft()}
                {/*右侧*/}
                {this.renderRight()}
            </View>
        );
    },
    renderLeft:function () {
        var myStyle;
        myStyle = this.props.index == 0?{color:"#FFA500"}:{color:"red"}
        return (
            <View>
                <Text style={[CommonCellStyle.titStyle,myStyle]}>{this.props.data.title}</Text>
                <Text style={CommonCellStyle.subTitleStyle}>{this.props.data.subTitle}</Text>
            </View>
        )
    },
    renderRight:function () {
        return (
            <Image source={{uri:this.props.data.rightImage}}
            style={CommonCellStyle.cellIconStyle}/>
        )
    }
});

var CommonCellStyle = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
        flex:1,
        borderBottomWidth:2,
        borderBottomColor:"#F0EFF5"
    },
    titStyle:{

        fontSize:14
    },
    subTitleStyle:{
        fontSize:10
    },
    cellIconStyle:{
        width:80,
        height:30
    }
});

module.exports=HomeCommonCell;

