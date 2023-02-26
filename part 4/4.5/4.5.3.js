function Accumulator(initialState) {
    this.value = initialState;

    this.read = function () {
        this.value += +prompt('Сколько нужно прибавить?');
    };

}


let accum = new Accumulator(15);