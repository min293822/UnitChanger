const out = document.getElementById("out");
const input = document.getElementById("input");
const convert = document.getElementById("convert");
const unit = document.getElementById("unit");

function onChange(){
  let answer = document.getElementById("sele").value;
  
  
switch (answer) {
    case 'Kilometer to Mile':
     unit.innerHTML = "Kilometers";
      break;
    case 'Mile to Kilometer':
     unit.innerHTML = "Miles";
      break;
    case 'Feet to Meter':
     unit.innerHTML = "Feet";
      break;
    case 'Meter to Feet':
     unit.innerHTML = "Meters";
      break;
    case 'Square feet to Acres':
    unit.innerHTML = "Square Feets";
      break;
    case 'Acres to Square feet':
       unit.innerHTML = "Acres";
      break;  
      
    case 'Fehrenheit to Kelvin':
     unit.innerHTML = "Fehrenheit";
      break;
    case 'Kelvin to Fehrenheit':
     unit.innerHTML = "Kelvin";
      break;
    case 'Fehrenheit to Celcius':
      unit.innerHTML = "Fehrenheit";
      break;
    case 'Celcius to Fehrenheit':
      unit.innerHTML = "Celcius";
      break;
    case 'Kelvin to Celcius':
      unit.innerHTML = "Kelvin";
      break;
    case 'Celcius to Kelvin':
      unit.innerHTML = "Celcius";
      break;
    
  }
}


convert.onclick =function(){
  let answer = document.getElementById("sele").value;
  let preanswer;
  let preaanswer;
  switch (answer) {
    
    case 'Kilometer to Mile':
     preanswer = input.value * 0.62137;
     out.innerHTML = preanswer.toFixed(2) + " Miles";
      break;
    case 'Mile to Kilometer':
      preanswer = input.value * 1.609344;
     out.innerHTML = preanswer.toFixed(2)  + " Kilometers";
      break;
    case 'Feet to Meter':
      preanswer = input.value * 0.3048;
     out.innerHTML = preanswer.toFixed(2) + " Meters";
      break;
    case 'Meter to Feet':
      preanswer = input.value * 3.28084;
       out.innerHTML = preanswer.toFixed(2) + " Feet";
      break;
      case 'Square feet to Acres':
        preanswer = input.value / 43560;
       out.innerHTML = preanswer.toFixed(5) + " Acres";
      break;
      
    case 'Fehrenheit to Kelvin':
      preanswer = (input.value - 32) * (5/9) + 273.15;
      out.innerHTML = preanswer.toFixed(2) + " Kelvin";
      break;
    case 'Kelvin to Fehrenheit':
      preanswer = (input.value - 273.15) * (9/5) + 32;
      out.innerHTML = preanswer.toFixed(2) + " Fahrenheit";
      break;
   case 'Fehrenheit to Celcius':
     preanswer = (input.value - 32)* (5/9);
      out.innerHTML = preanswer.toFixed(2) + " Celcius";
      break;
    case 'Celcius to Fehrenheit':
      preanswer = (input.value * (9/5)) + 32;
      out.innerHTML = preanswer.toFixed(2) + " Fahrenheit";
      break;
    case 'Kelvin to Celcius':
      preanswer = (input.value - 273.15) ;
      out.innerHTML = preanswer.toFixed(2) + " Celcius";
      break;
    case 'Acres to Square feet':
      preanswer = Math.sqrt(input.value * 43560).toFixed(2);
      out.innerHTML = preanswer + " x " + preanswer + " Square feet";
      break;
      case 'Celcius to Kelvin':
      preanswer = (input.value + 273.15).toFixed(2) ;
      out.innerHTML = preanswer + " Kelvin";
      break;
      
      default:
      
    out.innerHTML = "Please choose One";
    
  }
  
}


