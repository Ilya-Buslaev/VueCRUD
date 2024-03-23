<template>

  <nav-bar 
    @new-contact="showAddContact" 
    @show-list  ="showList"/>

  <component 
    :is="activeComp" 
    :contact-list="contacts"
    :current-id="currentId"
    :action="action"
    @view-contact="showViewContact" 
    @edit-contact="showEditContact" 
    @delete-contact="showDeleteContact"
    @do-delete="deleteContact"
    @do-save="saveContact" />
  
</template>

<script>

  import * as REST from '@/rest'

  export default {
    data() {
      return {
        activeComp: 'cont-list', 
        currentId: 0,
        action: 'List',
        contacts: [
          { "id": 1, "name": "Fedya",  "phone": "+7(952) 231-48-72", 
            "email" : "buslaev.iv@gmail.com", "position" : "Father",
            "note": `sdfasdf` },
        ]
      } 
    },

    created() {
      this.selectContacts();
      this.showList();
    },

    methods: {
      
      showAddContact() {
        this.currentId = 0;
        this.activeComp = 'add-edit-cont'
        this.action = "Add"
      },
      
      showEditContact(id) {
        this.currentId = id;
        this.activeComp = 'add-edit-cont'
        this.action = "Edit"
      },

      showViewContact(id) {
        this.currentId = id;
        this.activeComp = 'view-del-cont'
        this.action = "View"
      },
      
      showDeleteContact(id) {
        this.currentId = id;
        this.activeComp = 'view-del-cont'
        this.action = "Delete"
      },
      
      showList() {
        this.activeComp = 'cont-list'
      },
      
      deleteContact(id) {
        REST.deleteContact(id)
          .then(() => this.selectContacts())
          .then(() => this.showList()); 
      },
      
      saveContact(id, cont) {
        console.log(id);
        if (id > 0) {
          REST.updateContact(cont)
            .then(()=>this.selectContacts()); 
        }
        else {
          REST.insertContact(cont)
            .then(()=>this.selectContacts());
        }

        this.showList();
      },

      selectContacts() {
        REST.selectContacts()
          .then( (res) => this.contacts = res ); 
      }, 

    }
  }
</script>

<style>
  #app {
    width: 400px;
  }
  /* styles for ViewDelComp & AddEditComp */
  .info {
    display: grid;
    grid-template-columns: min-content auto;
  }
  .label {
    padding: 10px;
    font-size: small;
    color: brown;
  }
  .data {
    padding: 10px;
  }

</style>