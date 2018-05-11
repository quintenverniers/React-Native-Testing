var places = {
    getHereNowGym(ID){
        var url = 'https://api.foursquare.com/v2/venues/'+ID+'/herenow?&oauth_token=SE2B5F5334D2ZCSRF5M3KRCPKWC5BR5SCRZATWWWMTX4ZI4P&v=20180422';
        //var url = 'https://api.foursquare.com/v2/venues/575ef2e9498e19229bfc0df8/herenow?&oauth_token=SE2B5F5334D2ZCSRF5M3KRCPKWC5BR5SCRZATWWWMTX4ZI4P&v=20180422';
        return fetch(url).then((res) => res.json());
    },
    getHereNowPool(ID){
        var url = 'https://api.foursquare.com/v2/venues/'+ID+'/herenow?&oauth_token=SE2B5F5334D2ZCSRF5M3KRCPKWC5BR5SCRZATWWWMTX4ZI4P&v=20180422';
        //var url = 'https://api.foursquare.com/v2/venues/575ef2e9498e19229bfc0df8/herenow?&oauth_token=SE2B5F5334D2ZCSRF5M3KRCPKWC5BR5SCRZATWWWMTX4ZI4P&v=20180422';
        return fetch(url).then((res) => res.json());
    }
}

module.exports = places;