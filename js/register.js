'use strict'

// структура на примере Trello
const body = document.body;

const section = document.createElement('section');
body.appendChild(section);

const sectionWrapper = document.createElement('div');
sectionWrapper.className = 'section-wrapper';
section.appendChild(sectionWrapper);

const signUpForm = document.createElement('div');
signUpForm.id = 'signup-form';
signUpForm.className = 'signup-form-layout';
sectionWrapper.appendChild(signUpForm);


// Тут идет основной блок с содержимым страницы
const signUpContent = document.createElement('div');
signUpContent.id = 'signup-password';
signUpContent.className = 'quick-switch';
signUpForm.appendChild(signUpContent);

const h1 = document.createElement('h1');
h1.textContent = 'Создать аккаунт Remind';
signUpContent.appendChild(h1);

const signInAccount = document.createElement('span');
signInAccount.className = 'sign-in-account';
signInAccount.innerHTML = 'или <a href="../html/signIn.html">войдите в свой аккаунт</a>'; // в оригинале '/login' - интересно
signUpContent.appendChild(signInAccount);


// как и на Trello - в placeholder стоят несколько "интересных" подсказок
const randomNames = ['Гермиона Грейнджер', 'Коля и Хабенский', 'Хикару Сулу', 'Дана Скалли', 'Арья Старк', 'Эндер Виггин', 'Туранга Лила', 'Лэндо Калриссиан', 'Вадим Швайко'];
const randomMails = ['hermione@spew.org.ru', 'calvin@gross.club', 'sulu@starfleet.fed', 'dana.scully@fbi.gov', 'arya.stark@mail.wi.wes', 'ender@battle.edu', 'leela@planetexpress.nnyc', 'calrissian@cloud.ci', 'vadim93.rap@inbox.ru'];

var number = null;

function randName() {
    number = Math.floor(Math.random()*9);
    return randomNames[number];
}

function randMail(number) {
    return randomMails[number];
}

// Контейнер с формой регистрации и TOS etc
const signUpContainer = document.createElement('form');
signUpContainer.id = 'regForm';
signUpContainer.className = 'sign-up-container';
signUpContainer.innerHTML = '<label for="name">Имя</label>';
signUpContainer.innerHTML += `<input type="text" name="name" id="name" tabindex="0" autocorrect="off" spellcheck="false" autocapitalize="off" value="" autofocus="" placeholder="например, ${randName()}">`;
signUpContainer.innerHTML += '<label for="email">Электронная почта</label>';
signUpContainer.innerHTML += '<input type="email" name="email" id="email" tabindex="0" autocorrect="off" spellcheck="false" autocapitalize="off" value="" placeholder="например, ' + randMail(number) + '">';
signUpContainer.innerHTML += '<label for="password">Пароль</label>';
signUpContainer.innerHTML += '<input type="password" name="password" id="password" tabindex="0" placeholder="например, ••••••••••••">';
signUpContainer.innerHTML += '<input id="signup" tabindex="0" type="button" class="button button-green" value="Создать новый аккаунт" disabled="">';
signUpContainer.innerHTML += '<p style="color: red">Тут мб будет рега через gmail</p>';
signUpContainer.innerHTML += '<p class="quiet tos"> При создании аккаунта вы принимаете наши <a href="https://trello.com/legal" target="_blank">Условия использования</a> <br> и <a href="https://trello.com/privacy" target="_blank">Политику конфиденциальности</a>. </p>';
signUpContent.appendChild(signUpContainer);

// Footer - стили содержимого и в классе quiet, и по тегам и т.д. - см файл css
const footer = document.createElement('footer');
footer.className = 'quiet';
footer.innerHTML = '<ul> <li><a href="https://trello.com/tour">Тур</a></li> <li><a href="https://trello.com/pricing">Цены</a></li> <li><a href="https://trello.com/platforms">Приложения</a></li> <li><a href="https://trello.com/jobs">Вакансии</a></li> <li><a target="_blank" href="http://blog.trello.com/">Блог</a></li> <li><a href="http://developers.trello.com">Разработчики</a></li> <li><a href="https://trello.com/about">О нас</a></li> <li><a href="http://help.trello.com/">Помощь</a></li> <li><a href="https://trello.com/legal">Юридическая информация</a></li> <li><a href="https://trello.com/privacy">Конфиденциальность</a></li> </ul>';
footer.innerHTML += '<p> <img class="logo-small" src="https://a.radikal.ru/a09/1805/bc/f1f4fab40a9e.png" width="100"> &nbsp;© 2018. Все права защищены. </p>'
body.appendChild(footer);


// Validation Logic Validation Logic Validation Logic Validation Logic Validation Logic 


// регулярное выражение для проверки пароля - минимум 1 цифра, 1 большая, 1 мал латинская буква, 8-20 симв
function passwordRegCheck(value) {
    if (/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,20}/.test(value)) 
        return true;
    return false;
}

$.validator.addMethod('pw', passwordRegCheck);

// регулярное выражение для проверки введенного e-mail
function mailRegCheck(value) {
    if (/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/.test(value))
        return true;
    return false; 
}

$.validator.addMethod('mailcheck', mailRegCheck);

var debounce = {'nameTimer': null, 'mailTimer': null, 'passwordTimer': null}; // таймеры для debounce

var loadTimer = null; // prevents form from validating on load with autofocus
$(window).on('load', function() { loadTimer = new Date() })

$('#regForm').validate({
    errorClass: 'error-message',
    errorElement: 'div',
    onfocusout: false, // по дефолту проверка на onfocusout почему-то
    onkeyup: function(element) {

        // Запуск валидации отдельных полей с чем-то вроде debounce
        if (loadTimer && Date.now() - loadTimer < 500) {
            return;
        } else loadTimer = null;

        if ($(element).attr('name') === 'name') {
            if (debounce.nameTimer) {
                clearTimeout(debounce.nameTimer);
                debounce.nameTimer = null;
            }
            debounce.nameTimer = setTimeout(function() {
                $(element).valid();
                if ($('#name').attr('aria-invalid') === 'false' && $('#email').attr('aria-invalid') === 'false' && $('#password').attr('aria-invalid') === 'false') {
                    console.log('yep');
                    $('.sign-up-container input[type="button"]').removeAttr('disabled');
                }
            }, 750);
        }

        if ($(element).attr('name') === 'email') {
            if (debounce.emailTimer) {
                clearTimeout(debounce.emailTimer);
                debounce.emailTimer = null;
            }
            debounce.emailTimer = setTimeout(function() {
                $(element).valid();
                if ($('#name').attr('aria-invalid') === 'false' && $('#email').attr('aria-invalid') === 'false' && $('#password').attr('aria-invalid') === 'false') {
                    console.log('yep');
                    $('.sign-up-container input[type="button"]').removeAttr('disabled');
                }
            }, 750);
        }

        if ($(element).attr('name') === 'password') {
            if (debounce.passwordTimer) {
                clearTimeout(debounce.passwordTimer);
                debounce.passwordTimer = null;
            }
            debounce.passwordTimer = setTimeout(function() {
                $(element).valid();
                if ($('#name').attr('aria-invalid') === 'false' && $('#email').attr('aria-invalid') === 'false' && $('#password').attr('aria-invalid') === 'false') {
                    console.log('yep');
                    $('.sign-up-container input[type="button"]').removeAttr('disabled');
                }
            }, 750);
        }
    },
    rules: {
        name: {
            required: true,
            minlength: 4,
            maxlength: 25
        },
        email: {
            required: true,
            mailcheck: true
        },
        password: {
            required: true,
            pw: true
        }
    },
    messages: {
        name: {
            required: 'Придумайте себе псевдоним!',
            minlength: 'Вы ввели слишком короткое имя..',
            maxlength: 'Вы ввели слишком длинное имя..'
        },
        email: {
            required: 'С регистрацией, но без СМС',
            mailcheck: 'Это не похоже на адрес электронной почты..',
            email: 'Это не похоже на адрес электронной почты..'
        },
        password: {
            required: 'Введите самый секретный пароль',
            pw: 'Используйте от 8 до 20 символов 0-9, a-z, A-Z'
        }
    },
    // не дает повесить класс ошибки на инпут и может выключать кнопку при вводе неверной инфы
    highlight: function(element) {
        if (!($('.sign-up-container input[type="button"]').attr('disabled'))) {
            $('.sign-up-container input[type="button"]').attr('disabled', '');
        }        
    },
    // если некорректные поля исправлены, кнопка станет активной
    unhighlight: function() {  
        if ($('#name').attr('aria-invalid') === 'false' && $('#email').attr('aria-invalid') === 'false' && $('#password').attr('aria-invalid') === 'false') {
            console.log('yep');
            $('.sign-up-container input[type="button"]').removeAttr('disabled');
        }
    }
});

function loginInfoReady() { // Проверка валидности полей при нажатии на кнопку регистрации
    if ($('#regForm').valid()) {
        console.log('Можем писать данные в локалку или на сервер');
        console.log(`Имя: ${$('.sign-up-container input[name="name"]').val()}\n    Мыло: ${$('.sign-up-container input[name="email"]').val()}\n        Пароль: ${$('.sign-up-container input[name="password"]').val()}`);
    }
}
$('.sign-up-container input[type="button"]').on('click', loginInfoReady); // $('#regForm') при нажатии кнопки


