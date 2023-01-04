"use strict";
let total = 200;
total = '4000';
function isNumber(value) {
    if (typeof value === "number") {
        return true;
    }
    else {
        return false;
    }
}
console.log(isNumber('200'));
