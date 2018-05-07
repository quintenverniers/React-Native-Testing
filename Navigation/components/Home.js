import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Planning extends React.Component {
    
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Planning')}><Text>Go to Planning</Text></TouchableOpacity>
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
