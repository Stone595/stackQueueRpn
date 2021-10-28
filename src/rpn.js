
// Write a javascript program that takes in a string that 
// contains a Reverse Polish Notation expression and 
// returns the result of the expression. Use your stack 
// and queue implementation to help you with the algorithm.

// Examples:
//     Input: 4 5 *
//     Result: 20
//     Input: 3 5 10 + * 
//     Result: 45

// Note: the expression will always have space separated 
//       inputs like "4 5 *" rather than "45*" or "4 4*"
 
class Stacky {
    constructor() {
      this.data = [];
    }
    push(element) {
      this.data.push(element);
    }
    pop() {
      return this.data.pop();
    }
    peek() {
      return this.data[this.data.length - 1];
    }
    size() {
      return this.data.length;
    }
  }

function rpn(expression) {
  let stack = new Stacky();
  let op = []
  let expr = expression.split(" ");

  if(expr == null){
    return -1; 
  } else{
    for (let i = 0; i < expr.length; i++) {
      if(expr != NaN && isFinite(expr[i])){
        stack.push(expr[i]);
      } else {
        op.push(expr[i])
      }
    }
  }
  
  let result; 
  
  while(stack.size() > 1){
    let r1 = parseInt(stack.pop());
    let r2 = parseInt(stack.pop()); 
    let operator = op.shift();
    
    switch(operator){
      case '+': 
        result = r1 + r2; 
        stack.push(result)
        break; 
      case '-':
        result = r1 - r2;
        stack.push(result)
        break; 
      case '*':
        result = r1 * r2;
        stack.push(result)
        break; 
      case '/': 
        result = r1 / r2; 
        stack.push(result)
        break;   
    };
  }
    return stack.pop()
  }
  