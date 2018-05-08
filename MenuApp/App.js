import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator, DrawerItems, DrawerNavigator } from 'react-navigation';
import Icon from 'react-native-ionicons';
import Dashboard from './components/Dashboard.js';
import Profile from './components/Profile.js';
import Planning from './components/Planning.js';
import About from './components/About.js';

const DrawerContent = (props) => (
  <View>
    <View
      style={{
        backgroundColor: '#f50057',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ color: 'white', fontSize: 30 }}>
        Header
      </Text>
    </View>
    <DrawerItems {...props} />
  </View>
)

const AppNavigator = DrawerNavigator({
  Dashboard: { screen: Dashboard },
  Profile: { screen: Profile },
  Planning: { screen: Planning },
  About: { screen: About }
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
