import { renderTbl, renderTblHeading } from "./render.js";
const FORM =  document.getElementById("form");
const cfpData = [];
const OUTPUT = document.getElementById("output");


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
  return houseSizePoint;
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
  } else if (numberInHousehold > 6) {
    houseHoldPoints = 4;
  } else if (numberInHousehold > 6) {
    houseHoldPoints = 2;
  }
  return houseHoldPoints;
}

// function displayOutObj(obj) {
//   console.log(obj);
//   const output = document.getElementById("output");
//   const newH2 = document.createElement("h2");
//   newH2.textContent = `Carbon Footprint ${obj.total}`;
//   output.appendChild(newH2);

//   const newH3 = document.createElement("h3");
//         newH3.textContent = `Based on number and size home `;
//         const newP = document.createElement("p");
//         newP.textContent = `This number is based on the number of people in the house of ${obj.houseHoldMemebers} (score ${obj.houseSizePts}),`;
//         newP.textContent += `and a ${obj.houseSizes} size of home (score ${obj.houseHoldPts}).`
//         output.appendChild(newH3);
//         output.appendChild(newP);
        
// }

function start(houseHoldMemebers, houseSizes) {
  const houseHoldPts = determineHouseholdPts(houseHoldMemebers);

  const houseSizePts = findingHouseSize(houseSizes);
  const total = houseHoldPts +houseSizePts;
  cfpData.push({
    houseHoldMemebers: houseHoldMemebers,
    houseSizes: houseSizes,
    houseSizePts: houseSizePts,
    houseHoldPts: houseHoldPts,
    cfpTotal: total
  });
//  displayOutObj(cfpObj);
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


//start(5, "apartment");
// start(4, "apartment");
// start(3, "apartment");



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
//displayOutputLoop()
//object coding challenge - refactor the start function to store the data in an object instead of an array

//Into to Objects

const myArray = [];
const myObj = {
  cfpTotal: 18,
  houseSize: "small house",
  displayOut: function () {
    console.log("this is a method call");
    console.log(this);
    //console.log(myObj.cfpTotal);
  },
};
console.log(myObj.cfpTotal);
console.log(myObj["houseSize"]);
myObj.displayOut();



displayOutput()

// the required attribute does simple form validation
// built in validation is for when assuming you will get incorrect data so I'll stop it.

FORM.addEventListener('submit', function(e){
  e.preventDefault();
  // console.log("I am inside the callback function");
  // console.log(e);
  const firstName = FORM.firstname.value;
  const lastName =  FORM.lastname.value;
  const houseMembers = parseInt(FORM.housem.value);
  const houseSzie = FORM.houses.value;
  start(houseMembers, houseSzie);
  OUTPUT.innerHTML = "";
  //displayOutput();
  renderTbl();
  FORM.reset();
})
// is the apartment score correct?
// Yes, the partment score is correct

// why are we doing all this work to make sure ther user is giving us good data?
// The user might not give good data