/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Alert,
  View,
} from 'react-native';
import SearchBar from './scr/SearchBar'
export default class SearchBarDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
            <View style={{height:20}}/>
            <SearchBar searchAction={()=>{
                            Alert.alert('searchAction')
                       }}
                       onPressCancel={()=>{
                           Alert.alert('onPressCancel')
                       }}
                       containerColor={'rgb(201,201,206)'}
            />

          <View style={{height:10}}/>

          <SearchBar searchAction={()=>{
              Alert.alert('searchAction')
          }}
                     onPressCancel={()=>{
                         Alert.alert('onPressCancel')
                     }}
                     borderRadius={6}
                     text={'Search'}
                     rightText={'Cancel'}
                     containerColor={'rgb(201,201,206)'}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('SearchBarDemo', () => SearchBarDemo);
