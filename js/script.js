
$(document).ready(function () {

    var wrapper = $("<div></div>")
        .addClass('wrapper');

    var header = $("<div></div>")
        .addClass('header')
        .append("<img class= 'logo' src='https://a.radikal.ru/a09/1805/bc/f1f4fab40a9e.png'/>")
        .append("<a href= 'html/signIn.html' class= 'button enter'>Войти</a>")
        .append("<a href= 'html/register.html' class= 'button registration'>Зарегистрироваться</a>");

    var firstBlock = $("<div></div>")
        .addClass('fisrtBlock')
        .append("<img src='https://c.radikal.ru/c34/1805/df/d11db1ba0885.png' alt='blueLogo' class='blueLogo'>")
        .append("<h1 class='h1'>REMIND - это бесплатный, гибкий и наглядный способ организовать что угодно с кем угодно.</h1>")
        .append("<p class='grayText'>Выбросьте длинные цепочки электронных писем, устаревшие таблицы, не такие уж и клейкие стикеры и неуклюжие программы для управления проектами. Remind помогает увидеть все детали проекта с первого взгляда. </p>")
        .append("<a href= 'html/register.html' class= 'button registration'>Зарегистрироваться это бесплатно</a>")
        .append("<a href='html/signIn.html' class='grayLink'>Войти...</a>");

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
        .append("<p class= 'whiteText'>Выбросьте стикеры, таблицы, почту и неуклюжие программы для управления проектами и станьте одним из миллионов людей, влюбившихся в Trello. Вы можете добавить сколько угодно много досок и людей в своем бесплатном аккаунте.</p>")
        .append("<a href= 'html/register.html' class= 'button registration'>Зарегистрироваться это бесплатно</a>");

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

    $('body').append(wrapper);
    $(wrapper).append(header);
    $(wrapper).append(firstBlock);
    $(wrapper).append(secondBlock);
    $(wrapper).append(thirdBlock);
    $(wrapper).append(fourthBlock);
    $(wrapper).append(footer);
    $(wrapper).append(footerLogo);

});
