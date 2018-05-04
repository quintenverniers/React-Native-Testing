import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import api from './Helper/Api';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      poolData: [],
      pools: [],
      pool: '',
      poolCheckinCount: '',
      poolCheckin: '',
      gymData:[],
      gyms: [],
      gym: '',
      gymCheckinCount: '',
      gymCheckin: '',
    }
  }

  componentDidMount(){
    api.getPools('Ghent').then((res)=> {
      this.setState({
        poolData: res,
        pools: res.response.venues,
        pool: res.response.venues[1].name,
        poolCheckinCount: res.response.venues[1].hereNow.count,
        poolCheckin: res.response.venues[1].hereNow.summary
      })
    });

    api.getGyms('Ghent').then((res)=> {
      this.setState({
        gymData: res,
        gyms: res.response.venues,
        gym: res.response.venues[1].name,
        gymCheckinCount: res.response.venues[1].hereNow.count,
        gymCheckin: res.response.venues[1].hereNow.summary
      })
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.pools}>
          <Text>Zwembad: {this.state.pool}</Text>
          <Text>There are  {this.state.poolCheckinCount} people at this place.</Text>
          <Text>This means: {this.state.poolCheckin}</Text>
        </View>
        <View>
          <Text>Fitness: {this.state.gym}</Text>
          <Text>There are  {this.state.gymCheckinCount} people at this place.</Text>
          <Text>This means: {this.state.gymCheckin}</Text>
        </View>
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
  pools: {
    marginBottom: 20,
  },
});
