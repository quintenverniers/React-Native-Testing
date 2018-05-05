import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { StackNavigator, } from 'react-navigation';

import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';

const AppNavigator = StackNavigator({
  Login: { screen: Login },
  Home: { screen: Home },
  Register: { screen: Register }
})

export default class App extends React.Component {

  render() {
    return (  
      <AppNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#00000000',
    alignSelf: 'stretch',
    width: null,
    padding: 20,
  },
});