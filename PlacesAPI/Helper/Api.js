var api = {
    getGyms(location){
        var url = 'https://api.foursquare.com/v2/venues/search?near='+location+'&categoryId=4bf58dd8d48988d176941735&oauth_token=SE2B5F5334D2ZCSRF5M3KRCPKWC5BR5SCRZATWWWMTX4ZI4P&v=20180422';
        return fetch(url).then((res) => res.json());
    },
    getPools(location){
        var url = 'https://api.foursquare.com/v2/venues/search?near='+location+'&categoryId=4bf58dd8d48988d105941735&oauth_token=SE2B5F5334D2ZCSRF5M3KRCPKWC5BR5SCRZATWWWMTX4ZI4P&v=20180422';
        return fetch(url).then((res) => res.json());
    },
    getVenueImage(ID){
        var url = 'https://api.foursquare.com/v2/venues/'+ID+'/photos?&&oauth_token=SE2B5F5334D2ZCSRF5M3KRCPKWC5BR5SCRZATWWWMTX4ZI4P&v=20180422';
        return fetch(url).then((res) => res.json());
    }
}

module.exports = api;