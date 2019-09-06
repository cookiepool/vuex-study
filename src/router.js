import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SimpleStore from './views/simple_store/SimpleParent';
import FirstExp from './views/first_exp/FirstExp.vue';
import MapState from './views/mapstate/MapState.vue';
import Getter from './views/getter/Getter.vue';
import MapGetters from './views/mapgetters/MapGetter.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
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
