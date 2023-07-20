// // excel-sheet-generator

let rows = document.getElementById('rows');
let columns = document.getElementById('columns');
let sheet = document.getElementById('sheet-body');
let tbl = document.getElementById('table');

const generateTable = () =>{
    let rowNumber = parseInt(rows.value), colNumber = parseInt(columns.value)
    // creating all cells
    for (let i = 0; i < rowNumber; i++) {
        var tableRow = "";
        for (let j = 0; j < colNumber; j++) {
            // Create a <td> element and a text node, make the text
            tableRow += `<td contenteditable></td>`
        }
        sheet.innerHTML += tableRow
    }
    // sets the border attribute of tbl to '2'
    tbl.setAttribute("border", "2");
}



// // Nice Scrolling
// $(document).ready(function () {
// 	"use strict";
// $("html").niceScroll({
//     cursorcolor:"#140606",
// 	cursorwidth:"12px",
// 	cursorborder:"#E41B17 solid 2px"
// });
// });