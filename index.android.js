import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

// 引入外部创建好的那些组件
var Home = require("./components/Home/Home.js");
var Business = require("./components/Business/Business.js");
var Mine = require("./components/Mine/Mine.js");
var More = require("./components/More/More.js");

var MeiTuan = React.createClass({
   getInitialState:function () {
       return {
           selectedTab:"home"
       };
   },
   render:function () {
       return (
           <TabNavigator>
           {/*首页*/}
           {this.renderTabItem("home","首页","icon_tabbar_homepage","icon_tabbar_homepage_selected",Home)}
           {/*商家*/}
           {this.renderTabItem("business","商家","icon_tabbar_merchant_normal","icon_tabbar_merchant_selected",Business)}
           {/*我的*/}
           {this.renderTabItem("mine","我的","icon_tabbar_mine","icon_tabbar_mine_selected",Mine)}
           {/*更多*/}
           {this.renderTabItem("more","更多","icon_tabbar_misc","icon_tabbar_misc_selected",More)}
           </TabNavigator>
       );
   },
   renderTabItem:function(selectedTab,title,normalIcon,selIcon,Component){
       return (
           <TabNavigator.Item
               selected={this.state.selectedTab === selectedTab}
               title={title}
               renderIcon={() => <Image source={{uri:normalIcon}} style={styles.iconStyle}/>}
               renderSelectedIcon={() => <Image source={{uri:selIcon}} style={styles.iconStyle}/>}
               onPress={() => this.setState({ selectedTab: selectedTab })}
               selectedTitleStyle={styles.selStyle}
               titleStyle={styles.titleStyle}
           >
               <Component />
           </TabNavigator.Item>
       );
   }
});



const styles = StyleSheet.create({
    iconStyle:{
        width:30,
        height:30
    },
    titleStyle:{
        fontSize:10
    },
    selStyle:{
        color:"orange",
        fontSize:10
    }
});

AppRegistry.registerComponent('MeiTuan', () => MeiTuan);
