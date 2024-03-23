<template>
    <div v-for="c in contactList" class="card">
      <div class="contact-header">
        <div class="name">{{ c.name }}</div>
        <div class="actions">
          <button @:click="emitViewCont(c.id)">View</button>
          <button @:click="emitEditCont(c.id)">Edit</button>
          <button @:click="emitDeleteCont(c.id)">Delete</button>
        </div>  
      </div>
      <p class="phone">{{ c.phone }}</p>
    </div>
</template>

<script>
  export default {
    props: [
      'contact-list'
    ],
    methods: {
      emitViewCont(id) {
        this.$emit('view-contact', id);
      },
      emitEditCont(id) {
        console.log("emitEditCont");
        this.$emit('edit-contact', id);
      },
      emitDeleteCont(id) {
        this.$emit('delete-contact', id);
      }
    }
  }
</script>

<style scoped>
  .contact-header {
    background-color: #04c77f;
    border-radius: 10px;
    padding: 10px;
    margin-top: 30px;
  }
  div.name {
    display: inline-block;
    color: LightYellow;
    font-weight: bold;
    font-size: large;
  }
  div.actions {
    float: right;
/*    border: thin solid brown;*/
  }
  .phone {
    margin: 10px;
  }
  button {
    background-color: #04c77f;
    border-style: none; 
  }
  button:hover {
    background-color: #03ac6e;
    border-style: none;
  }
</style>