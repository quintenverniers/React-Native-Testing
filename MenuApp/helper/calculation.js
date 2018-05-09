// Calculation variables 
//sports
let running = true; //if the user is a runner
let swimming = false; //if user goes swimming
let fitness = true; //if the user goes to the gym

//weather
let weatherCode = 502; //weather code

//location info
let gymID = '0'; //foursquare ID of the chosen gym location
let poolID = '1'; //foursquare ID of the chosen pool location
let gymCheckinCount = 0; //amount of people currently at the gym
let poolCheckinCount = 0; //amount of people currently at the pool

export const getSportMoment = () => {
    let sportMoments = [];
    if (running) {
        if (weatherCode == 500 || weatherCode == 501 || (weatherCode >= 800 && weatherCode <= 804))
            if (sportMoments.length > 0) {
                let sportMomentID = parseInt(sportMoments[sportMoments.length - 1].id) + 1;
                sportMoments.push({ "id": sportMomentID, "moment": { "sport": "Running", "time": "08:00-12:00" } });
            } else {
                sportMoments.push({ "id": "1", "moment": { "sport": "Running", "time": "08:00-12:00" } });
            }
    }
    if (swimming) {
        if (sportMoments.length > 0) {
            let sportMomentID = parseInt(sportMoments[sportMoments.length - 1].id) + 1;
            sportMoments.push({ "id": sportMomentID, "moment": { "sport": "Swimming", "time": "08:00-12:00" } });
        } else {
            sportMoments.push({ "id": "1", "moment": { "sport": "Swimming", "time": "08:00-12:00" } });
        }
    }
    if (fitness) {
        if (sportMoments.length > 0) {
            let sportMomentID = parseInt(sportMoments[sportMoments.length - 1].id) + 1;
            sportMoments.push({ "id": sportMomentID, "moment": { "sport": "Fitness", "time": "08:00-12:00" } });
        } else {
            sportMoments.push({ "id": "1", "moment": { "sport": "Fitness", "time": "08:00-12:00" } });
        }
    }
    /*var sportMoments = [{ "id": "1", "moment": { "sport": "Swimming", "time": "13:00-14:00" }}, { "id": "2", "moment": { "sport": "Running", "time": "16:00-18:00" }},{ "id": "3", "moment": { "sport": "Fitness", "time": "11:00-12:00" }}];        
    //{ "id": "4", "moment": { "sport": "Running", "time": "13:00-14:00" }}
    var sportMomentID = parseInt(sportMoments[sportMoments.length-1].id)+1;
    sportMoments.push({ "id": sportMomentID, "moment": { "sport": "Running", "time": "08:00-12:00" }});
    var sportMomentID = parseInt(sportMoments[sportMoments.length-1].id)+1;
    sportMoments.push({ "id": sportMomentID, "moment": { "sport": "Swimming", "time": "11:30-13:00" }}); */

    return sportMoments;
}