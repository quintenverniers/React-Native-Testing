var api = {
    getWeatherNow(zip,country){
        var tempUrl = 'http://api.openweathermap.org/data/2.5/weather?zip='+zip+','+country+'&APPID=05bfbf1478a13f5f270d24fba4288943'
        //var url = `http://api.openweathermap.org/data/2.5/weather?zip=8000,be&units=metric&APPID=05bfbf1478a13f5f270d24fba4288943`;
        var url = tempUrl;
        return fetch(url).then((res) => res.json());
    },

    getWeatherDays(city,country,days){
        var tempUrl = 'http://api.openweathermap.org/data/2.5/forecast/daily?q='+city+','+country+'&cnt='+days+'&units=metric&APPID=05bfbf1478a13f5f270d24fba4288943'
        //var url = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=Ghent,BE&cnt=10&units=metric&APPID=05bfbf1478a13f5f270d24fba4288943';
        var url = tempUrl;
        return fetch(url).then((res) => res.json());
    },

    convertEpochDate(epoch){
        var tempUrl = 'http://www.convert-unix-time.com/api?timestamp=1524308400&format=german&timezone=Europe'
        //var tempUrl = 'http://www.convert-unix-time.com/api?timestamp='+epoch+'&format=german&timezone=Europe'
        //var url = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=Ghent,BE&cnt=10&units=metric&APPID=05bfbf1478a13f5f270d24fba4288943';
        var url = tempUrl;
        return fetch(url).then((res) => res.json());
    }
}

module.exports = api;
