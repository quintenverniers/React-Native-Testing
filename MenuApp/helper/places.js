var api = {
    getHereNow(ID) {
        var url = 'https://api.foursquare.com/v2/venues/' + ID + '/herenow?&oauth_token=SE2B5F5334D2ZCSRF5M3KRCPKWC5BR5SCRZATWWWMTX4ZI4P&v=20180422';
        //var url = 'https://api.foursquare.com/v2/venues/575ef2e9498e19229bfc0df8/herenow?&oauth_token=SE2B5F5334D2ZCSRF5M3KRCPKWC5BR5SCRZATWWWMTX4ZI4P&v=20180422';
        return fetch(url).then((res) => res.json());
    },

    getLocationBasedVenues(lat, lon, category) {
        var url = '';
        //category = gyms: search in 10km range
        if (category == '4bf58dd8d48988d176941735') {
            url = 'https://api.foursquare.com/v2/venues/search?ll=' + lat + ',' + lon + '&radius=10000&categoryId=' + category + '&oauth_token=SE2B5F5334D2ZCSRF5M3KRCPKWC5BR5SCRZATWWWMTX4ZI4P&v=20180422';
            //url = 'https://api.foursquare.com/v2/venues/search?near=Ghent,be&radius=10000&categoryId=4bf58dd8d48988d176941735&oauth_token=SE2B5F5334D2ZCSRF5M3KRCPKWC5BR5SCRZATWWWMTX4ZI4P&v=20180422';
        } else {
            url = 'https://api.foursquare.com/v2/venues/search?ll=' + lat + ',' + lon + '&categoryId=' + category + '&oauth_token=SE2B5F5334D2ZCSRF5M3KRCPKWC5BR5SCRZATWWWMTX4ZI4P&v=20180422';
            //url = 'https://api.foursquare.com/v2/venues/search?near=Ghent,be&radius=10000&categoryId=4bf58dd8d48988d176941735&oauth_token=SE2B5F5334D2ZCSRF5M3KRCPKWC5BR5SCRZATWWWMTX4ZI4P&v=20180422';
        }
        return fetch(url).then((res) => res.json());
    }

    //get venues from location
}

module.exports = api;