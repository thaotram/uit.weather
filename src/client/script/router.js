import Vue from 'vue';
import VueRouter from 'vue-router';
import Nanobar from 'nanobar';

Vue.use(VueRouter);

const nanobar = new Nanobar({
    classname: 'my-class',
    id: 'nanobar',
    target: document.getElementById('what')
});

const view = (path, folder, name) => ({
    path: path,
    component: require(`./vue/routes/_${folder}/_${name}.vue`).default
});

const router = new VueRouter({
    routes: [
        view('/', 'home', 'home'),

        view('/book', 'book', 'book'),
        view('/book/:title', 'book', 'book.title'),
        
        view('/manager', 'manager', 'manager'),
        view('/manager/keep', 'manager', 'manager.keep'),
        view('/manager/share', 'manager', 'manager.share'),
        view('/manager/onshare', 'manager', 'manager.onshare'),
        
        view('/share', 'share', 'share'),

        view('/user/:name', 'user', 'user.name'),
    ]
});

router.beforeEach((to, from, next) => {
    nanobar.go(70);
    next();
});

router.afterEach(() => {
    const body = document.getElementById('body');
    nanobar.go(100);
    if (body) body.scrollTop = 0;
});

export default router;