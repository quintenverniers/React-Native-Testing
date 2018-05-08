import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Planning from './components/Planning.js';
import Home from './components/Home.js';

const MyScreens = StackNavigator({
  Home: {screen: Home},
  Planning: {screen: Planning}
})

export default class App extends React.Component {
  render() {
    return (
        <MyScreens />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

