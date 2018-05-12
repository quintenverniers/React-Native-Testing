import React from 'react';
import { StyleSheet, Text, View, PermissionsAndroid } from 'react-native';
import Icon from 'react-native-ionicons';

async function requestLocationPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        'title': 'Simplex location permission',
        'message': 'Simplex needs access to your location' +
          'to show you relevant info regarding your location.'
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.warn("You can use the camera")
    } else {
      console.warn("Camera permission denied")
    }
  } catch (err) {
    console.warn(err);
  }
}

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      latitude: 0,
      longitude: 0,
    }
  }

  componentDidMount() {
    requestLocationPermission();
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = parseFloat(position.coords.latitude);
      let lon = parseFloat(position.coords.longitude);
      console.warn(lat, lon);
      this.setState({
        latitude: lat,
        longitude: lon,
      })
    }, (error) => alert(JSON.stringify(error)), { enableHighAccuracy: true })
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.toolBar}>
          <Icon name="menu" style={styles.menuIcon} /><Text style={styles.toolbarText}>Dashboard</Text>
        </View>
        <Text>Location: {this.state.latitude},{this.state.longitude}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  toolBar: {
    height: 60,
    backgroundColor: 'red',
    flexDirection: 'row',
  },
  MenuIcon: {
    position: 'absolute',
    left: 10,
    top: 10,
    color: 'white',
    fontSize: 35,
  },
  toolbarText: {
    position: 'absolute',
    left: 55,
    top: 5,
    color: 'white',
    fontSize: 30,
  },
});
