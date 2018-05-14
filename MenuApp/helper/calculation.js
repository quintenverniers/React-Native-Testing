/*
* This function calculates the sportmoments based on multiple parameters
* running check:
* Checks if the user runs and if the weather is ok to run
*
* swimming check:
* Checks if the user swims and if there are less than 50 people at the pool
*
* fitness check:
* Checks if the user goes to the gym and if there are less than 50 people at the gym
*
* @Params
* running: boolean; yes=user goes running
* weatherCode: int; fetched from api call. Certain codes represent good/ok weather
*
* fitness: boolean; yes=user goes to the gym
* gymCount: int; amount of people who are at a certain gym (selected by the user)
*
* swimming: boolean; yes=user goes swimming
* poolCount: int; amount of people who are at a certain pool (selected by the user)
*
* moment: string; (AM/PM) wether the user wants to practice sports in the morning or the afternoon
* startHour: min time to go sporting in the current 'moment'
* endHour: max time to go sporting in the current 'moment'
* these two times are the bracket in which the sport events should take place
* otherwise we won't create an event
*/
export const getSportMoment = (running, weatherCode, fitness, gymCount, swimming, poolCount, moment, startHour, endHour) => {
    let sportMoments = [];

    //get current hour
    let curtime = new Date();
    let curhour = curtime.getHours();
    let curminute = curtime.getMinutes();

    //get the hours and minutes from the startHour
    let startTime = startHour.split(":");
    let startTimeHour = parseInt(startTime[0]);
    let startTimeMiute = parseInt(startTime[1]);
    //get the hours and minutes from the startHour
    let endTime = endHour.split(":");
    let endTimeHour = parseInt(endTime[0]);
    let endTimeMiute = parseInt(endTime[1]);

    //add leading 0 to the minutes
    if (curminute < 10) {
        curminute = '0' + curminute;
    }
    let momentMinutes = curminute;

    //running moment
    //check if running is true and weather code is valid
    if (running && weatherCode < 999) {
        let runMomentTime = '';
        let runMomentStart = 0;
        let runMomentEnd = 0;
        //if the weather is nice
        if (weatherCode == 500 || weatherCode == 501 || (weatherCode >= 800 && weatherCode <= 804)) {
            //if sportmoment already has an item
            if (sportMoments.length > 0) {
                //increment the id of the last item
                let sportMomentID = parseInt(sportMoments[sportMoments.length - 1].id) + 1;
                sportMoments.push({ "id": sportMomentID, "moment": { "sport": "Running", "time": "8:00 - 10:00" } });
            } else {
                //use 1 as id
                sportMoments.push({ "id": "1", "moment": { "sport": "Running", "time": "8:00 - 10:00" } });
            }
        }
    }

    //swimming moment
    //check if swimming is true and valid poolCount
    if (swimming && poolCount < 999) {
        let swimMomentTime = '';
        let swimMomentStart = 0;
        let swimMomentEnd = 0;
        //if lt 50 people 'HereNow'
        if (poolCount <= 50) {
            if (moment == 'AM') {
                if (curhour < 12 && curhour >= startTimeHour && curhour < endTimeHour) {
                    swimMomentStart = curhour + 1;
                    swimMomentEnd = swimMomentStart + 2;

                    swimMomentTime = '' + swimMomentStart + ':' + momentMinutes + ' - ' + swimMomentEnd + ':' + momentMinutes + '';
                }
            } else {
                if (curhour < 24 && curhour >= startTimeHour && curhour < endTimeHour) {
                    if ((curhour + 1) >= 24) {
                        swimMomentStart = curhour - 23;
                    } else {
                        swimMomentStart = curhour + 1;
                    }
                    swimMomentEnd = swimMomentStart + 2;
                    if (swimMomentStart < 10) {
                        swimMomentStart = '0' + swimMomentStart;
                    }
                    if (swimMomentEnd < 10) {
                        swimMomentEnd = '0' + swimMomentEnd;
                    }
                    swimMomentTime = '' + swimMomentStart + ':' + momentMinutes + ' - ' + swimMomentEnd + ':' + momentMinutes + '';
                }
            }

            //gymMoment is empty if it doesn't fit between the set hours
            if (swimMomentTime != '') {
                if ((!(swimMomentStart > startTimeHour) || !(swimMomentEnd < endTimeHour))) {
                    //if sportmoments already has moment
                    if (sportMoments.length > 0) {
                        //increment id
                        let sportMomentID = parseInt(sportMoments[sportMoments.length - 1].id) + 1;
                        sportMoments.push({ "id": sportMomentID, "moment": { "sport": "Swimming", "time": swimMomentTime } });
                    } else {
                        //start with id 1
                        sportMoments.push({ "id": "1", "moment": { "sport": "Swimming", "time": swimMomentTime } });
                    }
                }
            }
        }
    }

    // fitness moment
    if (fitness && gymCount < 999) {
        let gymMomentTime = '';
        let gymMomentStart = 0;
        let gymMomentEnd = 0;
        if (gymCount <= 50) {
            if (moment == 'AM') {
                if (curhour < 12 && curhour >= startTimeHour && curhour < endTimeHour) {
                    gymMomentStart = curhour + 1;
                    gymMomentEnd = gymMomentStart + 2;

                    gymMomentTime = '' + gymMomentStart + ':' + momentMinutes + ' - ' + gymMomentEnd + ':' + momentMinutes + '';
                }
            } else {
                if (curhour < 24 && curhour >= startTimeHour && curhour < endTimeHour) {
                    if ((curhour + 1) >= 24) {
                        gymMomentStart = curhour - 23;
                    } else {
                        gymMomentStart = curhour + 1;
                    }
                    gymMomentEnd = gymMomentStart + 2;
                    if (gymMomentStart < 10) {
                        gymMomentStart = '0' + gymMomentStart;
                    }
                    if (gymMomentEnd < 10) {
                        gymMomentEnd = '0' + gymMomentEnd;
                    }
                    gymMomentTime = '' + gymMomentStart + ':' + momentMinutes + ' - ' + gymMomentEnd + ':' + momentMinutes + '';
                }
            }
            //gymMoment is empty if it doesn't fit between the set hours
            if (gymMomentTime != '') {
                if ((!(gymMomentStart > startTimeHour) || !(gymMomentEnd < endTimeHour))) {
                    //if sportmoments already has moment
                    if (sportMoments.length > 0) {
                        let sportMomentID = parseInt(sportMoments[sportMoments.length - 1].id) + 1;
                        sportMoments.push({ "id": sportMomentID, "moment": { "sport": "Fitness", "time": gymMomentTime } });
                    } else {
                        sportMoments.push({ "id": "1", "moment": { "sport": "Fitness", "time": gymMomentTime } });
                    }
                }
            }
        }
    }
    return sportMoments;
}