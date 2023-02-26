const getMaxSubSum = (arr) => {
    let max = 0;
    let partialSum = 0;

    for (let item of arr) {
        partialSum += item;
        max = Math.max(max, partialSum);
        if (partialSum < 0) partialSum = 0;
    }

    return max;
}