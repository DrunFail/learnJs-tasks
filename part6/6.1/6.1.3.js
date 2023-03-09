
//повесит браузер

function fib(n) {
    if (n < 3) return 1;
    return fib(n - 1) + fib(n - 2);

}

//dinamic

function fib(n) {
    let a = 1;
    let b = 2;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}