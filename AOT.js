const sides = document.querySelectorAll(".side-input")
const calculateAreaBtn = document.querySelector("#check-btn")
const outputEl = document.querySelector("#output")



function formulaOfArea(a, b) {
     area = 0.5 * (a * b);
     return area;
     
    
}

function calculateArea() {
   var base = Number(sides[0].value);
   var height = Number(sides[1].value);
   outputEl.innerText = "Area of triangle is " + formulaOfArea(base,height);
}        

