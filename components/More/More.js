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
    ScrollView
} from 'react-native';

// 读取外部设定好的组件
var MoreCell = require("./MoreCell.js");

var More = React.createClass({
    render:function () {
        return (
            <View style={moreStyle.bcgStyle}>
                {/*渲染头部标题*/}
                {this.renderTitle()}
                {/*渲染内容*/}
                {this.renderContent()}
            </View>
        );
    },
    renderTitle:function () {
        return (
            <View style={moreStyle.NavStyle}>
                <Text  style={moreStyle.titStyle}>更多</Text>
            </View>
        );
    },
    renderContent:function () {
        return (
            <ScrollView
            showsVerticalScrollIndicator={false}
            >
                <View style={moreStyle.moreMg}>
                    <MoreCell title="扫一扫"/>
                </View>
                <View style={moreStyle.moreMg}>
                    <MoreCell title="省流量模式" type="switch"/>
                    <MoreCell title="消息提醒"/>
                    <MoreCell title="邀请好友使用"/>
                    <MoreCell title="清空缓存" type="clsMom"/>
                </View>
                <View style={moreStyle.moreMg}>
                    <MoreCell title="意见反馈"/>
                    <MoreCell title="问卷调查"/>
                    <MoreCell title="支付帮助"/>
                    <MoreCell title="网络诊断"/>
                    <MoreCell title="关于码团"/>
                    <MoreCell title="我要应聘"/>
                </View>
                <View style={moreStyle.moreMg}>
                    <MoreCell title="精品应用"/>
                    <MoreCell title="问卷调查"/>
                    <MoreCell title="支付帮助"/>
                    <MoreCell title="网络诊断"/>
                    <MoreCell title="关于码团"/>
                    <MoreCell title="我要应聘"/>
                </View>
            </ScrollView>
        );
    }
});

var moreStyle = StyleSheet.create({
    NavStyle: {
        height: 40,
        backgroundColor: "#F7F7F9",
        justifyContent:"center",
        alignItems:"center"
    },
    bcgStyle:{
        backgroundColor:"#F0EFF5"
    },
    titStyle: {
        color: "black",
        fontSize:20
    },
    moreMg:{
        marginTop:20,
    }
});

module.exports = More;