$(document).ready(function () {
  
    // СОЗДАЕМ ЭЛЕМЕНТЫ
    var content = $('<div>').attr({'class': 'content'});

    var stage1 = $('<div>').attr({'class': 'stage1'})
        .append($('<p>').attr({'class':'stage1_text'}).html('Добавить список...'));
        
    var stage2 = $('<div>').attr({'class': 'stage2'})
        .append($('<input>').attr({'class':'stage2_textinput', 'type':'text', 'value':'Добавить список...'}))
        .append($('<input>').attr({'class':'stage2_button', 'type':'button', 'value':'Сохранить'}));

    var stage3,
        stage3Menu,
        inputStorage,
        textAreaStorage;

    // ДОБАВЛЯЕМ ВСЕ РАНЕЕ СОЗДАННЫЕ ЭЛЕМЕНТЫ
    $(".wrapper").append(content);
    content.append(stage1);
    content.append(stage2);

    // ДЕЙСТВИЕ ПРИ НАЖАТИИ НА ПЕРВОНАЧАЛЬНУЮ КНОПКУ, ДЛЯ ДОБАВЛЕНИЯ СПИСКА. СТАДИЯ 1 (STAGE1)
    stage1.click(function(event){
        stage2.show();
        $(".stage2_textinput").focus().val("")
        stage1.hide();
    })

    // КНОПКА ТРАНСФОРМИРУЕТСЯ В ФОРМУ ДЛЯ ВВОДА НАИМЕНОВАНИЯ И ДОБАВЛЕНИЯ КАРТОЧКИ. СТАДИЯ 2 (STAGE2)
    $(".stage2_button").click(function(){
        if($(".stage2_textinput").val()){
            inputStorage = $(".stage2_textinput").val();
            stage2.hide();
            stage1.show();
    // СОЗДАЕТСЯ И ДОБАВЛЯЕТСЯ ОСНОВНАЯ КАРТОЧКА. СТАДИЯ 3 (STAGE3)
            stage3 = $('<div>').attr({'class': 'stage3'})
                .append($('<p>').attr({'class':'stage3_header'}).html(inputStorage))
                .append($('<textarea>').attr({'class':'stage3_textarea'}))
                .append($('<input>').attr({'type':'button', 'class':'stage3_button', 'value':'Добавить'}))
                .append($('<p>').attr({'class':'stage3_addCard'}).html('Добавить карточку...'))
                .append($('<p>').attr({'class':'stage3_menu_openButton'}).html('...'));
            content.append(stage3);
        } else{
            stage1.show();
            stage2.hide();
        }

    // ДЕЙСТВИЕ ПРИ НАЖАТИИ НА КНОПКУ ДОБАВИТЬ КАРТОЧКУ В STAGE3
        $(".stage3_addCard").click(function(event){      
            $(".stage3_addCard").hide();
            $(".stage3_textarea").show().val("");
            $(".stage3_button").show();
        });

        $(".stage3_button").click(function(event){
            textAreaStorage = $(".stage3_textarea").val();
                $('<p>').attr({'class':'stage3_stageCard_text'}).html(textAreaStorage)
                    .insertAfter($(event.target.parentElement).children(".stage3_header"));
            $(".stage3_textarea").hide();
            $(".stage3_button").hide();
            $(".stage3_addCard").show();
        });

    // СОЗДАНИЕ БОКОВОГО МЕНЮ ПРИ НАЖАТИИ НА ТРОЕТОЧИЕ В ВЕРХНЕМ ПРАВОМ УГЛУ
        $(".stage3_menu_openButton").click(function(e){
            stage3Menu = $('<div>').attr({'class':'stage3Menu'})
                .append($('<p>').attr({'class':'stage3Menu_header'}).html('Действия со списком'))
                .append($('<p>').attr({'class':'stage3Menu_closeButton'}).html('x'))
                .append($('<hr>').attr({'class':'stage3Menu_line'}))
                .append($('<p>').attr({'class':'stage3Menu_card'}).html('Добавить цвет...'))
                .append($('<p>').attr({'class':'stage3Menu_card'}).html('Контейнер для цветов...')) // который будет выезжать
                .append($('<p>').attr({'class':'stage3Menu_card'}).html('Назначить уведомление...'))
                .append($('<p>').attr({'class':'stage3Menu_card'}).html('Удалить...'));

            stage3.append(stage3Menu);
            $(".stage3Menu_closeButton").click(function(){
                $(event.target.parentElement).remove();
                
            });
        });
    });    
});