$(document).ready(function () {
    var formWrapper = $("<div>").attr({ 'class': 'signin-form' })
        .append("<h1>Вход в Remind</h1>")
        .append("<p> <span class = 'createAccount'>or</span> <a href='../html/register.html'>создать аккаунт</a></p>")

    var form = $("<form>").attr({ 'action': '#', 'name': 'signinForm', 'class': 'form' })

    var firstInputWrapper = $("<div>").attr({ 'class': 'firstInputWrapper' });
    var firstLabel = $("<label>").html("Электронная почта <span class = 'userName'>(или имя пользователя)</span>");
    var firstInput = $("<input>").attr({ 'type': 'text', 'id': 'username', 'name': 'username', 'placeholder': 'например, calvin@gross.club' });

    var secondInputWrapper = $("<div>").attr({ 'class': 'secondInputWrapper' });
    var secondLabel = $("<label>").html("Пароль");
    var secondInput = $("<input>").attr({ 'type': 'password', 'id': 'password', 'name': 'password', 'placeholder': 'например, 123456' });

    var button = $("<input>").attr({ 'type': 'submit', 'onclick': 'login(event)', 'value': 'Войти', 'class': 'registration button' });
    var br = $("<br>");

    var footer = $("<div></div>")
        .addClass("footer")
        .append("<a href = 'https://trello.com/tour' class = 'footerLink'>Тур</a>")
        .append("<a href = 'https://trello.com/pricing' class = 'footerLink'>Цены</a>")
        .append("<a href = 'https://trello.com/platforms' class = 'footerLink'>Приложения</a>")
        .append("<a href = 'https://trello.com/jobs' class = 'footerLink'>Вакансии</a>")
        .append("<a href = 'http://blog.trello.com/' class = 'footerLink'>Блог</a>")
        .append("<a href = 'http://developers.trello.com' class = 'footerLink'>Разработчики</a>")
        .append("<a href = 'https://trello.com/about' class = 'footerLink'>О нас</a>")
        .append("<a href = 'http://help.trello.com/' class = 'footerLink'>Помощь</a>")
        .append("<a href = 'https://trello.com/legal' class = 'footerLink'>Юридическая информация</a>")
        .append("<a href = 'https://trello.com/privacy' class = 'footerLink'>Конфиденциальность</a>")

    var footerLogo = $("<p></p>")
        .addClass("footerLogo")
        .append("<img src='https://a.radikal.ru/a09/1805/bc/f1f4fab40a9e.png' width='100'> ")
        .append("&nbsp;© 2018. Все права защищены.");

    $('body').append(formWrapper);
    $(formWrapper).append(form);
    $(form).append(firstInputWrapper);
    $(firstInputWrapper).append(firstLabel);
    $(firstLabel).append(firstInput);

    $(form).append(secondInputWrapper);
    $(secondInputWrapper).append(secondLabel);
    $(secondLabel).append(secondInput);

    $(form).append(button);
    $('body').append(footer);
    $('body').append(footerLogo);
});


function login(e) {
    e.preventDefault();
    $.ajax({
        url: 'http://fe.it-academy.by/AjaxStringStorage2.php',
        type: 'POST',
        cache: false,
        dataType: 'json',
        data: { f: "READ", n: $('#username').val() },
        success: sucLog,
        error: errLog
    });
}

function sucLog(data) {
    if (data.result) {
        let info = JSON.parse(data.result);
        console.log(info.password);
        if ($('#password').val() === info.password) {
            console.log('krasiva, brat');
            console.log(info.email);
            console.log(info.password);
        } else console.log('wrong password');

    } else console.log('такого пользователя не существует');
}
function errLog() {
    console.log('govno, brat');
}