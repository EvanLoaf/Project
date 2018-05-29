var receivedData;

$(document).ready(function () {
    var formWrapper = $("<div>").attr({ 'class': 'signin-form' })
        .append("<h1>Вход в Remind</h1>")
        .append("<p> <span class = 'createAccount'>или</span> <a href='../html/register.html'>создать аккаунт</a></p>")

    var form = $("<form>").attr({ 'action': '#', 'name': 'signinForm', 'class': 'form', 'id': 'signinForm' })

    var firstLabel = $("<label>").attr('for', 'username').html("Электронная почта <span class = 'userName'>(или имя пользователя)</span>");
    var firstInput = $("<input>").attr({ 'type': 'text', 'id': 'username', 'name': 'username', 'placeholder': 'например, calvin@gross.club' });

    var secondLabel = $("<label>").attr('for', 'loginpassword').html("Пароль");
    var secondInput = $("<input>").attr({ 'type': 'password', 'id': 'password', 'name': 'loginpassword', 'placeholder': 'например, ••••••••••••' });

    var button = $("<input>").attr({ 'type': 'button', 'onclick': 'login(event)', 'value': 'Войти', 'class': 'registration button', 'disabled': '' });
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

    $(document.body).append(formWrapper);
    $(formWrapper).append(form);
    $(form).append(firstLabel);
    $(form).append(firstInput);

    $(form).append(secondLabel);
    $(form).append(secondInput);

    $(form).append(button);
    $(document.body).append(footer);
    $(document.body).append(footerLogo);

    // смотрим чтобы такое имя было свободно
    //var receivedData = false;
    function nameExistenceCheck(value) {
        if (receivedData)
            return true;
        return false;
    }

    $.validator.addMethod('existingNameCheck', nameExistenceCheck);

    //смотрим чтоб пароль был верным
    var receivedPassword = null;
    function passwordMatchCheck(value) {
        console.log(receivedPassword);
        if (receivedPassword === value)
            return true;
        return false;
    }

    $.validator.addMethod('pwMatch', passwordMatchCheck);

    var debounce = { 'nameTimer': null, 'mailTimer': null, 'passwordTimer': null, 'ajaxName': null, 'ajaxPassword': null }; // таймеры для debounce

    var loadTimer = null; // prevents form from validating on load with autofocus
    $(window).on('load', function () { loadTimer = new Date() });

    $('#signinForm').validate({
        errorClass: 'error-message-login',
        errorElement: 'div',
        onfocusout: false, // по дефолту проверка на onfocusout почему-то
        onkeyup: function (element) {

            // Запуск валидации отдельных полей с чем-то вроде debounce
            if (loadTimer && Date.now() - loadTimer < 500) {
                return;
            } else loadTimer = null;

            if ($(element).attr('name') === 'username') {
                if (debounce.nameTimer) {
                    clearTimeout(debounce.nameTimer);
                    debounce.nameTimer = null;
                }
                // Запрос ajax c таймаутом меньше таймаута проверки, чтобы успеть получить данные => проверка на их основе
                if (debounce.ajaxName) {
                    clearTimeout(debounce.ajaxName);
                    debounce.ajaxName = null;
                }
                debounce.ajaxName = setTimeout(function () {
                    $.ajax({
                        url: 'http://fe.it-academy.by/AjaxStringStorage2.php',
                        type: 'POST',
                        cache: false,
                        dataType: 'json',
                        data: { f: "READ", n: element.value },
                        success: nameSuccess
                    });
                    function nameSuccess(data) {
                        receivedData = data.result;
                    }
                }, 400);
                debounce.nameTimer = setTimeout(function () {
                    $(element).valid();
                    if ($('#username').attr('aria-invalid') === 'false' && $('#password').attr('aria-invalid') === 'false') {
                        console.log('yep');
                        $('input[type="button"]').removeAttr('disabled');
                    }
                }, 750);
            }

            if ($(element).attr('name') === 'loginpassword') {
                if (receivedData) {
                    if (debounce.passwordTimer) {
                        clearTimeout(debounce.passwordTimer);
                        debounce.passwordTimer = null;
                    }
                    if (debounce.ajaxPassword) {
                        clearTimeout(debounce.ajaxPassword);
                        debounce.ajaxPassword = null;
                    }
                    debounce.ajaxPassword = setTimeout(function () {
                        $.ajax({
                            url: 'http://fe.it-academy.by/AjaxStringStorage2.php',
                            type: 'POST',
                            cache: false,
                            dataType: 'json',
                            data: { f: "READ", n: $('#username').val() },
                            success: passwordSuccess
                        });
                        function passwordSuccess(data) {
                            let info = JSON.parse(data.result);
                            receivedPassword = info.password;
                        }
                    }, 400);
                    debounce.passwordTimer = setTimeout(function () {
                        $(element).valid();
                        if ($('#username').attr('aria-invalid') === 'false' && $('#password').attr('aria-invalid') === 'false') {
                            console.log('yep');
                            $('input[type="button"]').removeAttr('disabled');
                        }
                    }, 750);
                }
            }
        },
        rules: {
            username: {
                required: true,
                existingNameCheck: true
            },
            loginpassword: {
                required: true,
                pwMatch: true
            }
        },
        messages: {
            username: {
                required: 'Введите адрес своей почты или логин',
                existingNameCheck: 'Такого пользователя не существует..',
            },
            loginpassword: {
                required: 'Вы не ввели пароль..',
                pwMatch: 'Введенный пароль неверен!'
            }
        },
        // не дает повесить класс ошибки на инпут и может выключать кнопку при вводе неверной инфы
        highlight: function (element) {
            if (!($('input[type="button"]').attr('disabled'))) {
                $('input[type="button"]').attr('disabled', '');
            }
        },
        // если некорректные поля исправлены, кнопка станет активной
        unhighlight: function (element) {
            if ($('#username').attr('aria-invalid') === 'false' && $('#password').attr('aria-invalid') === 'false') {
                console.log('yep');
                $('input[type="button"]').removeAttr('disabled');
            }
        }
    });
    
});

// при удачном входе в аккаунт
var userData = null;
function login(e) {
    e.preventDefault();
    userData = JSON.parse(receivedData);
    console.log(userData);
}

