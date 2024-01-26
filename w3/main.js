let carbonFootprintPoint = 0;
const numberInHousehold = 3;

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
console.log(`Based on the number of members in the household ${numberInHousehold} the points would be ${carbonFootprintPoint}`)