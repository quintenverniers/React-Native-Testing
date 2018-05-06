import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-ionicons';
import api from './Helper/Api';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      poolData: [],
      pools: [],
      pool: '',
      poolCheckinCount: '',
      poolCheckin: '',
      gymData: [],
      gyms: [],
      gym: '',
      gymCheckinCount: '',
      gymCheckin: '',
    }
  }

  componentDidMount() {
    /*api.getPools('Ghent').then((res)=> {
      this.setState({
        poolData: res,
        pools: res.response.venues,
        pool: res.response.venues[1].name,
        poolCheckinCount: res.response.venues[1].hereNow.count,
        poolCheckin: res.response.venues[1].hereNow.summary
      })
    });*/

    api.getGyms('Ghent').then((res) => {
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
        {/*<View style={styles.pools}>
          <Text>Zwembad: {this.state.pool}</Text>
          <Text>There are  {this.state.poolCheckinCount} people at this place.</Text>
          <Text>This means: {this.state.poolCheckin}</Text>
        </View>
        <View>
          <Text>Fitness: {this.state.gym}</Text>
          <Text>There are  {this.state.gymCheckinCount} people at this place.</Text>
          <Text>This means: {this.state.gymCheckin}</Text>
        </View>*/}
        <Text style={styles.venueType}> Gyms:</Text>

        <FlatList
          data={this.state.gyms}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <View style={styles.Item}><Text style={styles.VenueTitle}>{item.name}</Text><Text>{item.location.address}, {item.location.postalCode} {item.location.city}</Text></View>}
        />
        <View style={styles.bottomNav}>
          <TouchableOpacity></TouchableOpacity><TouchableOpacity><Icon name='add' /></TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  pools: {
    marginBottom: 20,
  },
  Item: {
    marginBottom: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 1 / 2,
  },
  VenueTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  venueType: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
  },
  bottomNav: {
    height: 100,
  },
});
