import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import App from '../App';

export default class Viewer extends React.Component {
  static navigationOption = {
    title: 'ViewerPage',
    headerStyle: {
      backgroundColor: '#212121',
    },
    headerTitleStyle: {
      color: '#fff'
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
        <Text>Shake your phone to open the developer menu.</Text>
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