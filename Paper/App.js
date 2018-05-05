import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Viewer from './component/Viewer';

export default class App extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#212121',
    },
    headerTitleStyle: {
      color: '#fff',
    }
  };
  constructor(){
    super();
    this.state = {
      data: [{name: 'Quinten'}, {name: 'Bob' }],
    }
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          keyExtractor={item => item.name}
          renderItem={({ item }) => <View style={styles.listItem}><TouchableOpacity onPress={() => navigate('Viewer', { name: item.name })}><Text style={styles.text}>{item.name}</Text></TouchableOpacity></View>}
        />
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
    fontSize: 30,
  },
});

const myScreens = StackNavigator({
  Home: {screen: App},
  Viewer: {screen: Viewer}
})

AppRegistry.registerComponent('paper',() => myScreens);
