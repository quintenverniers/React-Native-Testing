import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, FlatList, PermissionsAndroid } from 'react-native';
import Icon from 'react-native-ionicons';
import places from '../helper/places.js';


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
            //console.warn("You can use the camera")
        } else {
            //console.warn("Camera permission denied")
        }
    } catch (err) {
        console.warn(err);
    }
}

export default class VenuesPools extends React.Component {
    static navigationOptions = {
        header: null,
    };

    constructor() {
        super();
        this.state = {
            category: 0,
            venueType: '',
            venueData: '',
            venues: '',
            venue: '',
            venueCheckinCount: '',
            venueCheckin: '',
            longitude: 0,
            latitude: 0,
        }
    }

    getVenues(lat, lon, category) {
        places.getLocationBasedVenues(lat, lon, category).then((res) => {
            this.setState({
                venueData: res,
                venues: res.response.venues,
                venue: res.response.venues[1].name,
                venueCheckinCount: res.response.venues[1].hereNow.count,
                venueCheckin: res.response.venues[1].hereNow.summary
            })
        });
    }

    componentDidMount() {
        const { navigation } = this.props;
        const cat = navigation.getParam('CategoryID', '0');
        const type = navigation.getParam('Type');
        //console.warn(type);

        requestLocationPermission();
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = parseFloat(position.coords.latitude);
            let lon = parseFloat(position.coords.longitude);
            //console.warn(lat, lon);
            this.setState({
                latitude: lat,
                longitude: lon,
                category: cat,
                venueType: type,
            })
            //how to pass categoryID from the profile screen?
            this.getVenues(lat, lon, cat);
        }, (error) => alert(JSON.stringify(error)), { enableHighAccuracy: true })

    }

    render() {
        const venueView = <FlatList style={styles.venueList}
            data={this.state.venues}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <View style={styles.listItem}><TouchableOpacity onPress={() => this.props.navigation.navigate('VenueDetailPools', { id: item.id, name: item.name, address: item.location.address, zip: item.location.postalCode, city: item.location.city })}><Text style={styles.VenueTitle}>{item.name}</Text><Text>{item.location.address}, {item.location.postalCode} {item.location.city}</Text></TouchableOpacity></View>}
        />
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#db0000"
                    barStyle="light-content"
                    hidden={false}
                />
                <View style={styles.toolBar}>
                    <Icon name="arrow-back" onPress={() => this.props.navigation.navigate('Profile')} style={styles.menuIcon} /><Text style={styles.toolbarText}>Choose a venue</Text>
                </View>
                {/* How to pass gyms from profile */}
                <Text style={styles.venueType}>{this.state.venueType}</Text>
                {venueView}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    toolBar: {
        height: 50,
        backgroundColor: 'red',
        flexDirection: 'row',
    },
    menuIcon: {
        position: 'absolute',
        left: 10,
        top: 8,
        color: 'white',
        fontSize: 35,
    },
    toolbarText: {
        position: 'absolute',
        left: 55,
        top: 4,
        color: 'white',
        fontSize: 30,
    },
    venueList: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    listItem: {
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
});
