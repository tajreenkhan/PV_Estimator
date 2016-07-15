function OnSubmitForm(){

    urlString= 'step-3.html?';
    var sCapacity = document.forms["myForm"]["sCapacity"].value;
    var loss = document.forms["myForm"]["loss"].value;
    var tilt = document.forms["myForm"]["tilt"].value;
    var azimuth = document.forms["myForm"]["azimuth"].value;

    var dcRatio = document.forms["myForm"]["dcRatio"].value;

    var groundRatio = document.forms["myForm"]["groundRatio"].value;
    var invEfficiency = document.forms["myForm"]["invEfficiency"].value;


var temp1 = document.getElementById("moduleType");
var moduleType = temp1.options[temp1.selectedIndex].value;


var temp2 = document.getElementById("arrayType");
var arrayType = temp2.options[temp2.selectedIndex].value;

urlString+= 'moduleType=' + moduleType;
  urlString+='&sCapacity=' + sCapacity;
  urlString+= '&losses=' + loss;
    urlString+= '&tilt=' + tilt;
  urlString+='&azimuth=' + azimuth;
  urlString+= '&dcRatio=' + dcRatio;
  urlString+= '&groundRatio=' + groundRatio;
  urlString+= '&invEfficiency=' + invEfficiency;
  urlString+= '&arrayType=' + arrayType;
   
   window.open(urlString);
        
}
function validateForm() {

    urlString= "step-3.html?";
    var sCapacity = document.forms["myForm"]["sCapacity"].value;
    var loss = document.forms["myForm"]["loss"].value;
    var tilt = document.forms["myForm"]["tilt"].value;
    var azimuth = document.forms["myForm"]["azimuth"].value;
    var dcRatio = document.forms["myForm"]["dcRatio"].value;
    var groundRatio = document.forms["myForm"]["groundRatio"].value;
    var invEfficiency = document.forms["myForm"]["invEfficiency"].value;

    urlString+= "moduleType=" + document.getElementById("moduleType");
    urlString+="&sCapacity=" + sCapacity;
    urlString+= "&losses=" + loss;
    urlString+= "&tilt=" + tilt;
    urlString+="&azimuth=" + azimuth;
    urlString+= "&dcRatio=" + dcRatio;
    urlString+= "&groundRatio=" + groundRatio;
    urlString+= "&invEfficiency=" + invEfficiency;
    urlString+= "&arrayType=" + document.getElementById("arrayType");

    var error = "";
    
    if (sCapacity < 0) {
        error += "Capacity must be greater than zero </br>";

    }
    if (loss < 0 || loss > 100) {
        error += "Losses must range between 0 to 100 </br>";


    }
    if (tilt < 0 || tilt > 360) {

        error += "Tilt must be between 0 to 360 </br>";

    }

    if (azimuth < 0 || azimuth > 360) {
        error += "azimuth must be between 0 to 360 </br>";

    }
    if (dcRatio > 1) {
        error += "DC to AC ratio must be less than 1 </br>";

    }
    if (groundRatio > 1) {
        error += "Ground ratio must be less than 1 </br>";

    }
    if (invEfficiency > 100) {
        error += "Inverter efficiency must be less than 100";
    }
    if (error != "") {
        document.getElementById("lblErrorHead").innerHTML = "Please correct the following error and try again";
        document.getElementById("lblError").innerHTML = error;
        return false;
    }
    
}
