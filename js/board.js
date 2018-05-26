$(document).ready(function () {
    
    var wrapper = $('<div>').attr({'class': 'wrapper'});
    var menu = $('<div>').attr({'class': 'menu'});
    var menu_logoWrapper = $('<a>').attr({'class': 'menu_logoWrapper', 'href':'#'})
        .append("<img class= 'menu_logo' src='https://a.radikal.ru/a09/1805/bc/f1f4fab40a9e.png'/>");

    var menu_leftPart_wrapper = $('<div>').attr({'class': 'menu_leftPart_wrapper'});

    var menu_leftPart = $('<div>').attr({'class': 'menu_leftPart'})
        .append($('<a>').attr({'class': 'leftPart_boardButton'}).html("Доски"));

    var inputWrapper = $('<div>').attr({'class': 'inputWrapper'})
        .append($('<input>').attr({'class': 'leftPart_input', 'type':'text'}));
    
    var leftPart_search_img = $('<span>').attr({'class': 'leftPart_search_img'})
        .append($('<img>').attr({'src': '../image/Search_64px.png', 'alt':'search'}));
    
    var menu_rightPart_wrapper = $('<div>').attr({'class': 'menu_rightPart_wrapper'});
    var menu_rightPart = $('<div>').attr({'class': 'menu_rightPart'});
    
    var rightPart_userLink_1 = $('<a>').attr({'class': 'rightPart_userLink', 'href':'#'}).html('.')
        .append("<img class= 'rightPart_img' src='../image/Plus Math_52px.png'/>");  

    var rightPart_userLink_2 = $('<a>').attr({'class': 'rightPart_userLink', 'href':'#'}).html('.')
        .append("<img class= 'rightPart_img' src='../image/Info_48px.png'/>"); 

    var rightPart_userLink_3 = $('<a>').attr({'class': 'rightPart_userLink', 'href':'#'}).html('.')
        .append("<img class= 'rightPart_img' src='../image/Notification_48px.png'/>");  


    var rightPart_userLink_name = $('<a>').attr({'class': 'rightPart_userLink_name', 'href':'#'}).html('AZ')
    
    $('body').append(wrapper);
    wrapper.append(menu);
    menu.append(menu_logoWrapper);
    menu.append(menu_leftPart_wrapper);
    menu_leftPart_wrapper.append(menu_leftPart);
    menu_leftPart.append(inputWrapper);
    inputWrapper.append(leftPart_search_img);
    menu.append(menu_rightPart_wrapper);
    menu_rightPart_wrapper.append(menu_rightPart);
    menu_rightPart.append(rightPart_userLink_1);
    menu_rightPart.append(rightPart_userLink_2);
    menu_rightPart.append(rightPart_userLink_3);
    menu_rightPart.append(rightPart_userLink_name);
    
    $(".leftPart_input").click(function(e){
        $(e.target).attr({"class":"leftPart_input_click"});
        $(".leftPart_input_click").focus();
    });

});