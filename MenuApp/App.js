import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StackNavigator, DrawerItems, DrawerNavigator, SwitchNavigator } from 'react-navigation';

import Dashboard from './components/Dashboard.js';
import Profile from './components/Profile.js';
import Planning from './components/Planning.js';
import About from './components/About.js';
import Logout from './components/Logout.js';
import VenuesGyms from './components/VenuesGyms.js';
import VenueDetailGyms from './components/VenueDetailGyms.js';
import VenuesPools from './components/VenuesPools';
import VenueDetailPools from './components/VenueDetailPools';

const DrawerContent = (props) => (
  <View>
    <Image source={require('./assets/HeaderImageRed.jpg')} style={{ height: 140 }} />
    <DrawerItems {...props} />
  </View>
)

const AppNavigator = DrawerNavigator({
  Dashboard: { screen: Dashboard },
  Profile: { screen: Profile },
  Planning: { screen: Planning },
  About: { screen: About },
  Logout: { screen: Logout }
},
  {
    contentComponent: DrawerContent,
  }
)

const Stack = StackNavigator({
  Profile: { screen: Profile },
  VenuesGyms: { screen: VenuesGyms },
  VenueDetailGyms: {screen: VenueDetailGyms},
  VenuesPools: { screen: VenuesPools },
  VenueDetailPools: {screen: VenueDetailPools},
})

const NestedNavigator = SwitchNavigator({
  Main: AppNavigator,
  Sub: Stack
})

export default class App extends React.Component {
  render() {
    return (
        <NestedNavigator />
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
