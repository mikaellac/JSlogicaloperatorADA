function evaluateLogicOperation(){
  
    let operator = document.getElementById("mySelect").value;
    let operand1 = document.getElementById("input1").value;
    let operand2 = document.getElementById("input2").value;
    const resultSpan= document.getElementById("result1")
    let result
    switch (operator) {
      case ">":
        result = operand1 > operand2;
        break;
      case "<":
          result = operand1 < operand2;
          break;
      case ">=":
        result = operand1 >= operand2;
        break;
      case "<=":
        result = operand1 <= operand2;
        break;
      case "!=":
        result = operand1 != operand2;
        break;
      case "==":
        result = operand1 == operand2;
        break;
      
    }
    result1.innerHTML=result
  
  }

  function setOperand1(){
       const operand1=document.getElementById("input1").value
  }
    
  

