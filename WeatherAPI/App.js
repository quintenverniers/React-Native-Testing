import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timestamp from 'react-timestamp';
import api from './utilities/api';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      cityNow: '',
      codeNow: '',
      weatherNow: '',
      dataForecast: [],
      cityForecast: '',
      ForecastDay: '',
      weatherForecast: '',
      ForecastDate: ''
    }
  }

  componentDidMount() {
    api.getWeatherNow('9000', 'be').then((res) => {
      this.setState({
        data: res, //data
        cityNow: res.name, //city name
        codeNow: res.weather[0].id, //weatherCode
        weatherNow: res.weather[0].description
      })
    });

    api.getWeatherDays('Ghent', 'be', '10').then((res) => {
      this.setState({
        dataForecast: res, //data
        cityForecast: res.city.name, //city name
        ForecastDay: res.list[0].dt.toString(), //forecasts
        weatherForecast: res.list[0].weather[0].description, //beschrijving
      })
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Text style={styles.navText}>WeatherAPI</Text>
        </View>
        <View style={styles.content}>
          <Text>The weather in {this.state.cityNow} is {this.state.weatherNow} </Text>
          <Text>The forecast for {this.state.cityForecast} on <Timestamp time={this.state.ForecastDay} format='date' component={Text} /> is {this.state.weatherForecast}</Text>
          <Text> Weather condition in: {this.state.cityNow} is {this.state.codeNow}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    backgroundColor: '#ff0000',
    height: 60,
    justifyContent: 'center',
  },
  navText: {
    marginLeft: 70,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
