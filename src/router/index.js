import Vue from 'vue';
import VueRouter from 'vue-router';
import Contacts from '../components/Contacts.vue';
import NewContact from '../components/NewContact.vue';
import Contact from '../components/Contact.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/contacts',
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts,
    },
    {
      path: '/contacts/new',
      name: 'NewContact',
      component: NewContact,
    },
    {
      path: '/contacts/:id',
      name: 'Contact',
      component: Contact,
    },
  ],
});
