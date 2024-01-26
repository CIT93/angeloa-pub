/*
function determineHouseholdPts(numberInHousehold) {
    if (numberInHousehold === 1) {
        carbonFootprintPoint = carbonFootprintPoint + 14;
    } else if (numberInHousehold === 2) {
        carbonFootprintPoint = carbonFootprintPoint + 12;
    } else if (numberInHousehold === 3) {
       carbonFootprintPoint = carbonFootprintPoint + 10;
    } else if (numberInHousehold === 4) {
        carbonFootprintPoint = carbonFootprintPoint + 8;
    } else if (numberInHousehold === 5) {
        carbonFootprintPoint = carbonFootprintPoint + 6;
    } else if (numberInHousehold  > 6) {
        carbonFootprintPoint = carbonFootprintPoint + 4;
    } else if (numberInHousehold > 6){
        carbonFootprintPoint = carbonFootprintPoint + 2;
    }
    console.log(`Based on the number of members in the household ${numberInHousehold} the points would be ${carbonFootprintPoint}`);
}

let carbonFootprintPoint = 0;
//const numberInHousehold = 3;

determineHouseholdPts(3)
*/

/*
If you have a large house, then add 10 points to your score.
If you have a medium-sized house, then add 7 points.
If you have a small house, then add 4 points.
If you live in an apartment, then add 2 points.
*/





function findingHouseSize(houseSize) {
    let carbonFootprintPoints = 0;

    if (houseSize === "large house") {
        carbonFootprintPoints = carbonFootprintPoints + 10;
    } else if (houseSize === "medium house") {
        carbonFootprintPoints = carbonFootprintPoints + 7;
    } else if (houseSize === "small house") {
        carbonFootprintPoints = carbonFootprintPoints + 4;
    } else if (houseSize === "apartment") {
        carbonFootprintPoints = carbonFootprintPoints + 2;
    }
    console.log(`Based on the size of your ${houseSize} the points would be ${carbonFootprintPoints}.`);
    
}


findingHouseSize("apartment")
