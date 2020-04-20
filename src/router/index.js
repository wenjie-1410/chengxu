import Vue from 'vue'
import Router from 'vue-router'
import one from "../components/one.vue"
import two from "../components/two.vue"
import three from "../components/three.vue"
import four from "../components/four.vue"
import five from "../components/five.vue"
import A from "../components/A.vue"
import B from "../components/B.vue"
import C from "../components/C.vue"
import D from "../components/D.vue"
import E from "../components/E.vue"
import F from "../components/F.vue"
import sou from "../components/sou.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/sou',
      name: 'sou',
      component: sou,
    },
    {
      path: '/one',
      name: 'one',
      component: one,
    
      children: [
        {
          path: 'two',
          name: 'two',
          component: two,
          children: [
            {
              path: 'A',
              name: 'A',
              component: A,
            },
            {
              path: 'B',
              name: 'B',
              component: B,
            },
            {
              path: 'C',
              name: 'C',
              component: C,
            },
            {
              path: 'D',
              name: 'D',
              component: D,
            },
            {
              path: 'E',
              name: 'E',
              component: E,
            },
            {
              path: 'F',
              name: 'F',
              component: F,
            },
            {
              path: '',
              redirect: "/one/two/A"
            }

          ]
        },
        {
          path: 'three',
          name: 'three',
          component: three,
        },
        {
          path: 'four',
          name: 'fout',
          component: four,
        },
        {
          path: 'five',
          name: 'five',
          component: five,
        },
        {
          path: '',
          redirect: "/one/two",
        },
      ]
    },
    {
      path: '/',
      redirect: "one",
    },
  ]
})
