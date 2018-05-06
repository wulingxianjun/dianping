import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import loginComponent from '../components/login/login.vue'
import regComponent from '../components/reg/reg.vue'
import houtaiComponent from '../components/houtai/houtai.vue'
import getcityComponent from '../components/getcity/getcity.vue'
import tijiaoComponent from '../components/tijiao/tijiao.vue'
import shouyeComponent from '../components/shouye/shouye.vue'
import detailsComponent from '../components/details/details.vue'
import pinglunComponent from '../components/pinglun/pinglun.vue'
import homeComponent from '../components/home/home.vue'
import usersComponent from '../components/users/users.vue'
import storesComponent from '../components/stores/stores.vue'
import staffComponent from '../components/staff/staff.vue'
import commentComponent from '../components/comment/comment.vue'
import transitionComponent from '../components/transition/transition.vue'

const router = new VueRouter({
    routes: [
        {path: '/login', component: loginComponent, name: 'login'},
        {path: '/reg', component: regComponent, name: 'reg'},
        {path: '/houtai', component: houtaiComponent, name: 'houtai'},
        {path: '/getcity', component: getcityComponent, name: 'getcity'},
        {path: '/tijiao/:id', component: tijiaoComponent, name: 'tijiao'},
        {path: '/shouye', component: shouyeComponent, name: 'shouye'},
        {path: '/details/:id', component: detailsComponent, name: 'details'},
        {path: '/pinglun', component: pinglunComponent, name: 'pinglun'},
        {path: '/home', component: homeComponent, name: 'home', children: [
            {path: 'users', component: usersComponent, name: 'users'},
            {path: 'staff', component: staffComponent, name: 'staff'},
            {path: 'stores', component: storesComponent, name: 'stores'},
            {path: 'comment', component: commentComponent, name: 'comment'},
            {path: 'transition', component: transitionComponent, name: 'transition'}
        ]}
    ]
})

export default router;