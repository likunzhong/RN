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

var CommonMineCell = React.createClass({
    render:function () {
        return (
            <TouchableOpacity activeOpacity={0.6}>
                <View style={[CommonCellStyle.container,{marginTop:12-this.props.mtp}]}>
                    {/*左侧*/}
                    {this.renderLeft()}
                    {/*右侧*/}
                    {this.renderRight()}
                </View>
            </TouchableOpacity>
        )
    },
    renderLeft:function () {
        return (
            <View style={CommonCellStyle.leftRightStyle}>
                <Image source={{uri:this.props.leftIcon}}
                    style={CommonCellStyle.iconStyle}
                />
                <Text style={CommonCellStyle.titStyle}>{this.props.title}</Text>
            </View>
        );
    },
    renderRight:function () {
        if(!this.props.fire){
            return (
                <View style={CommonCellStyle.leftRightStyle}>
                    <Text style={CommonCellStyle.descStyle}>{this.props.desc}</Text>
                    <Image source={require("../../images/icon_cell_rightarrow.png")}
                           style={CommonCellStyle.rightIconStyle}
                    />
                </View>
            );

        }else{
            return (
                <View style={CommonCellStyle.leftRightStyle}>
                    <Image source={require("../../images/me_new.png")}
                           style={{width:30,height:15}}
                    />
                    <Image source={require("../../images/icon_cell_rightarrow.png")}
                           style={CommonCellStyle.rightIconStyle}
                    />
                </View>
            );
        }

    }
})

var CommonCellStyle = StyleSheet.create({
    container:{
      height:44,
        backgroundColor:"#fff",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    iconStyle:{
        width:26,
        height:26,
        borderRadius:13,
        marginLeft:10,
        marginRight:6
    },
    rightIconStyle:{
        width:10,
        height:10,
        marginLeft:6,
        marginRight:10
    },
    leftRightStyle:{
        flexDirection:"row",
        alignItems:"center"
    },
    titStyle:{
        fontSize:16
    },
    descStyle:{
        color:"#6D6D6D",
        fontSize:12
    }
});

module.exports = CommonMineCell;