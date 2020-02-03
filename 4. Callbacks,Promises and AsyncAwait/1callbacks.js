function AddTwoNumbers(x, y) {
    // console.log(x + y)
    return x + y
}

function PrintWhoWeAre(x, callback) {
    // Logic to print who we are. bla bla bla .
    return callback(x, 5)
}

console.log(PrintWhoWeAre(10, AddTwoNumbers))