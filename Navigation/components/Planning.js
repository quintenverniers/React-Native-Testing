import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class Planning extends React.Component {
    static navigationOptions = {
        header: null,
    }
    render() {
        const {navigation} = this.props;
        const category = navigation.getParam('CategoryID','99');
        return (
            <View style={styles.container}>
                <Text>Stacknavigator</Text>
                <Text>{category}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
