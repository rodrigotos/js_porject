var saludar = function(param){
  var is_not_number = isNaN(param);
  if(is_not_number)
  {
    param = param.toLowerCase();
  }
  if(param == "dia" || (param))
  {
    console.log("Buenos días");
  }else if(param == "noche"){
    console.log("Buenas noche");
  } else {
    console.log("Hola");
  }
};

var suerte = function(param){
  if(param === 7){
    console.log("Buena Suerte");
  }
  else if(param === "13"){
    console.log("Sentido Pésame");
  }
}


//var i = 1 ;
//while (i <= 10) {
//  console.log(i++);
//}

var a = 5;
var b = 5;
a+=b;
console.log(a);
a===10;
console.log(a);
a===15;
console.log(a);
