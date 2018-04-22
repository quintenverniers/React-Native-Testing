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
      weatherNow: '',
      dataForecast: [],
      cityForecast: '',
      ForecastDay: '',
      weatherForecast: '',
      ForecastDate: ''
    }
  }

  componentDidMount() {
    api.getWeatherNow('8000', 'be').then((res) => {
      this.setState({
        data: res,
        cityNow: res.name,
        weatherNow: res.weather[0].description
      })
    });

    api.getWeatherDays('Liege', 'be', '10').then((res) => {
      this.setState({
        dataForecast: res,
        cityForecast: res.city.name,
        ForecastDay: res.list[5].dt.toString(),
        weatherForecast: res.list[5].weather[0].description,
      })
      api.convertEpochDate(res.list[5].dt).then((result) => {
        console.warn(this.state.ForecastDay);
        this.setState({
          ForecastDate: result.localDate,
        })
        console.warn(this.state.ForecastDate);
      });
    });

    /*setTimeout(() => {
      api.convertEpochDate(this.state.ForecastDay).then((res) => {
        console.warn(this.state.ForecastDay);
        this.setState({
          ForecastDate: res.localDate,
        })
        console.warn(this.state.ForecastDate);
      });
    }, 10000);*/


  }

  render() {
    /*while (this.state.ForecastDate === '') {
      return (
        <View style={styles.container}>
        <View style={styles.navbar}>
          <Text style={styles.navText}>WeatherAPI</Text>
        </View>
        <View style={styles.content}>
          <Text>Weather is Loading...</Text>
        </View>
      </View>
      );
    }*/
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Text style={styles.navText}>WeatherAPI</Text>
        </View>
        <View style={styles.content}>
          <Text>The weather in {this.state.cityNow} is {this.state.weatherNow} </Text>
          <Text>The forecast for {this.state.cityForecast} on {this.state.ForecastDate} is {this.state.weatherForecast}</Text>
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
