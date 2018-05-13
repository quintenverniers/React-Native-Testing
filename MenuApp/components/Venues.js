import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import Icon from 'react-native-ionicons';

export default class Venues extends React.Component {
    static navigationOptions = {
        header: null,
        drawerLabel: 'Profile',
        drawerIcon: () => (
            <Icon name="person" />
        ),
    };

    render() {
        const { navigation } = this.props;
        const category = navigation.getParam('CategoryID', '0');

        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#db0000"
                    barStyle="light-content"
                    hidden={false}
                />
                <View style={styles.toolBar}>
                    <Icon name="menu" onPress={() => this.props.navigation.toggleDrawer()} style={styles.menuIcon} /><Text style={styles.toolbarText}>Profile</Text>
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
});
