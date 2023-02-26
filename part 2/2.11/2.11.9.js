let login = prompt('Кто там?');




if (login == 'Админ') {
    let password = prompt('Введите пароль');
    if (password == 'Я Главный') {
        alert('Здравствуйте!');
    } else if (password == null) {
        alert('cancel');
    } else {
        alert('Неверный пароль')
    }
} else if (!login) {
    alert('cancel');
} else {
    alert('dont know');
}