//рекурсия

function printList(list) {
    console.log(list.value);

    if (list.next) {
        printList(list.next);
    }
    
}

// цикл

const printList = (list) => {
    let tmp = list;

    while (tmp) {
        console.log(tmp.value);
        tmp = tmp.next;
    }
}