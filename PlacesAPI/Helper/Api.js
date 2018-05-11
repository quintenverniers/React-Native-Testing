var api = {
    getGyms(location){
        var url = 'https://api.foursquare.com/v2/venues/search?near='+location+',be&radius=5000&categoryId=4bf58dd8d48988d176941735&oauth_token=SE2B5F5334D2ZCSRF5M3KRCPKWC5BR5SCRZATWWWMTX4ZI4P&v=20180422';
        return fetch(url).then((res) => res.json());
    },
    getPools(location){
        var url = 'https://api.foursquare.com/v2/venues/search?near='+location+',be&categoryId=4bf58dd8d48988d105941735&oauth_token=SE2B5F5334D2ZCSRF5M3KRCPKWC5BR5SCRZATWWWMTX4ZI4P&v=20180422';
        return fetch(url).then((res) => res.json());
    },
    getVenueImage(ID){
        var url = 'https://api.foursquare.com/v2/venues/'+ID+'/photos?&oauth_token=SE2B5F5334D2ZCSRF5M3KRCPKWC5BR5SCRZATWWWMTX4ZI4P&v=20180422';
        return fetch(url).then((res) => res.json());
    },
    getHereNow(ID){
        var url = 'https://api.foursquare.com/v2/venues/'+ID+'/herenow?&oauth_token=SE2B5F5334D2ZCSRF5M3KRCPKWC5BR5SCRZATWWWMTX4ZI4P&v=20180422';
        //var url = 'https://api.foursquare.com/v2/venues/575ef2e9498e19229bfc0df8/herenow?&oauth_token=SE2B5F5334D2ZCSRF5M3KRCPKWC5BR5SCRZATWWWMTX4ZI4P&v=20180422';
        return fetch(url).then((res) => res.json());
    }
}

module.exports = api;