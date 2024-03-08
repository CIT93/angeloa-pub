import { renderTbl, renderTblHeading } from "./render.js";
import {determineHouseholdPts, findingHouseSize} from "./carbonfootprint.js";
import {FORM} from "./global.js";
import {saveLS, cfpData} from "./storage.js";

const firstNameEl = document.getElementById("firstName");
const lastNameEl = document.getElementById("lastName");
const submitEl = document.getElementById('submitError');

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
document.getElementById('firstName').addEventListener('blur', validateField);
document.getElementById('lastName').addEventListener('blur', validateField);


FORM.addEventListener('submit', function(e){
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName =  FORM.lastname.value;
  const firstNameIsValid = firstNameEl.value !== '';
  const lastNameIsValid = lastNameEl.value !== '';

  if (firstNameIsValid && lastNameIsValid) {
    submitEl.textContent = "";
    const houseMembers = parseInt(FORM.housem.value);
    const houseSzie = FORM.houses.value;

    start(firstName, lastName, houseMembers, houseSzie);
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
}else{
  submitEl.textContent = "Form requires first and last name";
  
}
  
  
})
