import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue'
import UsersList from './pages/UsersList.vue'
import TeamMembers from './components/teams/TeamMembers.vue'
import NotFound from './pages/NotFound.vue'
import TeamsFooter from './pages/TeamsFooter.vue'
import UsersFooter from './pages/UsersFooter.vue'




const routes = [
    {
        path: '/',
        redirect: '/teams'
    },
    {
        path: "/teams",
        name: "teams",
        meta: { needsAuth: true },
        components: { default: TeamsList, footer: TeamsFooter },
        children: [
            {
                name: 'team-members', path: ":teamId", props: true, component: TeamMembers
            }
        ]
    },
    {
        path: "/users",
        name: "Users",
        components: {
            default: UsersList, footer: UsersFooter
        },
        beforeEnter(to, from, next) {
            console.log("users beforeEnter");
            console.log(to, from);
            next();
        }
    },

    {
        path: '/:notFound(.*)', component: NotFound
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active',
    scrollBehavior(_, _2, savedPosition) {
        // console.log(to, from, savedPosition);
        if (savedPosition) {
            return savedPosition;
        }
        return { left: 0, top: 0 }
    }
});

router.beforeEach(function (to, from, next) {
    console.log('Global beforeEach');
    console.log(to, from);
    if (to.meta.needsAuth) {
        console.log('Needs auth!');
        next();
    } else {
        next();
    }

});

router.afterEach(function (to, from) {
    console.log(to, from);
    //sending analytics data 
    //not a control function
    console.log('Global After each');
});

export default router;