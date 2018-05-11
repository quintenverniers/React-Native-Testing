import React from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList } from 'react-native';
import Icon from 'react-native-ionicons';
import weather from '../helper/weather.js';
import places from '../helper/places.js';
import { getSportMoment } from '../helper/calculation.js';

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
            currentCity: '',
            currentCountry: '',
            running: true,
            swimming: true,
            fitness: true,
            weatherCode: '',
            gymCount: '',
            poolCount: '',
        }
    }

    componentDidMount() {
        if (this.state.running) {
            //get location:

            //get real weather code
            weather.getWeatherNow('Ghent', 'be').then((res) => {
                this.setState({
                    weatherCode: res.weather[0].id, //weather code
                })
            });
        }
        if (this.state.swimming) {
            //get pool from db
            //in firebase "then clause --> set poolID to value from db"
            poolID = 0;
            //get amount of people at this venue
            places.getHereNowPool(poolID).then((res) => {
                this.setState({
                    poolCount: res.response.hereNow.count,
                })
            });
        }
        if (this.state.fitness) {
            //get gym from db
            //in firebase "then clause --> set poolID to value from db"
            gymID = 0;
            places.getHereNowGym(gymID).then((res) => {
                this.setState({
                    gymCount: res.response.hereNow.count,
                })
            });
            //get amount of people at this venue
        }
    }

    render() {
        // calculation in Helper
        var sportMoments = getSportMoment(this.state.running, this.state.weatherCode, this.state.fitness, this.state.gymCount, this.state.swimming, this.state.poolCount);



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

                <FlatList style={styles.list}
                    data={sportMoments}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => {
                        if (item.moment.sport == "Running"){ return <View style={[styles.sportItem,styles.runningItem]}><View style={styles.sportItemIconWrapper}><Icon name="alarm" style={{ color: '#000', fontSize: 40 }} /></View><View><Text style={styles.momentTitle}>{item.moment.sport}</Text><Text style={styles.momentTime}>{item.moment.time}</Text></View></View> }
                        else if (item.moment.sport == "Swimming"){ return <View style={[styles.sportItem,styles.swimmingItem]}><View style={styles.sportItemIconWrapper}><Icon name="alarm" style={{ color: '#000', fontSize: 40 }} /></View><View><Text style={styles.momentTitle}>{item.moment.sport}</Text><Text style={styles.momentTime}>{item.moment.time}</Text></View></View> }
                        else {
                            return <View style={[styles.sportItem,styles.fitnessItem]}><View style={styles.sportItemIconWrapper}><Icon name="alarm" style={{ color: '#000', fontSize: 40 }} /></View><View><Text style={styles.momentTitle}>{item.moment.sport}</Text><Text style={styles.momentTime}>{item.moment.time}</Text></View></View>
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
        height: 60,
        backgroundColor: 'red',
        flexDirection: 'row',
    },
    menuIcon: {
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
    sportItem: {
        backgroundColor: '#fff',
        marginTop: 5,
        marginLeft: 3,
        marginRight: 3,
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 2,
        borderWidth: 1 / 2,
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
