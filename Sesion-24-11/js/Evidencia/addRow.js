function addRow() {
    // Get a reference to the table
    let tableRef = document.getElementById("my-table");
  
    // Insert a row at the end of the table
    let newRow = tableRef.insertRow(-1);
  
    // Insert a cell in the row at index 0
    let newCell = newRow.insertCell(0);
    let newCel2 = newRow.insertCell(1);
    let newCel3 = newRow.insertCell(2);
    let newCel4 = newRow.insertCell(3);
  
    // Append a text node to the cell
    let a = document.createTextNode('asd');
    let b = document.createTextNode('sdfds');
    let c = document.createTextNode('sgfds');
    let d = document.createTextNode('rtre');
    newCell.appendChild(a);
    newCel2.appendChild(b);
    newCel3.appendChild(c);
    newCel4.appendChild(d);
  }
  
  