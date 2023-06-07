function appendNumber(num) {
    document.getElementById('result_01').value += num;
}

function appendOperator(op) {
    document.getElementById('result_01').value += op;
}

function valueOfSin() {
    appendNumber('Sin(');
    alert("Please make sure to close the bracket after entering the value.");
}

function calculateSin() {
    let result1 = document.getElementById('result_01').value;
    let slice = result1.slice(4, -1);
    let sin = Math.sin(slice * (Math.PI / 180));
    return sin;
} 
function valueOfCos() {
    appendNumber('Cos(');
    alert("Please make sure to close the bracket after entering the value.");
}

function calculateCos() {
    let result1 = document.getElementById('result_01').value;
    let slice = result1.slice(4, -1);
    let cos = Math.cos(slice * (Math.PI / 180));
    return cos;
} 

function calculate() {
    let result = document.getElementById('result_01').value;
    try {
        let answer = eval(result);
        document.getElementById('result_02').value = answer;
    } catch (error) {
        console.log('error: ' + error);
        document.getElementById('result_02').value = 'Error';
    }

    if (result.includes('Sin(')) {
            let answer = calculateSin();
            document.getElementById('result_02').value = answer;
        }else if (result.includes('Cos(')) {
            let answer = calculateCos();
            document.getElementById('result_02').value = answer;  
    }
}
