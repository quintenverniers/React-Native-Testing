import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class Planning extends React.Component {
    static navigationOptions = {
        header: null,
    }

    constructor(){
        super();
        this.state={
            category: '',
        }
    }

    componentDidMount(){
        const {navigation} = this.props;
        const cat = navigation.getParam('CategoryID','99');
        this.setState({
            category: cat,
        })
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>Stacknavigator</Text>
                <Text>{this.state.category}</Text>
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
