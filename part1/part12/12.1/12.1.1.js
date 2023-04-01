function* pseudoRandom(seed) {
    let value = seed;

    while (true) {
        value = value * 16807 % 2147483647
        yield value;
    }

};

let generator = pseudoRandom(1);

alert(generator.next().value); // 16807
alert(generator.next().value); // 282475249
alert(generator.next().value); // 1622650073



function pseudoRandom(seed) {
    let value = seed;

    return function () {
        value = value * 16807 % 2147483647;
        return value;
    }
}

let generator = pseudoRandom(1);

alert(generator()); // 16807
alert(generator()); // 282475249
alert(generator()); // 1622650073