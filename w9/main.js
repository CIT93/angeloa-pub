import { renderTbl, renderTblHeading } from "./render.js";
import {determineHouseholdPts, findingHouseSize} from "./carbonfootprint.js";
import {FORM} from "./global.js";
import {saveLS, cfpData} from "./storage.js";
const firstNameInput = document.getElementById('firstNameInput');
const lastNameInput = document.getElementById('lastNameInput');

const validateField = event => {
  const field = event.target.value  
  const fieldId = event.target.id
  const fieldError = document.getElementById(`${fieldId}Error`)
  if (field === '') {
    fieldError.textContent = `${fieldId} is required`
    event.target.classList.add('invalid')
  } else {
    fieldError.textContent = ''
    event.target.classList.remove('invalid')
  }
    
  
  }

// Attach blur event listeners
document.getElementById('firstNameInput').addEventListener('blur', validateField);
document.getElementById('lastNameInput').addEventListener('blur', validateField);

// Listen for form submission


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
FORM.addEventListener('submit', function(e){
  e.preventDefault();
   const fnInputError = document.getElementById("firstNameError");
   const lnInputError = document.getElementById("lastNameError");
  const firstNameIsValid = firstNameInput.value !== '';
  const lastNameIsValid = lastNameInput.value !== '';
  if (firstNameIsValid && lastNameIsValid) {
    const firstName = FORM.firstname.value;
    const lastName =  FORM.lastname.value;
    const houseMembers = parseInt(FORM.housem.value);
    const houseSzie = FORM.houses.value;
    start(firstName, lastName, houseMembers, houseSzie);
    
    saveLS(cfpData);
    renderTbl(cfpData);
  }else if(firstNameInput == ''){
    fnInputError.textContent = "First Name is required"
  }else if(lastNameInput == ''){
    lnInputError.textContent = "Last Name is required"
  }
  
  FORM.reset();
})
