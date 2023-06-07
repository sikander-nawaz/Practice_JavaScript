let result1 = 'sin(5666)';
let slice = result1.slice(4, -1);
console.log(slice);

// let result1 = 'sin(56)';
// let slice = (result1.slice(4, 6)) * (Math.PI / 180);
// let calSin = Math.sin(slice);
// console.log(calSin);


// function appendNumber(num) {
//     document.getElementById('result_01').value += num;
// }

// function appendOperator(op) {
//     document.getElementById('result_01').value += op;
// }

// function calculate() {
//     let result = document.getElementById('result_01').value;
//     try {
//         let answer = eval(result);
//         document.getElementById('result_02').value = answer;
//     } catch (error) {
//         console.log('error : ' + error);
//         document.getElementById('result_02').value = Error;
//     }

//     if (result = Sin(num)) {
//         try {
//             let answer = eval(calculateSin());
//             document.getElementById('result_02').value = answer;
//         } catch (error) {
//             console.log('error : ' + error);
//             document.getElementById('result_02').value = Error;
//         }
//     }
// }

// function calculateSin() {
//     let result1 = document.getElementById('result_01').value;
//     let result2 = document.getElementById('result_02').value;
  
//     // Extracting the angle from result_01
//     let angle = result1.slice(4, 6);
  
//     // Calculating the sine
//     let sinValue = Math.sin(angle * (Math.PI / 180));
  
//     // Updating result_02 with the calculated sine value
//     result2 = sinValue;
// }