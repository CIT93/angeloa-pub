import { renderTbl, renderTblHeading } from "./render.js";
import {determineHouseholdPts, findingHouseSize} from "./carbonfootprint.js";
import {FORM, FNAME, LNAME, SUBMIT} from "./global.js";
import {saveLS, cfpData} from "./storage.js";


const start = (first, last, houseHoldMemebers, houseSizes) => {
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

    start(FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value);
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
}else{
  SUBMIT.textContent = "Form requires first and last name";
  
}
})


// const add2 = function(...a){
//   return 2 + a[3];
// }

// const result = add2(1, 2, 3, 4);

// //spread argument

// //IIFE

// const a = 3;

// (function(add2){
// console.log("inside IIFE")
// console.log("inside IIFE")
// })(a);