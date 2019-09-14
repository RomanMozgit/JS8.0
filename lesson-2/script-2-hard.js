let num = 266219;

function getMultiplicationNumber(num) {
    let mul = 1, tmp;
    while (num) {
        tmp = num % 10;
        num = (num - tmp) / 10;
        mul *= tmp;
    }
    return mul;
}

num = getMultiplicationNumber(num);
num = num * num * num;

num = String(num).slice(0,2);
alert(num);
