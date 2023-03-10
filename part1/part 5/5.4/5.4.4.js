const sumInput = () => {
    let nums = [];

    while (true) {

        let value = prompt("Введите число", 0);

        if (value === "" || value === null || !isFinite(value)) break;

        nums.push(+value);
    }

    let sum = 0;
    for (let number of nums) {
        sum += number;
    }
    return sum;
}
