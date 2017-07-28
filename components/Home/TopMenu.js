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
    ScrollView,
    Image
} from 'react-native';

var Dimensions = require("Dimensions");
var width = Dimensions.get("window").width;

var COMMONPATH = "http://orofg597x.bkt.clouddn.com/";

// 引入在外部书写的js组件
var ADChild = require("./adChild.js");

var TopMenu = React.createClass({
    getInitialState:function(){
        return {
            allDatas:[],
            curIndex:0
        };
    },
    componentDidMount:function () {
        var url = COMMONPATH + "TopMenu.json";
      fetch(url).then((response)=>response.json())
          .then((responseData)=>{
                this.setState({
                    allDatas:responseData.data
                })
          })
    },
    render:function(){
        return (
            <View style={TopMenuStyle.container}>
                <ScrollView
                    style={TopMenuStyle.scrollViewStyle}
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={this.scrollEnd}
                >
                    {/*设定两个子View*/}
                    {this.renderScroll()}
                </ScrollView>
                {/*准备两个指示器*/}
                <View style={TopMenuStyle.indicator}>
                    {this.renderIndicator()}
                </View>
            </View>
        );
    },
    renderScroll:function(){
        {/*准备两个子View*/}
        var arr = [];
        for(var i=0;i<this.state.allDatas.length;i++){
            var data = this.state.allDatas[i];
            arr.push(
                <View key={i} style={TopMenuStyle.childStyle}>
                    {/*还需要在每一个View上面去放置8个子View*/}
                    {this.renderChild(data)}
                </View>
            )
        }
        return arr;
    },
    renderChild:function(data){
        var arr = [];
        for(var i=0;i<data.length;i++){
            var dt = data[i];
            arr.push(
                <ADChild key={i} data={dt}/>
            )
        }
        return arr;
    },
    renderIndicator:function(){
        var arr = [];
        var color ;
        for(var i=0;i<2;i++){
            if(i==this.state.curIndex){
                color = {backgroundColor:"red"};
            }else{
                color = {backgroundColor:"black"};
            }
            arr.push(
                <Text key={i} style={[TopMenuStyle.indicatorStyle,color]}></Text>
            )
        }
        return arr;
    },
    scrollEnd:function(e){
        // 获取手指离开时,滚动过的距离
        var x = e.nativeEvent.contentOffset.x;
        // 根据滚动过的距离,计算出当前的页数
        var pageIndex = x/width;
        // 设定state
        this.setState({
            curIndex:pageIndex
        });
    }
});

var TopMenuStyle = StyleSheet.create({
    container:{
        backgroundColor:"#fff"
    },
    scrollViewStyle:{
        width:width,
        marginTop:20,
    },
    childStyle:{
        width:width,
        height:180,
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"space-around"
    },
    indicator:{
        width:width,
        height:20,
        flexDirection:"row",
        justifyContent:"center",
    },
    indicatorStyle:{
        marginLeft:5,
        marginRight:5,
        width:10,
        height:10,
        borderRadius:10,
    }
});

module.exports = TopMenu;