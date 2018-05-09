import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StackNavigator, DrawerItems, DrawerNavigator } from 'react-navigation';
import Icon from 'react-native-ionicons';
import Dashboard from './components/Dashboard.js';
import Profile from './components/Profile.js';
import Planning from './components/Planning.js';
import About from './components/About.js';
import Logout from './components/Logout.js';

const DrawerContent = (props) => (
  <View>
    <Image source={require('./assets/HeaderImageRed.jpg')} style={{height: 140}}/>
    <DrawerItems {...props} />
  </View>
)

const AppNavigator = DrawerNavigator({
  Dashboard: { screen: Dashboard },
  Profile: { screen: Profile },
  Planning: { screen: Planning },
  About: { screen: About },
  Logout: {screen: Logout}
},
  {
    contentComponent: DrawerContent,
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
