import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Viewer extends React.Component {
  static navigationOptions = {
    title: 'Viewer',
    headerStyle: {
      backgroundColor: '#212121',
    },
    headerTitleStyle: {
      color: '#fff',
    }
  };
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.navigation.state.name}</Text>
        
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
  listItem: {
    width: '100%',
    backgroundColor: 'blue',

  },
  text: {
    fontSize: 40,
  },
});