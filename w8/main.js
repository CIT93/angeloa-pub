import { renderTbl, renderTblHeading } from "./render.js";
import {determineHouseholdPts, findingHouseSize} from "./carbonfootprint.js"
const FORM =  document.getElementById("form");
const cfpData = [];
const OUTPUT = document.getElementById("output");

function start(first, last, houseHoldMemebers, houseSizes) {
  const houseHoldPts = determineHouseholdPts(houseHoldMemebers);

  const houseSizePts = findingHouseSize(houseSizes);
  const total = houseHoldPts +houseSizePts;
  cfpData.push({
    firstName: first,
    lastName: last,
    houseHoldMemebers: houseHoldMemebers,
    houseSizes: houseSizes,
    houseSizePts: houseSizePts,
    houseHoldPts: houseHoldPts,
    cfpTotal: total
  });

}

function displayOutput() {
  
    for (obj of cfpData) {
      console.log(obj)
        const newH2 = document.createElement("h2");
        newH2.textContent = `Carbon Footprint ${obj.cfpTotal}`;
        const newH3 = document.createElement("h3");
         newH3.textContent = `Based on number and size home `;
        const newP = document.createElement("p");
        newP.textContent = `This number is based on the number of people in the house of ${obj.houseHoldMemebers} (score ${obj.houseSizePts}),`;
        newP.textContent += `and a ${obj.houseSizes} size of home (score ${obj.houseHoldPts}).`
        output.appendChild(newH2);
         output.appendChild(newH3);
        output.appendChild(newP);
    }
}


// refactor for of loop into standard for loop

function displayOutputLoop() {
  const output = document.getElementById("output");
  for (let i = 0; i < cfpData.length; i++) {
    const arr = cfpData[i];
    const newH2 = document.createElement("h2");
    newH2.textContent = `Carbon Footprint ${arr[4]}`;
    const newH3 = document.createElement("h3");
    newH3.textContent = `Based on number and size home `;
    const newP = document.createElement("p");
    newP.textContent = `This number is based on the number of people in the house of ${arr[0]} (score ${arr[3]}),`;
    newP.textContent += `and a ${arr[1]} size of home (score ${arr[2]}).`;
    OUTPUT.appendChild(newH2);
    OUTPUT.appendChild(newH3);
    OUTPUT.appendChild(newP);
  }
}


//Into to Objects

const myArray = [];
const myObj = {
  cfpTotal: 18,
  houseSize: "small house",
  displayOut: function () {
    console.log("this is a method call");
    console.log(this);

  },
};
console.log(myObj.cfpTotal);
console.log(myObj["houseSize"]);
myObj.displayOut();


FORM.addEventListener('submit', function(e){
  e.preventDefault();

  const firstName = FORM.firstname.value;
  const lastName =  FORM.lastname.value;
  const houseMembers = parseInt(FORM.housem.value);
  const houseSzie = FORM.houses.value;
  start(firstName, lastName, houseMembers, houseSzie);
  OUTPUT.innerHTML = "";
 
  renderTbl(cfpData);
  FORM.reset();
})
