let account = new Map();// добавляются значения при регистрации
account.set("email1", "pass1");//тестовое значение

function signIn() {
    let username = document.signinForm.username.value;
    let password = document.signinForm.password.value;

    let storedPassword = account.get(username);

    if (storedPassword === password) {
        alert('Вы зашли на новую страницу');
    } else {
        alert("Вы ввели неверный логин или пароль");
    }
}