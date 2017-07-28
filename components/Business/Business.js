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
    WebView
} from 'react-native';
 
var url = "http://www.meituan.com/zttgwm?utm_campaign=baidu&utm_medium=organic&utm_source=baidu&utm_content=zt_search&utm_term=";  

export default class Business extends Component {
    render() {
        return (
            <View style={styles.container}>  
                <WebView    
                  source={{uri:url,method: 'GET'}}  
                  javaScriptEnabled={true}  
                  domStorageEnabled={true}  
                  scalesPageToFit={false}  
                  />  
            </View> 
        );
    }
};
var styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    backgroundColor: '#f2f2f2',  
    paddingTop:20,  
  },  
});  
module.exports = Business;