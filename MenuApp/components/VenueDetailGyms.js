import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-ionicons';

export default class VenueDetailGyms extends React.Component {
    static navigationOptions = {
        header: null,
    };

    constructor() {
        super();
        this.state = {
            venueId: '',
            venueName: '',
            venueAddr: '',
            venueZip: '',
            venueCity: '',
        }
    }

    saveChanges(id) {
        //push to database
        //console.warn("saved"+id);
    }

    componentDidMount() {
        const { navigation } = this.props;
        const id = navigation.getParam('id');
        const name = navigation.getParam('name');
        const addr = navigation.getParam('address');
        const zip = navigation.getParam('zip');
        const city = navigation.getParam('city');

        this.setState({
            venueId: id,
            venueName: name,
            venueAddr: addr,
            venueZip: zip,
            venueCity: city,
        })

    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#db0000"
                    barStyle="light-content"
                    hidden={false}
                />
                <View style={styles.toolBar}>
                    <Icon name="arrow-back" onPress={() => this.props.navigation.navigate('VenuesGyms')} style={styles.menuIcon} /><Text style={styles.toolbarText}>Venue</Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.venueWrapper}>
                        <Text style={styles.venueMainTitle}>{this.state.venueName}</Text>
                        <Text style={styles.venueAddress}>Located: {this.state.venueAddr}, {this.state.venueZip} {this.state.venueCity}</Text>
                        <Text>Would you like to select this venue?</Text>
                        <Text>(You can always change this in your profile settings)</Text>
                        <View style={styles.SaveButtonView}>
                            <TouchableOpacity style={styles.SaveButton} onPress={() => Alert.alert('Venue saved',this.state.venueName + ' was saved as your location.',[{ text: 'OK', onPress: () => this.saveChanges(this.state.venueId) },])} >
                                <Text style={styles.SaveButtonText}>SAVE</Text>
                            </TouchableOpacity>
                    </View>
                </View>
            </View>
            </View >
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
    content: {
        flex: 1,
    },
    venueWrapper: {
        alignItems: 'center',
    },
    venueMainTitle: {
        fontSize: 40,
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    venueAddress: {
        color: '#000',
        fontWeight: 'bold',
        marginBottom: 15,
    },
    venueText: {
        fontSize: 15,
        color: '#000',
        textAlign: 'center',
    },
    SaveButtonView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    SaveButton: {
        marginTop: 20,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 100,
        backgroundColor: 'red',
    },
    SaveButtonText: {
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
    },
});
