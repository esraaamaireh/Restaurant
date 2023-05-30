 'use strict'
let id = 0;
var num = 0;
var n; 




const table = document.getElementById('foodtable');
const tr = document.createElement('tr')

table.appendChild(tr);
const th1 = document.createElement('th');
th1.textContent = "Food ID";
tr.appendChild(th1);
const th2 = document.createElement('th');
th2.textContent = "Food Name";
tr.appendChild(th2);
const th3 = document.createElement('th');
th3.textContent = "Food Type";
tr.appendChild(th3);
const th4 = document.createElement('th');
th4.textContent = "Price";
tr.appendChild(th4);



function Restaurant(foodName,foodType, price) {
    this.foodName = foodName;
    
    this.foodType = foodType;
    this.price = price;
   
    
}
Restaurant.prototype.UniqueID = function () {//UNIQUE ID FUNCTION
    var count = ""+num;

    num++;
   return count ;


};
Restaurant.prototype.render = function () { 

   

    
    const td1 = document.createElement('td');
    td1.textContent = this.UniqueID();
  
    trl.appendChild(td1);
    const td2 = document.createElement('td');
    td2.textContent = this.foodName;
    trl.appendChild(td2);
    const td3 = document.createElement('td');
    td3.textContent = this.foodType;
    trl.appendChild(td3);
    const td4 = document.createElement('td');
    td4.textContent = this.price;
    trl.appendChild(td4);
    



};

// function handler(e) {
//     e.preventDefault();
    
//     let foodName = document.getElementById("foodtable").value;

//     // e.target.foodtable.value;
   
//     let price = document.getElementById("price").value;
//     //e.target.foodtype.selectedOptions;
    
//     let foodType = document.querySelector.value
//     // e.target.foodprice.value;
//     let foodTable = new Restaurant(foodName, foodType, price);
// console.log();
// }
            
//     foodTable.foodID;
//     foodTable.render();

  

let saveValues = document.getElementById('foodForm');
    
saveValues.addEventListener('submit', function (event) {
    event.preventDefault();

    let foodName = document.getElementById('foodName').value;
    let foodType = document.querySelector('#foodType').value;
    let price = document.getElementById('price').value;
    let foodTable = new Restaurant(foodName, foodType, price);
    foodTable.UniqueID();
    foodTable.render();
    })
