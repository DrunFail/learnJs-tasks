let x = +prompt('Введите число');
let n = +prompt('Введите в какую степень возвести(больше 0)');




if (n > 0) {
    alert(pow(x, n));
} else {
    alert('вы ввели некорректное значение');
}





function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}