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
      hereNow: '',
      poolCategory: '4bf58dd8d48988d105941735',
      gymCategory: '4bf58dd8d48988d176941735',
      venueData: '',
      venues: '',
      venue: '',
      venueCheckinCount:'',
      venueCheckin:'',

    }
  }

  getVenues(location,categoryID){
    api.getVenues(location,categoryID).then((res) => {
      this.setState({
        venueData: res,
        venues: res.response.venues,
        venue: res.response.venues[1].name,
        venueCheckinCount: res.response.venues[1].hereNow.count,
        venueCheckin: res.response.venues[1].hereNow.summary
      })
    });
  }

  showGyms(location,categoryID){
    this.setState({ 
      showGyms: true, 
      venueType: 'Gyms', 
      GymActive: 'black', 
      PoolActive: 'gray' 
    });
    this.getVenues(location, categoryID);
  }

  componentDidMount() {
    this.showGyms('Ghent','4bf58dd8d48988d176941735');
    /*
    api.getVenues('Ghent','4bf58dd8d48988d105941735').then((res) => {
      this.setState({
        poolData: res,
        pools: res.response.venues,
        pool: res.response.venues[1].name,
        poolCheckinCount: res.response.venues[1].hereNow.count,
        poolCheckin: res.response.venues[1].hereNow.summary
      })
    });*/
    /*
    api.getVenues('Ghent','4bf58dd8d48988d176941735').then((res) => {
      this.setState({
        gymData: res,
        gyms: res.response.venues,
        gym: res.response.venues[1].name,
        gymCheckinCount: res.response.venues[1].hereNow.count,
        gymCheckin: res.response.venues[1].hereNow.summary
      })
    });

    api.getHereNow('575ef2e9498e19229bfc0df8').then((res) => {
      this.setState({
        hereNow: res.response.hereNow.count,
      })
    });*/
  }



  render() {
    /*
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
    />*/
    const venueView = <FlatList style={styles.list}
      data={this.state.venues}
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
          <Text style={styles.toolbarText}>Choose sportvenue</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.venueType}>{this.state.venueType}</Text>
          {venueView}
          <View style={styles.bottomNav}>
            <TouchableOpacity style={styles.iconGymButton} onPress={() => this.showGyms('Ghent','4bf58dd8d48988d176941735')}><Icon name='stopwatch' style={[{color: this.state.GymActive}]}/></TouchableOpacity><TouchableOpacity style={styles.iconPoolButton} onPress={() => this.showGyms('Ghent','4bf58dd8d48988d105941735')}><Icon name='water' style={[{color: this.state.PoolActive}]}/></TouchableOpacity>
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
