class FP {
    constructor(first, last, houseMembers, houseSize, foodChoice) {
        this.first = first
        this.last = last
        this.houseMembers = houseMembers
        this.houseSize = houseSize
        this.foodChoice = foodChoice
        this.houseHoldPoints();
        this.houseSizePoints();
        this.foodChoicePoints();
        this.total();
    }
    houseHoldPoints(){
        if (this.houseMembers === 1) {
            this.houseHoldPoints = 14;
          } else if (this.houseMembers === 2) {
            this.houseHoldPoints = 12;
          } else if (this.houseMembers === 3) {
            this.houseHoldPoints = 10;
          } else if (this.houseMembers === 4) {
            this.houseHoldPoints = 8;
          } else if (this.houseMembers === 5) {
            this.houseHoldPoints = 6;
          } else if (this.houseMembers > 6) {
            this.houseHoldPoints = 4;
          } else if (this.houseMembers > 6) {
            this.houseHoldPoints = 2;
          }
          
    }
    houseSizePoints(){
        if (this.houseSize === "large house") {
            this.houseSizePoints = 10;
          } else if (this.houseSize === "medium house") {
            this.houseSizePoints = 7;
          } else if (this.houseSize === "small house") {
            this.houseSizePoints = 4;
          } else if (this.houseSize === "apartment") {
            this.houseSizePoints = 2;
          }
    }
    foodChoicePoints(){
      if(this.foodChoice === "prepacked food"){
        this.foodChoice = 12;
      }
      else if(this.foodChoice === "meat daily"){
        this.foodChoicePoints = 10;
      }else if(this.foodChoice === "meat a few times"){
        this.foodChoicePoints = 8;
      }else if(this.foodChoice === "fresh convenience food"){
        this.foodChoicePoints = 6;
      }else if(this.foodChoice === "vegetarian"){
        this.foodChoicePoints = 4;
      }else if(this.foodChoice === "vegan or wild meat" || this.foodChoice === "local grown"){
        this.foodChoicePoints = 2;
      }
    }
    total(){
      this.total = this.foodChoicePoints + this.houseSizePoints + this.houseHoldPoints;
      }
}


export {FP}