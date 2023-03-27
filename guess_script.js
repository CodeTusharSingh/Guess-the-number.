"use strict";
let x = Math.floor(Math.random() * 10) + 1;
console.log(x);
let score = 0;
const a = ['red', 'blue', 'yellow', 'green', 'white'];
let index = 0;
document.getElementById("cbutton").addEventListener('click', function onclick() {
    document.getElementById("cbutton").style.backgroundColor = a[index];
    index = index >= a.length - 1 ? 0 : index + 1;
});
function check() {
    const c = document.getElementById("numid").value;
    console.log(c);
    if (c == x) {
        document.getElementById("question").innerHTML = x;
        document.body.style.backgroundColor = 'green';
        score++;
        document.getElementById("snum").innerHTML = score;
        x = Math.floor(Math.random() * 10) + 1;
        console.log(x)
    } else {
        document.getElementById("question").innerHTML = "❌";
        document.body.style.backgroundColor = 'crimson';
        score--;
        document.getElementById("snum").innerHTML = score;
    }
}