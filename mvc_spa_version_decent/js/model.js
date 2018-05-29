class Model {
    constructor() {
        this.userinfo = null;
    }

    receiveUserInfo(accountName) {
        var info = null;
        $.ajax({
            url: 'http://fe.it-academy.by/AjaxStringStorage2.php',
            type: 'POST',
            cache: false,
            dataType: 'json',
            data: { f: "READ", n: accountName },
            success: function(data) {
                if (data.result) {
                    this.userinfo = data.result;
                    console.log('model received data: ' + this.userinfo);
                }
            },
            error: function(error) {
                console.log('Произошла ошибка при отправке запроса\n' + error)
            }
        });
    }

    setUserinfo(userinfo) {
        this.userinfo = userinfo;
    }

    getUserInfo() {
        if (userinfo) {
            return this.userinfo;
        }
    }

    updateUserInfo(addOrDelete, key, value) {
        if (this.userinfo) {
            if (addOrDelete) {
                // if такой-то key - в опр место пишем value
            } else {
                // то же самое, только удаляем key + value
            }
        }
    }
}