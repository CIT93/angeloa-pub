const houseMembers = 4;
const myHome = 2;
const myMeals = 8;
const waterAmount = 0;
const housePurchases = 4;
const wasteAmount = 20;
const recycleAmount = 24 - 16;
const yearlyTransportation = 4;

const total = houseMembers + myHome + myMeals + waterAmount + houseMembers + wasteAmount +recycleAmount +yearlyTransportation;
console.log(total);

const myHeading = document.querySelector("h2");

myHeading.textContent = total;
