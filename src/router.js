import Vue from 'vue';
import VueRouter from "vue-router";
import App from "@/App";

Vue.use(VueRouter);

export default new VueRouter(
    {
        mode: 'history',
        routes: [
            {
                path: '/click',
                component: () => import('./components/forms/Click')
            },
            {
                path: '/colors',
                component: () => import('./components/forms/Colors')
            },
        ]
    }
)