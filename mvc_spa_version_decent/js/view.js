class View {
    constructor() {
        this.model = null;
    }

    setModel(model) {
        this.model = model;
    }

    //Это вызываем во вью при добавлении или удалении чегото
    updateUserinfoOnChange(onUserinfoChange) {
        this.onUserinfoChange = onUserinfoChange;
    }

    renderMain() {
        document.body.querySelector('#app').innerHTML = '';

        var wrapperMain = $("<div></div>")
            .addClass('wrapperMain');

        var header = $("<div></div>")
            .addClass('header')
            .append("<img class= 'logoMain' src='https://a.radikal.ru/a09/1805/bc/f1f4fab40a9e.png'/>")
            .append("<a href= '#Login' class= 'buttonMain enter'>Войти</a>")
            .append("<a href= '#Register' class= 'buttonMain registrationMain'>Зарегистрироваться</a>");

        var firstBlock = $("<div></div>")
            .addClass('fisrtBlock')
            .append("<img src='https://c.radikal.ru/c34/1805/df/d11db1ba0885.png' alt='blueLogo' class='blueLogo'>")
            .append("<h1 class='h1'>REMIND - это бесплатный, гибкий и наглядный способ организовать что угодно с кем угодно.</h1>")
            .append("<p class='grayText'>Выбросьте длинные цепочки электронных писем, устаревшие таблицы, не такие уж и клейкие стикеры и неуклюжие программы для управления проектами. Remind помогает увидеть все детали проекта с первого взгляда. </p>")
            .append("<a href= '#Register' class= 'buttonMain registrationMain'>Зарегистрироваться бесплатно</a>")
            .append("<a href='#Login' class='grayLink'>Войти...</a>");

        var secondBlock = $("<div></div>")
            .addClass('secondBlock')
            .append("<p class='whiteText'>Это доска Reminder. Это перечень списков, заполненных карточками, используемыми вашей командой или непосредственно вами. </p>")
            .append("<img class= 'boardPicture' src='https://d.radikal.ru/d03/1805/91/c8453f2c17eb.png'/>")
            .append("<p class='whiteText'>Перетаскивайте карточки между списками, чтобы показать прогресс. Добавляйте столько людей, сколько вам надо, и перетаскивайте их на карточки. Добавляйте или меняйте местами списки как вам надо. Remind адаптируется к вашим проектам, команде и рабочему процессу.</p>")
            .append("<p class='whiteText'>Вы увидите все о вашем проекте просто взглянув на доску, и все обновления происходят в реальном времени. Тут нечего настраивать и все происходит мгновенно.</p>");

        var thirdBlock = $("<div></div>")
            .addClass('thirdBlock')
            .append("<img class= 'improvement' src='https://c.radikal.ru/c40/1805/c6/8babc203ea15.png'/>")
            .append("<p class= 'grayText'>Remind никогда не завалит вас функциями, которые вы не будете использовать. Для тех, кто хочет большего, есть улучшения, которые можно включить, например, календарь, старение карточек и голосование. Это помогает предложить больше, не создавая помех для всех.</p>");

        var fourthBlock = $("<div></div>")
            .addClass("fourthBlock")
            .append("<p class= 'whiteText'>Выбросьте стикеры, таблицы, почту и неуклюжие программы для управления проектами и станьте одним из миллионов людей, влюбившихся в Remind. Вы можете добавить сколько угодно много досок и людей в своем бесплатном аккаунте.</p>")
            .append("<a href= '#Register' class= 'buttonMain registrationMain'>Зарегистрироваться бесплатно</a>");

        var footer = $("<div></div>")
            .addClass("footerMain")
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

        $('#app').append(wrapperMain);
        $(wrapperMain).append(header);
        $(wrapperMain).append(firstBlock);
        $(wrapperMain).append(secondBlock);
        $(wrapperMain).append(thirdBlock);
        $(wrapperMain).append(fourthBlock);
        $(wrapperMain).append(footer);
        $(wrapperMain).append(footerLogo);
    }

    renderRegister() {
        document.body.querySelector('#app').innerHTML = '';

        // структура на примере Trello
        let section = document.createElement('section');
        section.className = 'section-register';
        document.body.querySelector('#app').appendChild(section);

        let sectionWrapper = document.createElement('div');
        sectionWrapper.className = 'section-wrapper';
        section.appendChild(sectionWrapper);

        let signUpForm = document.createElement('div');
        signUpForm.id = 'signup-form';
        signUpForm.className = 'signup-form-layout';
        sectionWrapper.appendChild(signUpForm);


        // Тут идет основной блок с содержимым страницы
        let signUpContent = document.createElement('div');
        signUpContent.id = 'signup-password';
        signUpContent.className = 'quick-switch';
        signUpForm.appendChild(signUpContent);

        let h1 = document.createElement('h1');
        h1.textContent = 'Создать аккаунт Remind';
        signUpContent.appendChild(h1);

        let signInAccount = document.createElement('span');
        signInAccount.className = 'sign-in-account';
        signInAccount.innerHTML = 'или <a href="#Login">войдите в свой аккаунт</a>'; // в оригинале '/login' - интересно
        signUpContent.appendChild(signInAccount);


        // как и на Trello - в placeholder стоят несколько "интересных" подсказок
        var randomNames = ['Гермиона Грейнджер', 'Коля и Хабенский', 'Хикару Сулу', 'Дана Скалли', 'Арья Старк', 'Эндер Виггин', 'Туранга Лила', 'Лэндо Калриссиан', 'Вадим Швайко'];
        var randomMails = ['hermione@spew.org.ru', 'calvin@gross.club', 'sulu@starfleet.fed', 'dana.scully@fbi.gov', 'arya.stark@mail.wi.wes', 'ender@battle.edu', 'leela@planetexpress.nnyc', 'calrissian@cloud.ci', 'vadim93.rap@inbox.ru'];

        var number = null;

        function randName() {
            number = Math.floor(Math.random() * 9);
            return randomNames[number];
        }

        function randMail(number) {
            return randomMails[number];
        }

        // Контейнер с формой регистрации и TOS etc
        let signUpContainer = document.createElement('form');
        signUpContainer.id = 'regForm';
        signUpContainer.className = 'sign-up-container';
        signUpContainer.innerHTML = '<label for="name">Имя</label>';
        signUpContainer.innerHTML += `<input type="text" name="name" id="name" tabindex="0" autocorrect="off" spellcheck="false" autocapitalize="off" value="" autofocus="" placeholder="например, ${randName()}">`;
        signUpContainer.innerHTML += '<label for="email">Электронная почта</label>';
        signUpContainer.innerHTML += '<input type="email" name="email" id="email" tabindex="0" autocorrect="off" spellcheck="false" autocapitalize="off" value="" placeholder="например, ' + randMail(number) + '">';
        signUpContainer.innerHTML += '<label for="password">Пароль</label>';
        signUpContainer.innerHTML += '<input type="password" name="password" id="password" tabindex="0" placeholder="например, ••••••••••••">';
        signUpContainer.innerHTML += '<input id="signup" tabindex="0" type="button" class="button button-green" value="Создать новый аккаунт" disabled="">';
        //signUpContainer.innerHTML += '<p style="color: red">Тут мб будет рега через gmail</p>';
        signUpContainer.innerHTML += '<p class="quiet tos"> При создании аккаунта вы принимаете наши <a href="https://trello.com/legal" target="_blank">Условия использования</a> <br> и <a href="https://trello.com/privacy" target="_blank">Политику конфиденциальности</a>. </p>';
        signUpContent.appendChild(signUpContainer);

        // Footer - стили содержимого и в классе quiet, и по тегам и т.д. - см файл css
        let footer = document.createElement('footer');
        footer.className = 'quiet footer-register';
        footer.innerHTML = '<ul> <li><a href="https://trello.com/tour">Тур</a></li> <li><a href="https://trello.com/pricing">Цены</a></li> <li><a href="https://trello.com/platforms">Приложения</a></li> <li><a href="https://trello.com/jobs">Вакансии</a></li> <li><a target="_blank" href="http://blog.trello.com/">Блог</a></li> <li><a href="http://developers.trello.com">Разработчики</a></li> <li><a href="https://trello.com/about">О нас</a></li> <li><a href="http://help.trello.com/">Помощь</a></li> <li><a href="https://trello.com/legal">Юридическая информация</a></li> <li><a href="https://trello.com/privacy">Конфиденциальность</a></li> </ul>';
        footer.innerHTML += '<p> <img class="logo-small" src="https://a.radikal.ru/a09/1805/bc/f1f4fab40a9e.png" width="100"> &nbsp;© 2018. Все права защищены. </p>'
        document.body.querySelector('#app').appendChild(footer);


        // Validation Logic Validation Logic Validation Logic Validation Logic Validation Logic 


        // регулярное выражение для проверки пароля - минимум 1 цифра, 1 большая, 1 мал латинская буква, 8-20 симв
        function passwordRegCheck(value) {
            if (/(?!.*\W)(?!.*[_])(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,20}/.test(value))
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

        // смотрим чтобы такое имя было свободно
        var receivedData = false;
        function nameExistenceCheck(value) {
            if (receivedData)
                return false;
            return true;
        }

        $.validator.addMethod('existingNameCheck', nameExistenceCheck);

        //смотрим что имя состояло из только из латинских символов (бол и мал) и цифр
        function nameRegCheck(value) {
            if (/(?!.*\W)(?!.*[_])[0-9a-zA-Z]/.test(value))
                return true;
            return false;
        }

        $.validator.addMethod('nameCheck', nameRegCheck);

        var debounce = { 'nameTimer': null, 'mailTimer': null, 'passwordTimer': null, 'ajaxTimer': null }; // таймеры для debounce

        var loadTimer = null; // prevents form from validating on load with autofocus
        $(window).on('load', function () { loadTimer = new Date() });

        $('#regForm').validate({
            errorClass: 'error-message',
            errorElement: 'div',
            onfocusout: false, // по дефолту проверка на onfocusout почему-то
            onkeyup: function (element) {

                // Запуск валидации отдельных полей с чем-то вроде debounce
                if (loadTimer && Date.now() - loadTimer < 500) {
                    return;
                } else loadTimer = null;

                if ($(element).attr('name') === 'name') {
                    if (debounce.nameTimer) {
                        clearTimeout(debounce.nameTimer);
                        debounce.nameTimer = null;
                    }
                    // Запрос ajax c таймаутом меньше таймаута проверки, чтобы успеть получить данные => проверка на их основе
                    if (debounce.ajaxTimer) {
                        clearTimeout(debounce.ajaxTimer);
                        debounce.ajaxTimer = null;
                    }
                    debounce.ajaxTimer = setTimeout(function () {
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
                    debounce.emailTimer = setTimeout(function () {
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
                    debounce.passwordTimer = setTimeout(function () {
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
                    maxlength: 25,
                    existingNameCheck: true,
                    nameCheck: true
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
                    maxlength: 'Вы ввели слишком длинное имя..',
                    existingNameCheck: 'Введенное вами имя уже занято!',
                    nameCheck: 'Имя может состоять из латинских символов и цифр'
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
            highlight: function (element) {
                if (!($('.sign-up-container input[type="button"]').attr('disabled'))) {
                    $('.sign-up-container input[type="button"]').attr('disabled', '');
                }
            },
            // если некорректные поля исправлены, кнопка станет активной
            unhighlight: function () {
                if ($('#name').attr('aria-invalid') === 'false' && $('#email').attr('aria-invalid') === 'false' && $('#password').attr('aria-invalid') === 'false') {
                    console.log('yep');
                    $('.sign-up-container input[type="button"]').removeAttr('disabled');
                }
            }
        });

        function loginInfoReady() { // Проверка валидности полей при нажатии на кнопку регистрации
            if ($('#regForm').valid()) {
                let credentials = { 'email': $('#email').val(), 'password': $('#password').val() };
                $.ajax({
                    url: 'http://fe.it-academy.by/AjaxStringStorage2.php',
                    type: 'POST',
                    cache: false,
                    dataType: 'json',
                    data: { f: "INSERT", n: $('#name').val(), v: JSON.stringify(credentials) },
                    success: suc,
                    error: err
                });
            }
        }
        $('.sign-up-container input[type="button"]').on('click', loginInfoReady); // $('#regForm') при нажатии кнопки

        function suc() {
            console.log('success, go to #Login');
            window.location.hash = 'Login';
        }
        function err() {
            console.log('failure');
        }
    }

    renderLogin() {
        document.body.querySelector('#app').innerHTML = '';

        var receivedData = null;

        var formWrapper = $("<div>").attr({ 'class': 'signin-form' })
            .append("<h1>Вход в Remind</h1>")
            .append("<p> <span class = 'createAccount'>или</span> <a href='#Register'>создать аккаунт</a></p>")

        var form = $("<form>").attr({ 'action': '#', 'name': 'signinForm', 'class': 'form', 'id': 'signinForm' })

        var firstLabel = $("<label>").attr('for', 'username').html("Электронная почта <span class = 'userName'>(или имя пользователя)</span>");
        var firstInput = $("<input>").attr({ 'type': 'text', 'id': 'username', 'name': 'username', 'placeholder': 'например, calvin@gross.club' });

        var secondLabel = $("<label>").attr('for', 'loginpassword').html("Пароль");
        var secondInput = $("<input>").attr({ 'type': 'password', 'id': 'password', 'name': 'loginpassword', 'placeholder': 'например, ••••••••••••' });

        var button = $("<input>").attr({ 'type': 'button', 'value': 'Войти', 'class': 'registration button', 'disabled': '' });
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

        $('#app').append(formWrapper);
        $(formWrapper).append(form);
        $(form).append(firstLabel);
        $(form).append(firstInput);

        $(form).append(secondLabel);
        $(form).append(secondInput);

        $(form).append(button);
        $('#app').append(footer);
        $('#app').append(footerLogo);

        document.body.querySelector('input[type="button"]').addEventListener('click', successLogin);

        if (this.model) {
            var coreModel = this.model;
        }

        function successLogin(e) {
            e.preventDefault();
            let promise = new Promise((resolve, reject) => {
                coreModel.receiveUserInfo($('#username').val());
                console.log($('#username').val());
                resolve('about to obtain userinfo');
            });
            promise.then(result => {
                window.location.hash = 'Board';
            });
        }

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
    }

    renderBoard() {
        document.body.querySelector('#app').innerHTML = '';

        var userinfo = {  // объект для хранения данных о пользователе как сюда будут приходить с сервера данные о имени, пароле и т.д. я не знаю.
            username: 'Anton',
            password: 12345,
            email: 'mail@mail.com',
            cards: []  // массив в который будут заносится данные по карточкам из хэша cardInfoTemp
        };

        var cardInfoTemp = {}; // временное хранилище для карточки
        var taskInfoTemp; // временное хранилище для заданий из карточки
        var stage3;
        var stage3Menu;
        var wrapper;

        wrapper = $('<div>').attr({ 'class': 'wrapper', 'id': 'wrapper' });
        $(wrapper).appendTo('#app');
        $('#menuTemplate').tmpl(userinfo).appendTo(wrapper); // Userinfo - это объект с нашими данными.

        $('.stage1').click(function (e) { // Функция отвечающая за действие происходящее при нажатии на поле "Добавить список".
            $('.stage2').show();
            $(".stage2_textinput").focus().val("");
            $('.stage1').hide();
        })

        $(".stage2_button").click(function () { // Функция отвечающая за действие происходящее при нажатии на кнопку "Сохранить". Создает карточку.
            if ($(".stage2_textinput").val()) {
                cardInfoTemp.cardname = $(".stage2_textinput").val(); // Имя карты помещается в cardInfoTemp
                $('.stage2').hide();
                $('.stage1').show();
                stage3 = $('<div>').attr({ 'class': 'stage3' })
                    .append($('<p>').attr({ 'class': 'stage3_header' }).html(cardInfoTemp.cardname))
                    .append($('<textarea>').attr({ 'class': 'stage3_textarea' }))
                    .append($('<input>').attr({ 'type': 'button', 'class': 'stage3_button', 'value': 'Добавить' }).click(function (e) {
                        taskInfoTemp = $(event.target.parentElement).children(".stage3_textarea").val();
                        $('<div>').attr({ 'class': 'stage3_stageCard_text' }).append($('<span>').html(taskInfoTemp))
                            .insertAfter($(event.target.parentElement).children(".stage3_header"));
                        $(".stage3_textarea").hide();
                        $(".stage3_button").hide();
                        $(".stage3_addCard").show();
                        userinfo.cards[0].task = taskInfoTemp; //  Я не знаю как сохранять с новым названием каждый раз.....((( Напишу template, но это нужно будет придумать.
                        cardInfoTemp = {};
                    }))
                    .append($('<p>').attr({ 'class': 'stage3_addCard' }).click(function (e) {
                        $(e.currentTarget).parent().children(".stage3_addCard").hide();
                        $(e.currentTarget).parent().children(".stage3_textarea").show().val("");
                        $(e.currentTarget).parent().children(".stage3_button").show();
                    }).html('Добавить карточку...'))
                    .append($('<p>').attr({ 'class': 'stage3_menu_openButton' }).click(function (e) {
                        let cardButtonLeft = $(event.currentTarget).parent().children('.stage3_menu_openButton').offset().left;
                        let cardParentTop = $(event.currentTarget).parent().offset().top;
                        stage3Menu = $('<div>').attr({ 'class': 'stage3Menu' })
                            .append($('<p>').attr({ 'class': 'stage3Menu_header' }).html('Действия со списком'))
                            .append($('<p>').attr({ 'class': 'stage3Menu_closeButton' }).html('x'))
                            .append($('<hr>').attr({ 'class': 'stage3Menu_line' }))
                            .append($('<p>').attr({ 'class': 'stage3Menu_card' }).html('Добавить цвет...'))
                            .append($('<p>').attr({ 'class': 'stage3Menu_card' }).html('Контейнер для цветов...'))
                            .append($('<p>').attr({ 'class': 'stage3Menu_card' }).html('Назначить уведомление...'))
                            .append($('<p>').attr({ 'class': 'stage3Menu_card' }).html('Удалить...'))
                            .css('left', cardButtonLeft + 'px')
                            .css('top', cardParentTop + 20 + 'px');
                        $('.content').append(stage3Menu);

                        $(".stage3Menu_closeButton").click(function (event) { // Функция закрывающая "Боковое меню"
                            $(event.target.parentElement).remove();
                        });
                    }).html('...'));
                $(stage3).insertBefore('.stage1');
                userinfo.cards.push(cardInfoTemp); // В userinfo.cards - под именем userinfo.cards[0] создается хэш с информацией о карточке. Создав новую карточку, ее имя будет соответсвенно userinfo.cards[1] и так далее до бесконечности. 
                cardInfoTemp = {}; // Временное хранилище очищается для следующего использования.
            } else {
                $('.stage1').show();
                $('.stage2').hide();
            }
        });
    }
}