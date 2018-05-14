import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import Icon from 'react-native-ionicons';

export default class VenueDetail extends React.Component {
    static navigationOptions = {
        header: null,
    };
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
                <View style={styles.aboutWrapper}>
                   
                    
                </View>
                <View style={styles.aboutInfo}>
                        <Text>Simplex APP ©2018</Text>
                        <Text>Version: 0.0.1 (Beta)</Text>
                    </View>
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
    aboutWrapper: {

    },
    aboutMainTitle: {
        fontSize: 40,
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    aboutSubTitle: {
        fontSize: 25,
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    aboutText: {
        fontSize: 15,
        color: '#000',
        textAlign: 'center',
    },
    aboutInfo: {
        position: 'absolute',
        bottom: 2,
        left: 2,
    },
});
