import {FORM, TBL} from "./global.js";
import { saveLS } from "./storage.js";

// avg FP score
const calculateAvg = (data) => {
  const total = data.reduce((sum, ea) => sum + ea.total,0);
  let tableRef = document.getElementById("tab-data");
  let newRow = tableRef.insertRow(-1);
  let newCell = newRow.insertCell(0);
  let newCell1 = newRow.insertCell(0);
  
  let newLabl = document.createTextNode('Average Footprint')
  let newText = document.createTextNode(`${Math.floor(total/data.length)}`)
  newCell1.appendChild(newLabl);
  newCell.appendChild(newText);
}

const renderTblHeading= () => {
    TBL.innerHTML = "";
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");

    const headingTextArr = ["Name", "Household", "HouseSize", "Food", "Footprint", "Action"];
    headingTextArr.forEach(function(text){
        const th = document.createElement("th");
        th.textContent = text;
        tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead);
    return table;
  }

  const onUpdate = (index, data) => {
    data.splice(index, 1);
        saveLS(data);
        renderTbl(data);
  }
  const renderTblBtn = (obj, index, data) => {
    const td = document.createElement("td"); 
        const btnEdit = document.createElement("button");
        const btnDel = document.createElement("button");
        btnEdit.textContent = "Edit";
       btnDel.textContent = "Del";
      td.appendChild(btnEdit);
      td.appendChild(btnDel);
      
      btnDel.addEventListener('click', function(e){
        console.log("delete")
        onUpdate(index, data);
      })
      btnEdit.addEventListener("click", function(e){
        FORM[1].value = obj.first;
        FORM[2].value = obj.last;
        FORM[3].value = obj.houseMembers;
        FORM[4].value = obj.houseSize;
        FORM[5].value = obj.foodChoice;
        
        onUpdate(index, data);
      })
      return td;
  }

  const creatingRows = data =>{
    const tbody = document.createElement("tbody");
    data.forEach((obj, index) => {
      const tr = document.createElement("tr");
      const keys = ["first", "houseMembers", "houseSize", "foodChoice", "total"];

          keys.forEach(key => {
              const td = document.createElement("td");
              td.textContent = obj[key];
              tr.appendChild(td);
          })
          
          
      const td = renderTblBtn(obj, index, data);
      tr.appendChild(td);
        tbody.appendChild(tr)
  });
  return tbody;
}


  const renderTbl = data => {
      TBL.innerHTML = ""
     if(data.length !== 0) {
      const table = renderTblHeading(data);
      const rows = creatingRows(data);
      table.appendChild(rows);
    TBL.appendChild(table);
    calculateAvg(data)
     }
        
    
    }
 

      export{renderTbl, renderTblHeading};