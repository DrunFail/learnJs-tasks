const readNumber = () => {

    let number;
    
    do {
        number = prompt('введите число');
    } while (!isFinite(number));

    if (!number) return null;

    return +number;
}