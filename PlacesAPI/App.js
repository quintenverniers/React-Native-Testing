import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-ionicons';
import api from './Helper/Api';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      GymActive: 'black',
      PoolActive: 'gray',
      showGyms: true,
      venueType: 'Gyms',
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
    api.getPools('Antwerp').then((res) => {
      this.setState({
        poolData: res,
        pools: res.response.venues,
        pool: res.response.venues[1].name,
        poolCheckinCount: res.response.venues[1].hereNow.count,
        poolCheckin: res.response.venues[1].hereNow.summary
      })
    });

    api.getGyms('Antwerp').then((res) => {
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
    const gymView =
      <FlatList style={styles.list}
        data={this.state.gyms}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <View style={styles.Item}><Text style={styles.VenueTitle}>{item.name}</Text><Text>{item.location.address}, {item.location.postalCode} {item.location.city}</Text></View>}
      />
    const poolView = <FlatList style={styles.list}
      data={this.state.pools}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <View style={styles.Item}><Text style={styles.VenueTitle}>{item.name}</Text><Text>{item.location.address}, {item.location.postalCode} {item.location.city}</Text></View>}
    />
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#db0000"
          barStyle="light-content"
          hidden={false}
        />
        <View style={styles.toolbar}>
          <Icon name='menu' style={styles.toolbarIcon}/>
          <Text style={styles.toolbarText}>Location picker</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.venueType}>{this.state.venueType}</Text>
          {this.state.showGyms ? gymView : poolView}
          <View style={styles.bottomNav}>
            <TouchableOpacity style={styles.iconGymButton} onPress={() => { this.setState({ showGyms: true, venueType: 'Gyms', GymActive: 'black', PoolActive: 'gray' }) }}><Icon name='stopwatch' style={[{color: this.state.GymActive}]}/></TouchableOpacity><TouchableOpacity style={styles.iconPoolButton} onPress={() => { this.setState({ showGyms: false, venueType: 'Pools', GymActive: 'gray', PoolActive: 'black' }) }}><Icon name='water' style={[{color: this.state.PoolActive}]}/></TouchableOpacity>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfdfd',
    justifyContent: 'center',
  },
  toolbar: {
    justifyContent: 'center',
    height: 55,
    backgroundColor: 'red',
    flexDirection: 'row',
  },
  toolbarIcon: {
    position: 'absolute',
    left: 12,
    top: 9,
    color : 'white',
  },
  toolbarText: {
    position: 'absolute',
    left: 50,
    top: 6,
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  list: {
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
    backgroundColor: '#fff',
    height: 50,
    flexDirection: 'row',
  },
  iconGymButton: {
    marginTop: 10,
    position: 'absolute',
    left: 100,
  },
  iconPoolButton: {
    marginTop: 10,
    position: 'absolute',
    right: 100,
  },
});
