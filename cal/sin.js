function replaceArithmeticOperator(str) {
    let operators = ['+', '-', '*', '/'];

    // Check if the string has at least two characters
    if (str.length < 2) {
      return str;
    }

    // Get the last character of the string
    let lastChar = str[str.length - 1];

    // Check if the last character is an arithmetic operator
    if (operators.includes(lastChar)) {
      // Find the index of the last arithmetic operator before the last character
      let lastIndex = -1;

      for (let i = str.length - 2; i >= 0; i--) {
        if (operators.includes(str[i])) {
          lastIndex = i;
          break;
        }
      }

      // Check if a valid arithmetic operator was found
      if (lastIndex !== -1) {
        // Remove the arithmetic operator and replace it with the last character
        str = str.slice(0, lastIndex) + lastChar;
      }
    }

    return str;
  }

  function appendOperator(op) {
    let display = document.getElementById("result_01").value += op;
    let result = replaceArithmeticOperator(display);
    document.getElementById("result_01").value = result;
  }

  function appendNumber(num) {
    document.getElementById("result_01").value += num;
  }
  

  function calculate() {
    var display = document.getElementById("result_01").value;
    var result = eval(display);
    document.getElementById("result_02").value = result;
  }  



////////////////////////////////////////////////////////////////////////////////////
// function appendNumber(num) {
//     document.getElementById('result_01').value += num;
// }


// ////////////////////////////////////////////////////////////////////////////////

// // function appendOperator(op) {
// //     var display = document.getElementById("result_01");
// //     var currentValue = display.value;
  
// //     if (currentValue.endsWith('+')) {
// //       currentValue = currentValue.slice(0, -1) + op;
// //     } else {
// //       currentValue += op;
// //     }
  
// //     display.value = currentValue;
// // }  
  

// ////////////////////////////////////////////////////////////////////////////////
// function replaceArithmeticOperator(str) {
//     var operators = ['+', '-', '*', '/'];
  
//     // Check if the string has at least two characters
//     if (str.length < 2) {
//       return str;
//     }
  
//     // Get the last character of the string
//     var lastChar = str[str.length - 1];
  
//     // Check if the last character is an arithmetic operator
//     if (operators.includes(lastChar)) {
//       // Find the index of the last arithmetic operator before the last character
//       var lastIndex = str.slice(0, -1).lastIndexOfAny(operators);
  
//       // Check if a valid arithmetic operator was found
//       if (lastIndex !== -1) {
//         // Remove the arithmetic operator and replace it with the last character
//         str = str.slice(0, lastIndex) + lastChar;
//       }
//     }
  
//     return str;
// }

// function appendOperator(op) {
//     var display = document.getElementById("result_01").value += op;
//     let result = replaceArithmeticOperator(display);
//     display = result;
// }
  






// function valueOfSin() {
//     appendNumber('Sin(');
//     alert("Please make sure to close the bracket after entering the value.");
// }

// function calculateSin() {
//     let result1 = document.getElementById('result_01').value;
//     let slice = result1.slice(4, -1);
//     let sin = Math.sin(slice * (Math.PI / 180));
//     return sin;
// } 
// function valueOfCos() {
//     appendNumber('Cos(');
//     alert("Please make sure to close the bracket after entering the value.");
// }

// function calculateCos() {
//     let result1 = document.getElementById('result_01').value;
//     let slice = result1.slice(4, -1);
//     let cos = Math.cos(slice * (Math.PI / 180));
//     return cos;
// } 

// function calculate() {
//     let result = document.getElementById('result_01').value;
//     try {
//         let answer = eval(result);
//         document.getElementById('result_02').value = answer;
//     } catch (error) {
//         console.log('error: ' + error);
//         document.getElementById('result_02').value = 'Error';
//     }

//     if (result.includes('Sin(')) {
//             let answer = calculateSin();
//             document.getElementById('result_02').value = answer;
//         }else if (result.includes('Cos(')) {
//             let answer = calculateCos();
//             document.getElementById('result_02').value = answer;  
//     }
// }



// ///////////////////////////////////////////////////////////////////////////////
// function slider1() {
//     var a1 = document.getElementById('01');
//     var a2 = document.getElementById('02');
//     var a3 = document.getElementById('03');
//     var c1 = [a1, a2, a3];
//     var b1 = document.getElementById('1');
//     var b2 = document.getElementById('2');
//     var b3 = document.getElementById('3');
//     var d1 = [b1, b2, b3];

//     if (c1[0].classList.contains('hidden')) {
//         c1[0].classList.remove('hidden');
//         c1[1].classList.remove('hidden');
//         c1[2].classList.remove('hidden');
//         d1[0].classList.add('hidden');
//         d1[1].classList.add('hidden');
//         d1[2].classList.add('hidden');
//     } else {
//         c1[0].classList.add('hidden');
//         c1[1].classList.add('hidden');
//         c1[2].classList.add('hidden');
//         d1[0].classList.remove('hidden');
//         d1[1].classList.remove('hidden');
//         d1[2].classList.remove('hidden');
//     }
// }