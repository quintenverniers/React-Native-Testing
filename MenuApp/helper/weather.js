var weather = {
    //API call to get current weather in a certain city
    getWeatherNow(city,country){
        var tempUrl = 'http://api.openweathermap.org/data/2.5/weather?q='+city+','+country+'&units=metric&APPID=05bfbf1478a13f5f270d24fba4288943'
        //var url = `http://api.openweathermap.org/data/2.5/weather?q=Ghent,be&units=metric&APPID=05bfbf1478a13f5f270d24fba4288943`;
        var url = tempUrl;
        return fetch(url).then((res) => res.json());
    },
}

module.exports = weather;
