function myFunction(id) {
    document.calculator.result.value += id;
  }
  
function clearScreen() {
  document.calculator.result.value= "";
}

function sqrt(){
    document.calculator.result.value = Math.sqrt(document.calculator.result.value);
}

function dlt(){
    document.calculator.result.value = document.calculator.result.value.slice(0,-1);
}

function calculate() {
  try {
    var input = eval(document.calculator.result.value);
    document.calculator.result.value=input;
  } 
  catch(err){
      document.calculator.result.value="Error";
  }
}