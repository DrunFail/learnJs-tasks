function Calculator() {

    this.read = function () {
        this.a = +prompt('введите первое число');
        this.b = +prompt('введите второе число');
    };

    this.sum = function () {
        return this.a + this.b;
    };

    this.mul = function () {
        return this.a * this.b;
    };
}