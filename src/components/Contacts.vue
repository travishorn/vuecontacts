<template>
  <div>
    <h2>Contacts</h2>

    <router-link class="btn btn-primary my-3" to="/contacts/new">
      <i class="fa fa-plus"></i>
      New contact
    </router-link>

    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone number</th>
          <th>Email address</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="contact in contacts">
          <td>{{ contact.lastName }}, {{ contact.firstName }}</td>
          <td>{{ contact.phoneNumber }}</td>
          <td>{{ contact.emailAddress }}</td>
          <th>
            <div class="btn-group">
              <router-link class="btn btn-secondary" title="Edit" :to="`/contacts/${contact.id}`">
                <i class="fa fa-pencil"></i>
              </router-link>
              <button class="btn btn-danger" title="Delete" data-toggle="modal" data-target="#deleteContactModal" @click="updateDelContactId(contact.id)">
                <i class="fa fa-trash"></i>
              </button>
            </div>
          </th>
        </tr>
      </tbody>
    </table>

    <div class="modal fade" id="deleteContactModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Delete contact</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" v-if="delContact">
            Are you sure you want to delete {{ delContact.firstName }} {{ delContact.lastName }}?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-danger" data-dismiss="modal" @click="deleteContact(delContactId)">
              <i class="fa fa-trash"></i>
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contacts',
  data() {
    return {
      delContactId: null,
    };
  },
  computed: {
    contacts() { return this.$store.getters.contacts; },
    delContact() { return this.contacts.find(contact => contact.id === this.delContactId); },
  },
  methods: {
    updateDelContactId(contactId) {
      this.delContactId = contactId;
    },
    deleteContact(contactId) {
      this.$store.dispatch('deleteContact', contactId);
    },
  },
};
</script>

