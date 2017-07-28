import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

var Dimensions = require("Dimensions");
var width = Dimensions.get("window").width;
var ADChild = React.createClass({
  getDefaultProps:function () {
      var data = {
          image:"dy",
          title:"其他"
      }
      return {
          data:data
      }
  },
  render:function(){
    return (
      <View style={{alignItems:"center",width:(width/5),height:width/5,marginTop:8}}>
         <Image source={{uri:this.props.data.image}}
         style={{width:(width/6-10),height:width/6}}/>
         <Text>{this.props.data.title}</Text>
      </View>
    );
  }
});
module.exports=ADChild;

