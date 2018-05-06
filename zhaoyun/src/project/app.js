// import './js/bootstrap-3.3.7-dist/css/bootstrap.min.css';
// import './js/bootstrap-3.3.7-dist/js/bootstrap.min';
import $ from 'jquery';
import Vue from 'vue';

import router from './router/router';

import appComponent from './components/app/app.vue';

new Vue({
    el: '#app',
    router,
    render: h => h(appComponent)
})