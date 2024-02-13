import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/teams'
        },
        {
            path:'/teams' ,
            component: TeamsList
        },
        {
            path:'/users' ,
            component: UsersList
        },
        {
            path:'/teams/:teamId',
            component:TeamMembers
        }
    ]
});

router.beforeEach(function(to,from, next){
    console.log('Global before each')
    console.log(to, from);
    next();
});

const app = createApp(App);

app.use(router);

app.mount('#app');
