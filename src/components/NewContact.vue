<template>
  <div>
    <h2>New contact</h2>

    <router-link class="btn btn-secondary my-3" to="/contacts">
      <i class="fa fa-chevron-left"></i>
      Back
    </router-link>

    <form @submit.prevent="addContact">
      <div class="form-group">
        <label for="firstName">First name</label>
        <input id="firstName" type="text" class="form-control" v-model="newContact.firstName">
      </div>

      <div class="form-group">
        <label for="lastName">Last name</label>
        <input id="lastName" type="text" class="form-control" v-model="newContact.lastName">
      </div>

      <div class="form-group">
        <label for="phoneNumber">Phone number</label>
        <input id="phoneNumber" type="tel" class="form-control" v-model="newContact.phoneNumber">
      </div>

      <div class="form-group">
        <label for="emailAddress">Email address</label>
        <input id="emailAddress" type="email" class="form-control" v-model="newContact.emailAddress">
      </div>

      <button class="btn btn-primary">
        <i class="fa fa-save"></i>
        Save
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'newContact',
  data() {
    return {
      newContact: {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        emailAddress: '',
      },
    };
  },
  methods: {
    addContact() {
      this.$store.dispatch('addContact', this.newContact);
      this.$router.push('/contacts');
    },
  },
};
</script>

