function Calculator() {

    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };


    this.calculate = function(str){
        let str = str.splice(' ');
        lNum = str[0];
        action = str[1];
        rNum = str[2];

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[op](a, b);

    }

    this.addMethod = function (name, func) {
        this.methods[name] = func;
    };

}