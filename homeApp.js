/*===============
   Global Variables
===============*/

let body = document.body;
let navBar = document.getElementById("nav-bar");
let links = document.getElementsByTagName("a");
let buttons = document.getElementsByTagName("button");
let searchBar = document.getElementById("search");
let tableColumnHeaders = document.getElementsByTagName("th");
let tableCellData = document.getElementsByTagName("td");
let turnedOn = "active";

/*=================
   Dark Mode Feature
=================*/

function darkMode() {
  body.classList.toggle("dark-mode");
}

/*===========
    Table Data
===========*/

fetch("electronics.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    err = "Something went wrong.";
    console.log(err);
  });


  function appendData(data) {
    const mainContainer = document.getElementById("tableData");
    for (let x = 0; x < data.length; x++) {
        let section = document.createElement("section");
        section.innerHTML = 'Name: ' + data[x].name;
        mainContainer.appendChild(section);
    }
}

/*===========
    Script Calls 
===========*/
appendData();
