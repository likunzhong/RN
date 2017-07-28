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
    ScrollView
} from 'react-native';

var Dimensions = require("Dimensions");
var width = Dimensions.get("window").width;

var ComNavigator = require("./ComNavigator.js");
var CommonMineCell = require("./CommonMineCell.js");
var OrderCommonCell = require("./OrderCommonCell.js");
var LogoFavDetail = require("./LogoFavDetail.js");


var Mine = React.createClass({
    render:function () {
        return (
            <View style={MineStyle.container}>
                {/*设定导航条*/}
                <ComNavigator leftIcon="icon_message" rightIcon="icon_mine_setting"/>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {/*美团logo的设定*/}
                    {this.setLogo()}
                    {/*设定我的页面中cell*/}
                    <CommonMineCell leftIcon="collect" title="我的订单" desc="查看全部订单" mtp="10"/>
                    {/*创建订单详情*/}
                    <View style={MineStyle.orderStyle}>
                        {this.orderDetail()}
                    </View>
                    <CommonMineCell leftIcon="draft" title="我的钱包" desc="账户余额：¥1000" mtp="0"/>
                    <CommonMineCell leftIcon="like" title="抵用券" desc="0" mtp="10"/>
                    <CommonMineCell leftIcon="card" title="积分商城" desc="" mtp="0"/>
                    <CommonMineCell leftIcon="new_friend" title="今日推荐" desc="" fire="xx" mtp="0"/>
                    <View style={{marginBottom:20}}>
                        <CommonMineCell leftIcon="pay" title="我要合作" desc="轻松开店，招财进宝" mtp="0"/>
                    </View>
                </ScrollView>
            </View>
        );
    },
    orderDetail:function () {
        var arr = [];
        var icons = ["orderone","ordertwo","orderthree","orderfour"];
        var titles = ["代付款","待使用","待评价","退款/售后"];
        for(var i=0;i<4;i++){
            arr.push(<OrderCommonCell key={i} icon={icons[i]} title={titles[i]}/>)
        }
        return arr;
    },
    setLogo:function () {
        return (
            <View style={MineStyle.logoStyle}>
                <View style={MineStyle.logoAreaStyle}>
                    {/*渲染左侧*/}
                    {this.renderLogoLeft()}
                    {/*渲染右侧*/}
                    {this.renderLogoRight()}
                </View>
                <View style={MineStyle.logoFavStyle}>
                    {/*渲染logo底部的三大块*/}
                    {this.renderLogoBottom()}
                </View>
            </View>
        );
    },
    renderLogoLeft:function () {
        return (
            <View style={MineStyle.logoAreaLeftStyle}>
                <View style={MineStyle.logoIconBgcStyle}>
                    <Image
                    style={MineStyle.logoIconStyle}
                    source={{uri:"logo"}}
                />
                </View>
                <Text style={MineStyle.logoTxtStyle}>神一样的鸡腿</Text>
                <Image
                    style={MineStyle.logoVipStyle}
                    source={{uri:"avatar_vip"}}/>
            </View>
        );
    },
    renderLogoRight:function () {
        return (
            <Image
                style={MineStyle.logoRightIconStyle}
                source={require("../../images/icon_cell_rightarrow.png")}/>
        );
    },
    renderLogoBottom:function () {
        var arr = [];
        var nums = [100,12,50];
        var des = ["优惠券","评价","收藏"];
        var wd = 0;
        for(var i=0;i<3;i++){
            if(i==2){
                wd = 2;
            }
            arr.push(
                <LogoFavDetail key={i} desc={des[i]} num={nums[i]} wd={wd}/>
            )
        }
        return arr;
    }
})


var MineStyle = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#F0EFF5"
    },
    orderStyle:{
        flexDirection:"row",
        justifyContent:"space-around",
        backgroundColor:"#fff",
        marginTop:2,
        paddingTop:10,
        paddingBottom:10
    },
    logoStyle:{
        backgroundColor:"#FD4B1F",
        position:"relative"
    },
    logoAreaStyle:{
        flexDirection:"row",
        height:160,
        alignItems:"center",
        justifyContent:"space-between"
    },
    logoAreaLeftStyle:{
        flexDirection:"row",
        alignItems:"center"
    },
    logoIconBgcStyle:{
        width:60,
        height:60,  
        backgroundColor:"#fff",
        borderRadius:60,
        marginLeft:20,
        marginRight:30
    },
    logoIconStyle:{
        width:50,
        height:50,
        resizeMode:"contain" , 
        margin:5
    },
    logoTxtStyle:{
        fontSize:16,
        color:"#fff",
        marginRight:2
    },
    logoVipStyle:{
        width:20,
        height:20
    },
    logoRightIconStyle:{
        width:12,
        height:12,
        marginRight:10
    },
    logoFavStyle:{
        flexDirection:"row",
        position:"absolute",
        left:0,
        bottom:0,
        width:width,
        height:45,
        backgroundColor:"#F68366",
        alignItems:"center",
        justifyContent:"space-around"
    }
});

module.exports = Mine;