import { renderTbl, renderTblHeading } from "./render.js";
import {determineHouseholdPts, findingHouseSize} from "./carbonfootprint.js";
import {FORM, FNAME, LNAME, SUBMIT} from "./global.js";
import {saveLS, cfpData} from "./storage.js";
import{FP} from "./fp.js";


const start = (...i) => {
  const houseHoldPts = determineHouseholdPts(i[2]);

  const houseSizePts = findingHouseSize(i[3]);
  const total = houseHoldPts +houseSizePts;
  cfpData.push({
    firstName: i[0],
    lastName: i[2],
    houseHoldMemebers: i[2],
    houseSizes: i[3],
    houseSizePts: houseSizePts,
    houseHoldPts: houseHoldPts,
    cfpTotal: total
  });

}


renderTbl(cfpData);
const validateField = event => {
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`);

  if (field === '') {
      fieldError.textContent = `${fieldId} is required`;
      event.target.classList.add('invalid');
  } else {
      fieldError.textContent = '';
      event.target.classList.remove('invalid');
  }
};

// Attach blur event listeners
FNAME.addEventListener('blur', validateField);
LNAME.addEventListener('blur', validateField);


FORM.addEventListener('submit', e => {
  e.preventDefault();
  if (FNAME.value !== '' && LNAME.value !== '') {
    SUBMIT.textContent = "";

    // start(FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value);
    const fpObj = new FP(FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value);
    // fpObj.houseSizePoints();
    // fpObj.houseHoldPoints();
    cfpData.push(fpObj);
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
}else{
  SUBMIT.textContent = "Form requires first and last name";
  
}
})


// const me = {
//   name: "Angelo",
//   hairColor: "black",
//   location: "home",
//   sleepScore: 55,
//   introduce: function() {
//     console.log(this);
//     console.log(`This is ${this.name} with ${this.hairColor} hair color is at ${this.location}`)
//   }
// }
// me.introduce();
// console.log(this);

// class Human {
//   constructor(name, hairColor, location, sleepScore){
//     this.name = name
//     this.hairColor = hairColor
//     this.location = location
//     this.sleepScore = sleepScore
//   }
//   introduce() {
//     console.log(`This is ${this.name} with ${this.hairColor} hair color is in ${this.location} and sleep score of ${this.sleepScore} `)
//   }
// }

// const angelo = new Human("angelo", "black", "home", 55);
// const jane = new Human("jane", "red", "outside", 95);
// angelo.introduce();
// jane.introduce();
// angelo.hrv = 50;