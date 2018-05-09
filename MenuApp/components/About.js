import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import Icon from 'react-native-ionicons';

export default class About extends React.Component {
    static navigationOptions = {
        header: null,
        drawerLabel: 'About',
        drawerIcon: () => (
            <Icon name="information-circle" />
        ),
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
                    <Icon name="menu" onPress={() => this.props.navigation.toggleDrawer()} style={styles.menuIcon} /><Text style={styles.toolbarText}>About</Text>
                </View>
                <View style={styles.aboutWrapper}>
                    <Text style={styles.aboutMainTitle}>About Simplex</Text>
                    <Text style={styles.aboutSubTitle}>Our Mission</Text>
                    <Text style={styles.aboutText}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</Text>
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
