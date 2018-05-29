(function () {
    const router = new Router(new Controller(new Model(), new View()));
    router
    window.onhashchange = function () {
        let hash = window.location.hash.substr(1);
        router.pageSwitch(hash);
        console.log('Current page: ' + hash);
    }
    const pages = { 'Main': 1, 'Login': 1, 'Register': 1, 'Board': 1 }
    window.onload = function () {
        if (pages[window.location.hash.substr(1)]) {
            let hash = window.location.hash.substr(1);
            router.pageSwitch(hash);
            console.log('Current page: ' + hash);
        } else {
            //router.pageSwitch('Main');
            window.location.hash = '#Main';
            console.log('Current page: ' + 'Main');
        }
    }
})();


