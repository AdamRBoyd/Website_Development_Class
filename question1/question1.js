/* All your code here */
let sortedBy = document.querySelector("header h2 #SortedBy");
sortedBy.innerHTML = "Decreasing Date (start)";

let broughtBy = document.querySelector("header h3 #NetId");
broughtBy.innerHTML = "xv3543";

events.sort(function(a, b) {
    return b.start - a.start;
});

let myTable = document.querySelector("body main section table");

events.forEach(element => {
    let row = myTable.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    cell1.innerHTML = element.start;
    cell2.innerHTML = element.distance;
    cell3.innerHTML = element.max10sec;
    cell4.innerHTML = element.sail;
});