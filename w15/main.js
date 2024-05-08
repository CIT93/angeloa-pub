import { renderTbl, renderTblHeading } from "./render.js";
import {determineHouseholdPts, findingHouseSize} from "./carbonfootprint.js";
import {FORM, FNAME, LNAME, SUBMIT} from "./global.js";
import {saveLS, cfpData} from "./storage.js";
import{FP} from "./fp.js";


const start = (...i) => {
  const houseHoldPts = determineHouseholdPts(i[2]);

  const houseSizePts = findingHouseSize(i[3]);
  const foodChoicePts =   foodChoicePts;
  const total = houseHoldPts +houseSizePts;
  cfpData.push({
    firstName: i[0],
    lastName: i[2],
    houseHoldMemebers: i[2],
    houseSizes: i[3],
    houseSizePts: houseSizePts,
    houseHoldPts: houseHoldPts,
    foodChoicePts: foodChoicePts,
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
    const fpObj = new FP(FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value, FORM.food.value);
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

/*function getPizza() {
  return "🍕";
}

const pizza = getPizza();
console.log(`${pizza}`)
*/
// Asynchronous
/*
let pizza 
function orderPizza() {
  console.log('Order pizza');
  setTimeout(()=> {
    pizza = "🍕";
    console.log(`${pizza} is ready`)
  }, 2000)
  console.log('Pizza was ordered');
}
  orderPizza()
  console.log('Call Goli')
  console.log(`Eat ${pizza}`);
*/

// Callback
function orderPizza(callback) {
  setTimeout(()=> {
    const pizza = "🍕";
    callback(pizza)
  }, 2000)
}
function pizzaReady(pizza) {
  console.log(`Eat the ${pizza}`)
}
orderPizza(pizzaReady);
console.log('Call Goli');
