import Vue from 'vue'
import Router from 'vue-router'
import Home from '../view/home.vue';
import Login from '../view/login.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: "Home",
            component: Home
        },
        {
            path: '/login',
            name: "Login",
            component: Login
        },
        {
            path: '*',
            redirect:'home'
        }
    ]
})
