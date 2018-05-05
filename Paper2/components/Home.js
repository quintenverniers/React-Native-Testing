import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class Home extends React.Component {
    render() {
      return (
        <View >
            <Text style={styles.Title}>Welcome to Simplex!</Text>
        </View>
              
      );
    }
  }

  const styles = StyleSheet.create({
    Title: {
      fontSize: 18,
      fontWeight: '500',
      textAlign: 'center',
      padding: 10,
    },
  });