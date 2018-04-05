import Vue from 'vue';
import VueRouter from 'vue-router';
import Nanobar from 'nanobar';

Vue.use(VueRouter);

const nanobar = new Nanobar({
    classname: 'my-class',
    id: 'nanobar',
    target: document.getElementById('what'),
});

const router = new VueRouter({
    routes: [
        {
            path: './',
            component: () => import('./vue/routes/home.vue'),
        },
    ],
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
