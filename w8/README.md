# My understanding of the code written so far

## Inside the e.eventListener
1. First we have to enter something into the inputs for first name, last name, household members, and size of house becasue they are required. The submit button has an event listener which basically starts our code once pressed.
2. Inside our event listener the firstName and lastName contains the value of what is put inside the inputs.
3. The variable houseMembers changes the data type to become a number instead of string using parseInt(). While houseSzie variable contains the value for the size of house.
4. In the submit button event listener the start function is called.
---
## Inside start() function
5. The const householdPts contains the function that calculates the points for household members and the const houseSizePts contains the function for calculating house size points.
6. The variable const total contains adding householdPts and houseSizepts which is the total points.
7. cfaData.push then adds all the information inside our objext into the array cfaData that is at top of the file.
---
## back to submit button event listener
8. OUTPUT.innerHTML allows for it to be displayed inside the div element inside our html document.
9. renderTBL is called with cfaData inside
---
## inside renderTbl()
10. the function renderTBLHeading is called
---
## inside rederTblHeading()
11. table.innerHTML allow the content to be display inside the div element.
12. the table, thead, tr elements are created
13. the variable headingTextArr contains an array with name and footprint
14. the headingTextArr.forEach(function(text)) creates the heading for each of the items inside the array which are "Name" and "Footprint".
15. tr is placed inside the thead and thead is placed inside table. Then table is returned.
---
## inside renderTbl()
16. the tbody and tr elements are created.
17. data.forEach() passes the cfaData into the function
18. we created td element to display the name and footprint and text conent is used to display it.
19. both tdName and tdTotal are placed inside the tr inside the DOM
20. tr is now placed inside the tbody so the table can be seen with the input data inside the actual table.

## How do we handle the edit?
I think we can use the splice() for the edit button. I think this is how we can target which item in idex will specifically be changed. I am not entirely sure how I would connect the inputs values so it can possibly change for editing it.