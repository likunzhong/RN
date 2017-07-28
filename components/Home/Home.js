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
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';

var TopMenu = require("./TopMenu.js");
var MiddleOne = require("./HomeMiddleOne.js");
var HomeHot = require("./HomeHot.js");
var HomeHotList = require("./HomeHotList.js");
var middleOneData = require("../../LocalData/HomeTopMiddleLeft.json");

var Home = React.createClass({
    getInitialState:function () {
      return {
          selectedCity:"厦门",
          middleOneData:{}
      }
    },
    render:function () {
        return (
          <View>
              {/*创建导航条*/}
              {this.renderNav()}
              {/*设定滚动区域上的内容*/}
              <View style={HomeStyle.contentStyle}>
                  <ScrollView>
                      {/*左右滑动的广告*/}
                      {this.renderaADs()}
                      {/*名店抢购*/}
                      {this.renderMiddleOne()}
                      {/*热门团购*/}
                      {this.renderHot()}
                      <Text style={{height:200}}>数据显示一下</Text>
                  </ScrollView>
              </View>
          </View>
        );
    },
    // 渲染导航条
    renderNav:function () {
        return (
            <View style={HomeStyle.navContainer}>
                <TouchableOpacity activeOpacity={0.6} onPress={this.jumpHotList}>
                    <Text style={HomeStyle.navLeftTxtStyle}>{this.state.selectedCity}</Text>
                </TouchableOpacity>
                <Text style={HomeStyle.navTitleStyle}>神一样的鸡腿</Text>
                <TouchableOpacity activeOpacity={0.6}>
                    <Image source={require("../../images/icon_homepage_scan.png")} style={HomeStyle.navIconStyle} />
                </TouchableOpacity>
            </View>
        );
    },
    // 渲染广告页面
    renderaADs:function () {
        return (
            <TopMenu />
        );
    },
    // 渲染名店抢购
    renderMiddleOne:function () {
        return (
            <MiddleOne data={middleOneData}/>
        );
    },
    // 渲染热门团购
    renderHot:function () {
        return (
            <HomeHot jumpList={this.jumpHotList}/>
        );
    },
    // 准备一个方法，用于实现点击时跳转到HoneHotList页面
    jumpHotList:function (txt) {
        var obj = {name:txt};
        this.props.navigator.push({
            component:HomeHotList,
            title:"HomeHotList",
            passProps:obj
        });
    }
})

var HomeStyle = StyleSheet.create({
    navContainer:{
        height:44,
        backgroundColor:"#F15934",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    navLeftTxtStyle:{
        color:"#fff",
        fontSize:20,
        marginLeft:10
    },
    navTitleStyle:{
        fontSize:18
    },
    navIconStyle:{
        width:23,
        height:23,
        marginLeft:12,
        marginRight:12
    },
    contentStyle:{
        backgroundColor:"#F0EFF5"
    }
});


module.exports = Home;