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
    TouchableOpacity,
    ListView
} from 'react-native';

var HomeHotListCell = require("./HomeHotListCell.js");

var listUrl = "http://oqel9co4n.bkt.clouddn.com/HomeFilm.json";

var HomeHotList = React.createClass({
    getInitialState:function () {
        var ds = new ListView.DataSource({
            rowHasChanged:function (r1,r2) {
                return r1!==r2;
            }
        });
        return {
            ds:ds
        }
    },
    componentDidMount:function () {
        fetch(listUrl)
            .then((response)=>response.json())
            .then((responseData)=>{
                var datas = responseData.data;
                this.setState({
                    ds:this.state.ds.cloneWithRows(datas)
                });
            })
    },
    render:function () {
        return (
            <View>
                <ListView
                dataSource={this.state.ds}
                renderRow={this.renderRow}
            />
            </View>
        )
    },
    renderRow:function (rowData) {
        return <HomeHotListCell data={rowData}/>
    }
});


module.exports = HomeHotList;