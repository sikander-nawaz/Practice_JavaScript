// Write a js program to count a minimum number of notes in a given amount.

// SOLUTION
// VALUES 
let amount = 2504;
let note_5000 = 0;
let note_1000 = 0;
let note_500 = 0;
let note_100 = 0;
let note_50 = 0;
let note_10 = 0;

// USING ELSE_IF CONDITION
while (amount >= 10) {
    if (amount >= 5000){
        note_5000 += 1
        amount -= 5000
    }else if(amount >= 1000 && amount < 5000){
        note_1000 += 1
        amount -= 1000
    }else if(amount >= 500 && amount < 1000){
        note_500 += 1
        amount -= 500
    } else if (amount >= 100 && amount < 500) {
        note_100 += 1
        amount -= 100
    }else if (amount >= 50 && amount < 100) {
        note_50 += 1
        amount -= 50
    }else if (amount >= 10 && amount < 50) {
        note_10 += 1
        amount -= 10
    }
}
console.log(`Five Thousand = ${note_5000}`);
console.log(`One Thousand = ${note_1000}`);
console.log(`Five Hunderd = ${note_500}`);
console.log(`One Hunderd = ${note_100}`);
console.log(`Fifty = ${note_50}`);
console.log(`Ten = ${note_10}`);