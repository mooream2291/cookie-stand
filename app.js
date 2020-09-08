'use strict';

var storehours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var seattle = {
    name: 'Seattle',
    min: 23,
    max: 65,
    avgck: 6.3,
    totalsales: [],
   random:function() {
       for (var i = 0; i < storehours.length; i++);
       var li = document.createElement('li');
       li.textcontent = hours[i] + ': ' + Math.round(generaterandom(this.min, this.max)*this.avgck) + ' cookies';
       storeinfo.appendChild(li); 
       var cph = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
       var cookiesales = Math.round(cph*this.avgck);
       return cookiesales
   },  
   generateTotal:function() {
       for (var i = 0; i < storehours.length; i++) {
           this.totalsales.push(this.random())
       }
   }
}
var tokyo = {
    name: 'Tokyo',
    min: 3,
    max: 24,
    avgck: 1.2,
    totalsales: [],
   random:function() {
       var cph = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
       var cookiesales = Math.round(cph*this.avgck);
       return cookiesales
   },  
   generateTotal:function() {
       for (var i = 0; i < storehours.length; i++) {
           this.totalsales.push(this.random())
       }
   }
}
var dubai = {
    name: 'Dubai',
    min: 11,
    max: 38,
    avgck: 3.7,
    totalsales: [],
   random:function() {
       var cph = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
       var cookiesales = Math.round(cph*this.avgck);
       return cookiesales
   },  
   generateTotal:function() {
       for (var i = 0; i < storehours.length; i++) {
           this.totalsales.push(this.random())
       }
   }
}
var paris = {
    name: 'Paris',
    min: 20,
    max: 38,
    avgck: 2.3,
    totalsales: [],
   random:function() {
       var cph = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
       var cookiesales = Math.round(cph*this.avgck);
       return cookiesales
   },  
   generateTotal:function() {
       for (var i = 0; i < storehours.length; i++) {
           this.totalsales.push(this.random())
       }
   }
}
var lima = {
    name: 'Lima',
    min: 2,
    max: 16,
    avgck: 4.6,
    totalsales: [],
   random:function() {
       var cph = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
       var cookiesales = Math.round(cph*this.avgck);
       return cookiesales
   },  
   generateTotal:function() {
       for (var i = 0; i < storehours.length; i++) {
           this.totalsales.push(this.random())
       }
   }
}