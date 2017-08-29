<template>
  <div>
    <h2>{{ contact.lastName }}, {{ contact.firstName }}</h2>

    <router-link class="btn btn-secondary my-3" to="/contacts">
      <i class="fa fa-chevron-left"></i>
      Back
    </router-link>

    <form @submit.prevent="updateContact">
      <div class="form-group">
        <label for="firstName">First name</label>
        <input id="firstName" type="text" class="form-control" v-model="updatedContact.firstName" autofocus>
      </div>

      <div class="form-group">
        <label for="lastName">Last name</label>
        <input id="lastName" type="text" class="form-control" v-model="updatedContact.lastName">
      </div>

      <div class="form-group">
        <label for="phoneNumber">Phone number</label>
        <input id="phoneNumber" type="tel" class="form-control" v-model="updatedContact.phoneNumber">
      </div>

      <div class="form-group">
        <label for="emailAddress">Email address</label>
        <input id="emailAddress" type="email" class="form-control" v-model="updatedContact.emailAddress">
      </div>

      <button class="btn btn-primary">
        <i class="fa fa-save"></i>
        Save
      </button>
    </form>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'contact',
  data() {
    return {
      updatedContact: {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        emailAddress: '',
      },
    };
  },
  computed: {
    contact() {
      return this.$store.getters.contacts.find(contact => contact.id === +this.$route.params.id);
    },
  },
  methods: {
    updateContact() {
      this.$store.dispatch('updateContact', this.updatedContact);
      this.$router.push('/');
    },
  },
  mounted() {
    this.updatedContact = _.cloneDeep(this.contact);
  },
};
</script>

