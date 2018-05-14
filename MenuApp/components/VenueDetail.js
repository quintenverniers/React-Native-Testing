import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-ionicons';

export default class VenueDetail extends React.Component {
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

    saveChanges() {
        console.warn("saved");
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
                    <Icon name="arrow-back" onPress={() => this.props.navigation.navigate('Venues')} style={styles.menuIcon} /><Text style={styles.toolbarText}>Venue</Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.venueWrapper}>
                        <Text style={styles.venueMainTitle}>{this.state.venueName}</Text>
                        <Text>Located: {this.state.venueAddr}, {this.state.venueZip} {this.state.venueCity}</Text>
                        <Text>Would you like to select this venue?</Text>
                        <Text>(You can always change this in your profile settings)</Text>
                        <View style={styles.SaveButtonView}>
                            <TouchableOpacity style={styles.SaveButton} onPress={() => alert('Venue saved',this.state.venueName + 'was saved as your location.',[{ text: 'OK', onPress: () => this.saveChanges() },])} >
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
    content: {
        justifyContent: 'center',
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
    venueSubTitle: {
        fontSize: 25,
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center',
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
