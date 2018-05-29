class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.setModel(model);
        this.view.updateUserinfoOnChange((addOrDelete, key, value) => this.userInfoChanged(addOrDelete, key, value));
    }

    userInfoChanged(addOrDelete, key, value) {
        this.model.updateUserInfo(addOrDelete, key, value);
    }

    // Еще что-то придумать при первой загрузке
    pageLoader(hash) {
        switch (hash) {
            case 'Register':
                this.view.renderRegister();
                break;
            case 'Login':
                this.view.renderLogin();
                break;
            case 'Board':
                this.view.renderBoard();
                break;
            case 'Main':
                this.view.renderMain();
                break;
            default:
                this.view.renderMain();
                break;
        }
    }

}