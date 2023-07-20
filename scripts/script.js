// // excel-sheet-generator
tbl = document.getElementById('table');
function generateTable() {
    const numRows = parseInt(document.getElementById("rows").value);
    const numColumns = parseInt(document.getElementById("columns").value);
    // condition for valid number of columns and number of rows
    if (numRows <= 0 || numColumns <= 0 || isNaN(numRows) || isNaN(numColumns)) {
        alert("Enter a valid number");
        return;
    }
    //  variable to table value
    let tableContent = "";

    //  create table
    for (let i = 1; i <= numRows; i++) {
        tableContent += "<tr>"; // start new row 
        for (let j = 1; j <= numColumns; j++) {
            tableContent += "<td contenteditable='true'></td>"; //  start new cell 
        }
        tableContent += "</tr>"; // end row  
    }
    // append table content
    const sheetBody = document.querySelector(".sheet-body");
    sheetBody.innerHTML = tableContent;
}
// sets the border attribute of tbl to '2'
tbl.setAttribute("border", "2");

function ExportToExcel(type, fn, dl) {
    var elt = document.getElementById('table');
    var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
    return dl ?
        XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }):
        XLSX.writeFile(wb, fn || ('MySheetName.' + (type || 'xlsx')));
}


// // Nice Scrolling
$(document).ready(function () {
	"use strict";
$("html").niceScroll({
    cursorcolor:"#00ac47",
	cursorwidth:"12px",
	cursorborder:"#black solid 2px"
});
});