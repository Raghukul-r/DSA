// program to calculate expression entered by user and press Alt key to terminate takin expression

//function to calculate the expression

function calculate(expression) {
  try{
    return eval(expression);
  }catch (error) {
    return 'error';
  }
 
}


//function to read input from user
function readInput() {
  let expression = '';

  while(true){
    const input = prompt('Enter a number or operator and press Alt key to terminate ');
    if(!input) break;
    if (input === 'Alt') break ;
    expression += input;
  }
  return expression;
}

// function for display result

function display() {
  const expression = readInput();

  if (expression !== '') {
    const result = calculate(expression);
    console.log("result: ", result)
  }
}
display();
