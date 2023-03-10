let calculator = {
    read() {
        this.a = +prompt('введите первое число', 0);
        this.b = +prompt('введите второе число', 0);
    },

    
    mul() {
        return this.a * this.b;
    },

    sum() {
        return this.a + this.b;
    }

}

    


calculator.read();
alert(calculator.sum());
alert(calculator.mul());