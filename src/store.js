import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';
import axios from 'axios';

const apiServer = 'http://127.0.0.1:3000';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contacts: [],
  },
  getters: {
    contacts: state => _.sortBy(state.contacts, ['lastName', 'firstName']),
  },
  /* eslint-disable no-param-reassign */
  mutations: {
    SET_CONTACTS(state, contacts) {
      state.contacts = contacts;
    },
    ADD_CONTACT(state, newContact) {
      state.contacts.push(newContact);
    },
    UPDATE_CONTACT(state, updatedContact) {
      const i = _.findIndex(state.contacts, { id: updatedContact.id });
      state.contacts.splice(i, 1, updatedContact);
    },
    DELETE_CONTACT(state, contactId) {
      const i = _.findIndex(state.contacts, { id: contactId });
      state.contacts.splice(i, 1);
    },
  },
  /* eslint-enable no-param-reassign */
  actions: {
    fetchContacts(context) {
      axios
        .get(`${apiServer}/contacts`)
        .then((res) => {
          context.commit('SET_CONTACTS', res.data);
        });
    },
    addContact(context, newContact) {
      axios
        .post(`${apiServer}/contacts`, newContact)
        .then((res) => {
          context.commit('ADD_CONTACT', res.data);
        });
    },
    updateContact(context, updatedContact) {
      axios
        .put(`${apiServer}/contacts/${updatedContact.id}`, updatedContact)
        .then((res) => {
          context.commit('UPDATE_CONTACT', res.data);
        });
    },
    deleteContact(context, contactId) {
      axios
        .delete(`${apiServer}/contacts/${contactId}`)
        .then(() => {
          context.commit('DELETE_CONTACT', contactId);
        });
    },
  },
});
