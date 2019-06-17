import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);


export default new VueRouter({
    routes:[{
            path:"/",
            redirect:"/home"
        },{
            path:'/home',
            component:()=>import('../components/home')
        },{
            path:'/search',
            component:()=>import('../components/search')
        },{
            path:'/detail',
            component:()=>import('../components/detail')
        },{
            path:"/sorting",
            component:()=>import('../components/sorting')
        }]
});
