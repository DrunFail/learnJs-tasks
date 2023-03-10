const liList = document.querySelectorAll('li');

for (let li of liList) {
    let title = li.firstChild.data;
    console.log(title);
}

console.log(liList.length);