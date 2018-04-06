import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import api from './utilities/api';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      rover: [], //expect array
      roverName: ''
    }
  }
  
  componentDidMount(){
    api.getRovers().then((res) => {
      this.setState({
        rover: res.rovers,
        roverName: res.rovers[0].name
      })
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Text style = {styles.navText}>WeatherAPI</Text>
        </View>
        <View style = {styles.content}>
          <Text>Rover: {this.state.roverName} </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    backgroundColor: '#ff0000',
    height: 60,
    justifyContent: 'center',
  },
  navText: {
    marginLeft: 70,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
