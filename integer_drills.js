function computeArea(width, height) {
  
  return width * height;
}


function celsToFahr(celsTemp) {
  
  return celsTemp * 9 / 5 + 32;
}

function fahrToCels(fahrTemp) {
  
  return (fahrTemp - 32) / 1.8;
}

function isDivisible(divisee, divisor) {
  
  return divisee % divisor === 0;
}
