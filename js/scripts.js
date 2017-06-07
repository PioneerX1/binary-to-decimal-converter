//NEEDS INPUT FROM HTML FORM

var total = 0;
var multiplier = 1;
var numBin = "110110101";
for (var i=numBin.length - 1; i >= 0; i--) {
var digit = numBin.charAt(i);
  var subTotal = parseInt(digit);
  subTotal = subTotal * multiplier;
  multiplier = multiplier * 2;
  total += subTotal;
}

alert(total);
