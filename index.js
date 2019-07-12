// Code your solutions in this file
function writeCards(array, event) {
    let empty = [];
    for (let i = 0; i < array.length; i++) {
        empty.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);

    }
    return empty;
}


function countdown(number) {
    let n = number
    while (n > -1) {
        console.log(n)
        n -= 1
    }
}
