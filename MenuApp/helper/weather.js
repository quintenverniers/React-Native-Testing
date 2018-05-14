var weather = {
    //API call to get current weather in a certain city
    getWeatherNow(lat,lon){
       var url = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&units=metric&cnt=1&APPID=05bfbf1478a13f5f270d24fba4288943'
        //var url = `http://api.openweathermap.org/data/2.5/weather?lat=51.12101539999999&lon=3.9140219999999317&units=metric&APPID=05bfbf1478a13f5f270d24fba4288943`;
        return fetch(url).then((res) => res.json());
    },
}

module.exports = weather;
