let arr = [1, 2, 3, 4, 5, 6, 7];


function inBetween(a, b) {
    return function (elem) {
        return (elem >= a && elem <= b);
    };
    
}

function inArray(arr2) {
    return function (elem) {
        return arr2.includes(elem);
    }
}



