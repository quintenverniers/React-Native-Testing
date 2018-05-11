/*
export const getSportMoment = () => {
    let sportMoments = [];


    if (running) {
        //get weather:

        if (weatherCode == 500 || weatherCode == 501 || (weatherCode >= 800 && weatherCode <= 804))
            if (sportMoments.length > 0) {
                let sportMomentID = parseInt(sportMoments[sportMoments.length - 1].id) + 1;
                sportMoments.push({ "id": sportMomentID, "moment": { "sport": "Running", "time": "08:00-12:00" } });
            } else {
                sportMoments.push({ "id": "1", "moment": { "sport": "Running", "time": "08:00-12:00" } });
            }
    }
    if (swimming) {
        //get pool from database

        //get amount of people at the pool

        if (PoolCount < 50) {
            if (sportMoments.length > 0) {
                let sportMomentID = parseInt(sportMoments[sportMoments.length - 1].id) + 1;
                sportMoments.push({ "id": sportMomentID, "moment": { "sport": "Swimming", "time": "08:00-12:00" } });
            } else {
                sportMoments.push({ "id": "1", "moment": { "sport": "Swimming", "time": "08:00-12:00" } });
            }
        }
    }
    if (fitness) {
        //get gym from database

        //get amount of people at the gym

        if (GymCount < 50) {
            if (sportMoments.length > 0) {
                let sportMomentID = parseInt(sportMoments[sportMoments.length - 1].id) + 1;
                sportMoments.push({ "id": sportMomentID, "moment": { "sport": "Fitness", "time": "08:00-12:00" } });
            } else {
                sportMoments.push({ "id": "1", "moment": { "sport": "Fitness", "time": "08:00-12:00" } });
            }
        }
    }

    return sportMoments;
}
*/

export const getSportMoment = (running, weatherCode, fitness, gymCount, swimming, poolCount) => {
    let sportMoments = [];

    if(running && weatherCode < 999){
        if (weatherCode == 500 || weatherCode == 501 || (weatherCode >= 800 && weatherCode <= 804)) {
            if (sportMoments.length > 0) {
                let sportMomentID = parseInt(sportMoments[sportMoments.length - 1].id) + 1;
                sportMoments.push({ "id": sportMomentID, "moment": { "sport": "Running", "time": "08:00-12:00" } });
            } else {
                sportMoments.push({ "id": "1", "moment": { "sport": "Running", "time": "08:00-12:00" } });
            }
        }
    }
    if (swimming && poolCount < 999) {
        if (poolCount <= 50) {
            if (sportMoments.length > 0) {
                let sportMomentID = parseInt(sportMoments[sportMoments.length - 1].id) + 1;
                sportMoments.push({ "id": sportMomentID, "moment": { "sport": "Swimming", "time": "08:00-12:00" } });
            } else {
                sportMoments.push({ "id": "1", "moment": { "sport": "Swimming", "time": "08:00-12:00" } });
            }
        }
    }
    if (fitness && gymCount < 999) {
        if (gymCount <= 50) {
            if (sportMoments.length > 0) {
                let sportMomentID = parseInt(sportMoments[sportMoments.length - 1].id) + 1;
                sportMoments.push({ "id": sportMomentID, "moment": { "sport": "Fitness", "time": "08:00-12:00" } });
            } else {
                sportMoments.push({ "id": "1", "moment": { "sport": "Fitness", "time": "08:00-12:00" } });
            }
        }
    }

    return sportMoments;
}