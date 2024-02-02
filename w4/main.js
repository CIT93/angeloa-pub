const cfpData = [];


function findingHouseSize(houseSize) {
    let houseSizePoint = 0; 
    if (houseSize === "large house") {
        houseSizePoint = 10;
    } else if (houseSize === "medium house") {
        houseSizePoint = 7;
    } else if (houseSize === "small house") {
        houseSizePoint = 4;
    } else if (houseSize === "apartment") {
        houseSizePoint = 2;
    }
}

function determineHouseholdPts(numberInHousehold) {
    let houseHoldPoints = 0;
    if (numberInHousehold === 1) {
        houseHoldPoints = 14;
    } else if (numberInHousehold === 2) {
        houseHoldPoints = 12;
    } else if (numberInHousehold === 3) {
        houseHoldPoints = 10;
    } else if (numberInHousehold === 4) {
        houseHoldPoints = 8;
    } else if (numberInHousehold === 5) {
        houseHoldPoints = 6;
    } else if (numberInHousehold  > 6) {
        houseHoldPoints = 4;
    } else if (numberInHousehold > 6){
        houseHoldPoints = 2;
    }
}



    
function start(houseHoldMemebers, houseSizes) {
    const houseHoldPts = determineHouseholdPts(houseHoldMemebers);
    
    const houseSizePts = findingHouseSize(houseSizes);
    const total = houseHoldPts + houseSizePts;
    cfpData.push(houseHoldMemebers, houseSizes, houseHoldPts, houseSizePts, total);
   
    
}


start(6, "apartment");
start(5, "apartment");
start(4, "apartment");
start(3, "apartment");
start(2, "apartment");
start(1, "apartment");
start(6, "large house");
start(5, "large house");
start(4, "large house");
start(3, "large house");
start(2, "large house");
start(1, "large house");
start(6, "medium house");
start(5, "medium house");
start(4, "medium house");
start(3, "medium house");
start(2, "medium house");
start(1, "medium house");
start(6, "small house");
start(5, "small house");
start(4, "small house");
start(3, "small house");
start(2, "small house");
start(1, "small house");

function displayOutput() {
    
}

displayOutput()