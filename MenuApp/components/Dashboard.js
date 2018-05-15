import React from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList, PermissionsAndroid, Image } from 'react-native';
import Icon from 'react-native-ionicons';
import weather from '../helper/weather.js';
import places from '../helper/places.js';
import { getSportMoment } from '../helper/calculation.js';

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

export default class Dashboard extends React.Component {
    static navigationOptions = {
        header: null,
        drawerLabel: 'Dashboard',
        drawerIcon: () => (
            <Icon name="home" />
        ),
    };

    constructor() {
        super();
        this.state = {
            userName: 'Quinten',
            currentCity: '',
            currentCountry: '',
            running: true,
            swimming: true,
            fitness: true,
            weatherCode: 0,
            gymCount: '',
            poolCount: '',
            latitude: 0,
            longitude: 0,
            moment: 'PM',
            startMoment: '',
            endMoment: '',

        }
    }

    componentDidMount() {
        //starthours
        let startHour = '';
        let endHour = '';

        //get moment from db
        if(this.state.moment == 'AM'){
            //get morningStart and morningEnd from db
            startHour = '7:30';
            endHour = '11:30';
        } else if(this.state.moment == 'PM'){
            //get afternoonStart and afternoonEnd from db
            startHour = '14:00';
            endHour = '19:00';
        } else {
            // if moment isn't specified
            // moment: current time"zone"
        }

        if(startHour == '' || startHour == null){
            startHour = '12:00';
        }
        if(endHour == '' || endHour == null){
            endHour = '14:00';
        }
        this.setState({
            startMoment: startHour,
            endMoment: endHour,
        })
        

        if (this.state.running) {
            requestLocationPermission();
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = parseFloat(position.coords.latitude);
                let lon = parseFloat(position.coords.longitude);
                //console.warn(lat, lon);
                this.setState({
                    latitude: lat,
                    longitude: lon,
                })
                weather.getWeatherNow(lat, lon).then((res) => {
                    this.setState({
                        weatherCode: res.weather[0].id, //weather code
                    })
                    console.warn(this.state.weatherCode);
                }).catch((error) => {
                    //alert(error.message);
                });
                //how to pass categoryID from the profile screen?
            }, (error) => alert(JSON.stringify(error)), { enableHighAccuracy: true })

        }
        if (this.state.swimming) {
            //get pool from db
            //in firebase "then clause --> set poolID to value from db"
            poolID = '575ef2e9498e19229bfc0df8';
            //get amount of people at this venue
            places.getHereNow(poolID).then((res) => {
                this.setState({
                    poolCount: res.response.hereNow.count,
                })
            });
        }
        if (this.state.fitness) {
            //get gym from db
            //in firebase "then clause --> set poolID to value from db"
            gymID = '575ef2e9498e19229bfc0df8';
            places.getHereNow(gymID).then((res) => {
                this.setState({
                    gymCount: res.response.hereNow.count,
                })
            });
            //get amount of people at this venue
        }
    }

    render() {
        // calculation in Helper
        let sportMoments = getSportMoment(this.state.running, this.state.weatherCode, this.state.fitness, this.state.gymCount, this.state.swimming, this.state.poolCount, this.state.moment, this.state.startMoment, this.state.endMoment);
        //console.warn(sportMoments);
        let data = new Date();
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#db0000"
                    barStyle="light-content"
                    hidden={false}
                />
                <View style={styles.toolBar}>
                    <Icon name="menu" onPress={() => this.props.navigation.toggleDrawer()} style={styles.menuIcon} /><Text style={styles.toolbarText}>Dashboard</Text>
                </View>
                {/*<Text>{data.toString()}</Text>*/}
                <View style={styles.welcomeContainer}>
                    <Image source={require('../assets/testProfileImage.jpg')} style={styles.userImage} />
                    <Text style={styles.userName}>Welcome, {this.state.userName}</Text>
                </View>
                <View style={styles.dateContainer}>
                    <Icon name="calendar" style={styles.calendarIcon} />
                    <Text style={styles.date}>Donderdag, 7 augustus 2018</Text>
                </View>
                <FlatList style={styles.list}
                    data={sportMoments}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => {
                        if (item.moment.sport == "Running") { return <View style={[styles.sportItem, styles.runningItem]}><View style={styles.sportItemIconWrapper}><Icon name="alarm" style={{ color: '#000', fontSize: 40 }} /></View><View><Text style={styles.momentTitle}>{item.moment.sport}</Text><Text style={styles.momentTime}>{item.moment.time}</Text></View></View> }
                        else if (item.moment.sport == "Swimming") { return <View style={[styles.sportItem, styles.swimmingItem]}><View style={styles.sportItemIconWrapper}><Icon name="alarm" style={{ color: '#000', fontSize: 40 }} /></View><View><Text style={styles.momentTitle}>{item.moment.sport}</Text><Text style={styles.momentTime}>{item.moment.time}</Text></View></View> }
                        else {
                            return <View style={[styles.sportItem, styles.fitnessItem]}><View style={styles.sportItemIconWrapper}><Icon name="alarm" style={{ color: '#000', fontSize: 40 }} /></View><View><Text style={styles.momentTitle}>{item.moment.sport}</Text><Text style={styles.momentTime}>{item.moment.time}</Text></View></View>
                        }
                    }}
                />
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
    welcomeContainer: {
        backgroundColor: '#fff',
        marginTop: 5,
        marginLeft: 3,
        marginRight: 3,
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 2,
        borderColor: '#d6d7da',
        borderWidth: 1,
        flexDirection: 'row',
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },

    userImage: {
        flexDirection: 'row',
        height: 60,
        width: 60,
        margin: 5,
        borderWidth: 1,
        borderRadius: 75
    },

    userName: {
        flexDirection: 'row',
        color: '#000',
        fontSize: 30,
        marginLeft: 20,
        justifyContent: 'center',
    },
    dateContainer: {
        backgroundColor: '#fff',
        marginTop: 5,
        marginLeft: 3,
        marginRight: 3,
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5,
        paddingTop: 5,
        borderColor: '#d6d7da',
        borderWidth: 1,
        flexDirection: 'row',
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    calendarIcon: {
        fontSize: 40,
        color: '#000',
    },
    date: {
        fontSize: 20,
        textAlign: 'right',
        color: '#000',
        fontWeight: '400',
        paddingLeft: 20,
        paddingRight: 10,
    },
    sportItem: {
        backgroundColor: '#fff',
        marginTop: 5,
        marginLeft: 3,
        marginRight: 3,
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 2,
        borderTopColor: '#d6d7da',
        borderTopWidth: 1,
        borderRightColor: '#d6d7da',
        borderRightWidth: 1,
        borderBottomColor: '#d6d7da',
        borderBottomWidth: 1,
        flexDirection: 'row',
    },
    runningItem: {
        borderLeftColor: 'red',
        borderLeftWidth: 5,
    },
    swimmingItem: {
        borderLeftColor: 'blue',
        borderLeftWidth: 5,
    },
    fitnessItem: {
        borderLeftColor: 'green',
        borderLeftWidth: 5,
    },
    sportItemIconWrapper: {
        marginTop: 6,
        paddingRight: 10,
    },
    momentTitle: {
        color: 'black',
        fontWeight: '500',
        fontSize: 25,
    },
    momentTime: {
        fontSize: 15,
    },

});
