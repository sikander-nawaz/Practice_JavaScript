                    // Function to Enter Number.
function appendNumber(num) {
    document.getElementById("result_01").value += num;
}
                    
                    // Function to Perform Operator. 
function appendOperator(op) {
    document.getElementById("result_01").value += op;
}

                    // Function to Clear Screen.
function clearResult() {
    document.getElementsById("result_01").value = result_01.value.toString().slice(0,0);
}

                    // Functions to Calculate Result (Eval).
function calculate() {
    let result = document.getElementById("result_01").value;
    
    try {
        let answer = eval(result);
        document.getElementById("result_02").value = answer;
    } catch (error) {
        console.log("error : " + error);
        document.getElementById("result").value = "Masti kr rya";
    }

}