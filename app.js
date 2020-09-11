'use strict';

//setting predetermined store hours as defined in lab instructions

var storehours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var storenames = [];


function Store(name, min, max, avgck) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avgck = avgck;
    this.totalsales = [];
    this.locationtotal = 0;
    storenames.push(this);
}
Store.prototype.random = function() {
    var cph = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    var cookiesales = Math.round(cph*this.avgck);
    return cookiesales
} 
 
Store.prototype.generateTotal = function() {
    this.locationtotal = 0
    this.totalsales = [];
    for (var i = 0; i < storehours.length; i++) {
        var myrandom = this.random();
        this.totalsales.push(myrandom);
        this.locationtotal += myrandom
    } 
}

// Store.prototype.dailyTotals = function() {
//     for (var i )
// }
Store.prototype.render = function() {
    
    var table = document.getElementById('cookietable');
    var tHead = document.createElement('thead');
    cookietable.append(tHead);

    var row = document.createElement('tr');
    tHead.append(row);

    var data = document.createElement('td');
    row.append(data);

    data.textContent = this.name;

    for (var i =0; i < this.totalsales.length; i++) {
        data = document.createElement('td');
        row.append(data);
        data.textContent = this.totalsales[i]
    } 

    var finalsales = document.createElement('td');
    finalsales.textContent = this.locationtotal
    row.append(finalsales);
}


var seattle = new Store('Seattle', 23, 65, 6.3)

var tokyo = new Store('Tokyo', 3, 24, 1.2)

var dubai = new Store('Dubai', 11, 38, 3.7)

var paris = new Store('Paris', 20, 38, 2.3)

var lima = new Store('Lima', 2, 16, 4.6)
// function generateTableHead() {
//     var cookietable = document.getElementById('cookietable');
//     var row = document.createElement('thead');
//     cookietable.append(row);

//     var row = document.createElement('tr');

//     var row = document.createElement('td');
//     var row = document.createElement('td');
//     var row = document.createElement('td');
//     var row = document.createElement('td');
//     var row = document.createElement('td');
//     var row = document.createElement('td');

//     //make table body function

//     var row = document.createElement('tbody');
//     var row = document.createElement('td');
//     var row = document.createElement('td');


// }
// generateTableHead();

function generateTableHead() {
    var table = document.getElementById('cookietable');
    var tHead = document.createElement('thead');
    cookietable.append(tHead);

    var row = document.createElement('tr');
    tHead.append(row);

    var data = document.createElement('td');
    row.append(data);

    data.textContent = '';

    for (var i =0; i < storehours.length; i++) {
        data = document.createElement('td');
        row.append(data);
        data.textContent = storehours[i]
    }  
}

function mainTable() {

    generateTableHead();

    for (var i = 0; i < storenames.length; i++) {
        storenames[i].generateTotal();
        storenames[i].render();

        console.log(storenames[i].locationtotal);
    }

    // seattle.generateTotal();
    // seattle.render();

    // tokyo.generateTotal();
    // tokyo.render();

    // dubai.generateTotal();
    // dubai.render();

    // paris.generateTotal();
    // paris.render();

    // lima.generateTotal();
    // lima.render();
}

function listener(event) {
    console.log('Input changed', event.target.name, event.target.value);
}

function newStore(event) {
    event.preventDefault();
    var cityName = event.target.formName.value;
    var minCust = event.target.formMin.value;
    var maxCust = event.target.formMax.value;
    var ACPC = event.target.formAvgck.value;
    console.log(cityName, minCust, maxCust, ACPC);

    new Store(cityName, minCust, maxCust, ACPC);
    console.log(storenames);

    var cleartable = document.getElementById('cookietable');
    cleartable.innerHTML = '';

    mainTable();
}

var formName = document.getElementById('formName');
var formMin = document.getElementById('formMin');
var formMax = document.getElementById('formMax');
var formAvgck = document.getElementById('formAvgck');
var formElement = document.getElementById('formNewStore');

formName.addEventListener('input', listener);
formMin.addEventListener('input', listener);
formMax.addEventListener('input', listener);
formAvgck.addEventListener('input', listener);

mainTable();
function footer() {
    

}
formElement.addEventListener('submit', newStore);
