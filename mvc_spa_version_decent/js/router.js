class Router {
    constructor(controller) {
        this.controller = controller;
        this.hash = null;
    }

    pageSwitch(hash) {
        this.controller.pageLoader(hash);
    }

}