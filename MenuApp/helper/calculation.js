export const getSportMoment=()=>{
    // berekening in Helper
    var sportMoments = [{ "id": "1", "moment": { "sport": "Swimming", "time": "13:00-14:00" }}, { "id": "2", "moment": { "sport": "Running", "time": "16:00-18:00" }},{ "id": "3", "moment": { "sport": "Fitness", "time": "11:00-12:00" }}];        
    //{ "id": "4", "moment": { "sport": "Running", "time": "13:00-14:00" }}
    var sportMomentID = parseInt(sportMoments[sportMoments.length-1].id)+1;
    sportMoments.push({ "id": sportMomentID, "moment": { "sport": "Running", "time": "08:00-12:00" }});
    var sportMomentID = parseInt(sportMoments[sportMoments.length-1].id)+1;
    sportMoments.push({ "id": sportMomentID, "moment": { "sport": "Swimming", "time": "11:30-13:00" }});

    return sportMoments;
}