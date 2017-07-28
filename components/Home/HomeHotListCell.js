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

var HomeHotListCell = React.createClass({
    render:function () {
        return (
            <View>
                <Text>
                    {this.props.data.title}
                </Text>
            </View>
        )
    }
});



module.exports = HomeHotListCell;