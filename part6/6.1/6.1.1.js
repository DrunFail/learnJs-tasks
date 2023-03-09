
//рекурсия
function sumTo(n) {
    if (n == 1) {
        return n
    } else {
        return n + sumTo(n - 1);
    }
}


//цикл
function sumTo(n) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += i;
    }
    return result;
}


//арифм. прогрессия
function sumTo(n) {
    let result = (1 + n) * n / 2;
    return result;
}