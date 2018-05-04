import React from 'react';
import { StyleSheet, Text, View, AppRegistry, TouchableOpacity } from 'react-native';
import {StackNavigator} from 'react-navigation';
import Viewer from './components/Viewer';

export default class App extends React.Component {
  static navigationOption = {
    title: 'Home',
    headerStyle: {
      backgroundColor: 'red',
    },
    headerTitleStyle: {
      color: 'white',
    }
  }

  constructor(props){
    super(props);
  }

  render() {
    
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <TouchableOpacity onPress={()=> navigation.navigate('Viewer',{})}>
          <Text>Press to go to the next screen</Text>
        </TouchableOpacity>
      </View>
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

const myScreens = StackNavigator({
  Home: {screen: App},
  Viewer: {screen: Viewer},
})

AppRegistry.registerComponent('PaperTest',() => myScreens);
