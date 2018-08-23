import Vue from vue
import VueRouter from 'vue-router'
import Category  from ' components/category.vue'
import Contact  from ' components/contact.vue'
Vue.use(VueRouter)
export defalt new RVueouter({
routes:[
{ 
 path:'/'
 name:'Category'
 component: Category
},
{
 path:'/contact'
 name:'Contact'
 component: Contact
}

]

})