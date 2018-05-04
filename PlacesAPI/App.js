import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import api from './Helper/Api';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      venues: []
    }
  }

  componentDidMount(){
    api.getPools(Ghent).then((res)=> {
      this.setState({
        data: res,
        venues: res.venues
      })
    });
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
