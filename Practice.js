    // Function Generator

function* math(num1, num2) {
    yield num1 + num2;

    yield num1 - num2;

    yield num1 * num2;
}

const object = Array.from(math(10, 5));

// print value of second yield.
console.log(object[1]);            // (5)