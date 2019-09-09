import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SimpleStore from './views/simple_store/SimpleParent';
import FirstExp from './views/first_exp/FirstExp.vue';
import MapState from './views/mapstate/MapState.vue';
import Getter from './views/getter/Getter.vue';
import MapGetters from './views/mapgetters/MapGetter.vue';
import Mutation from './views/mutation/Mutation.vue';
import Action from './views/action/Action.vue';
import Module from './views/module/Module.vue';
import Namespace from './views/module/NameSpace.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home/firstexp'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/home/firstexp',
          name: 'firstexp',
          component: FirstExp
        },
        {
          path: '/home/mapstate',
          name: 'mapstate',
          component: MapState
        },
        {
          path: '/home/getter',
          name: 'getter',
          component: Getter
        },
        {
          path: '/home/mapgetters',
          name: 'mapgetters',
          component: MapGetters
        },
        {
          path: '/home/mutation',
          name: 'mutation',
          component: Mutation
        },
        {
          path: '/home/action',
          name: 'action',
          component: Action
        },
        {
          path: '/home/module',
          name: 'module',
          component: Module
        },
        {
          path: '/home/namespace',
          name: 'namespace',
          component: Namespace
        }
      ]
    },
    {
      path: '/simplestore',
      name: 'simplestore',
      component: SimpleStore
    }
  ]
})
