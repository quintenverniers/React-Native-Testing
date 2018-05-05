import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, ImageBackground, Image } from 'react-native';
//import { StackNavigator } from 'react-navigation';

export default class Login extends React.Component {
  static navigationOptions = {
    title: '',
    header: {visible: false},
  };
  render() {
    return (
      
  
  //<ImageBackground source = {require('../img/background.jpg')} style={styles.container}> 
  
  <View style={styles.container}>
        <View style={styles.container2}>

          <View style={styles.LogoContainer}>
            <Image source = {require('../img/logo.png')} style = {styles.Logo} style={{width: 150, height: 150}}/>
            <Text style= {{color: "#fff", fontSize: 50, alignContent: 'center'}}> Simplex </Text>
          </View>

          <View style={styles.InputContainer}>
            <TextInput underlineColorAndroid = 'transparent' placeholder='Email' style={styles.TextInput}/>
            <TextInput underlineColorAndroid = 'transparent' placeholder='Password' secureTextEntry={true} style={styles.TextInput}/>
            
              <View style={styles.spaceOut}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}style={styles.LoginBtn}>
                  <Text style={{fontSize: 25, color: "#fff"}}>Login</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.spaceOut}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')} style={styles.RegisterBtn}/>
              </View>
            </View>
        </View>
    </View>
     
    );
  }
}

const styles = StyleSheet.create({
  login: {
    alignItems: 'center',
    backgroundColor: '#00000000',
  },
  TextInput: {
    color: '#fff',
    alignSelf: 'stretch',
    textAlign: 'center',
    fontSize: 25,
    backgroundColor: 'rgba(255,255,255, 0.2)',   
    borderColor: '#fff',
    width: null,
    padding: 10,
    marginBottom: 20,
    borderWidth: 0.6,
    borderRadius: 25,
  },

  InputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    width: null,
  },

  spaceOut: {
    marginTop: 3,
    marginBottom: 3,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    width: null,
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    width: null,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 100,
  },
  Logo: {
    flex : 1,
    width: null,
  },

  LogoContainer : {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  LoginBtn: {
    backgroundColor: 'rgb(239, 4, 4)',
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 14,
    borderRadius: 25,
  },
  RegisterBtn: {
    backgroundColor: '#000',
    alignSelf: 'stretch',
    alignItems: 'center',
    flex: 1,
    padding: 14,
    marginTop: 10,
    marginBottom: -10,
  }
});