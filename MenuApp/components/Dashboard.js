import React from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList } from 'react-native';
import Icon from 'react-native-ionicons';

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
        }
    }
    
    render() {
        // berekening in Helper
        var sportMoments = [{ "id": "1", "moment": { "sport": "Running", "time": "13:00-14:00" }}, { "id": "2", "moment": { "sport": "Fitness", "time": "16:00-18:00" }},{ "id": "3", "moment": { "sport": "Swimming", "time": "11:00-12:00" } }];        
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
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <View style={styles.sportItem}><View style={styles.sportItemIconWrapper}><Icon name="alarm" style={{color: '#000', fontSize: 40}} /></View><View><Text style={styles.momentTitle}>{item.moment.sport}</Text><Text style={styles.momentTime}>{item.moment.time}</Text></View></View>}
                />
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
        marginTop: 5,
        marginLeft: 3,
        marginRight: 3,
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 2,
        borderWidth: 1 / 2,
        borderLeftColor: 'red',
        borderLeftWidth: 5,
        flexDirection: 'row',
    },
    sportItemIconWrapper: {
        marginTop: 6,
        paddingRight: 10,
    },
    momentTitle: {
        color: 'black',
        fontSize: 25,
    },
    momentTime: {
        fontSize: 15,
    },

});
