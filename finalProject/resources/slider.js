"use strict";

// This JavaScipt file shows the value of the slider bar on the forms page. //


function show_value(x) {
    document.getElementById("mealCost").innerHTML = x;
}

function add_one() {
  document.f.price.value=parseInt(document.f.price.value)+1;
  show_value2(document.f.price.value);
}

function subtract_one(){
  document.f.price.value=parseInt(document.f.price.value)-1;
  show_value2(document.f.price.value);
}


