const TBL = document.getElementById("tab-data");

function renderTblHeading(data) {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr"); 
    const headingTextArr = ["Name", "Household", "HouseSize", "Footprint", "Actions"];
    headingTextArr.forEach(function(text){
      const th = document.createElement("th");
      th.textContent = text;
      tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead);
    TBL.appendChild(table);
    return table;
    }
    //there is an error for rendering table because table could not be found in the file
    function renderTbl(data) {
      const table = renderTblHeading();
      const tbody = document.createElement("tbody");
      const tr = document.createElement("tr"); 
      const trTextArr = ["Angelo", 3, "Large", 20];
      trTextArr.forEach(function(text){
        const td = document.createElement("td"); 
        td.textContent = text;
        tr.appendChild(td);
      });
      const td = document.createElement("td"); 
      const btnEdit = document.createElement("button");
      const btnDel = document.createElement("button");
      btnEdit.textContent = "Edit";
      btnDel.textContent = "Del";
      td.appendChild(btnEdit);
      td.appendChild(btnDel);
      tr.appendChild(td);
      tbody.appendChild(tr);
      table.appendChild(tbody);
      console.log(table);
      }

      export{renderTbl, renderTblHeading};