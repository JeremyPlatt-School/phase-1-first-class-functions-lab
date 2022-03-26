// Code your solution in this file!

const returnFirstTwoDrivers = drivers => drivers.slice(0, 2);
const returnLastTwoDrivers = drivers => drivers.slice(-2); 
const selectingDrivers =[returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int){
    if (int == 2){
        return fareDoubler;
    }
    if (int == 3){
       return fareTripler;
    }
    if (int == 4){
      return  fareQuadrupler;
    }
    if (int == 5){
      return fareQuintupler;
    }

}


    const fareDoubler = function(fare){
        fare = fare * 2;
        return fare;
    }
    const fareTripler = function(fare){
        fare = fare * 3;
        return fare;
    }
    const fareQuadrupler = function(fare){
        fare = fare * 4;
        return fare;
    }
    const fareQuintupler = function(fare){
        fare = fare * 5;
        return fare;
    }
    

function selectDifferentDrivers(driverArray, funcDrivers){

    if(funcDrivers === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(driverArray);
    } else if(funcDrivers === returnLastTwoDrivers){
        return returnLastTwoDrivers(driverArray);
    }

}
