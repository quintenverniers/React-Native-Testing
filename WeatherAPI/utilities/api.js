var api = {
    getRovers(){
        var url = `https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=6gyRfiA5OmwiVpbjQB1D9MpS8O4CsQrd2TISOwQv`;
        return fetch(url).then((res) => res.json());
    }
}

module.exports = api;