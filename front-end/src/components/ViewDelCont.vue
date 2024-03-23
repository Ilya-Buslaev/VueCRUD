<template>
  <div class="contact-header">
    <div class="name">{{ cont.name }}</div>
  </div>  
  <div class="info">
    <div class="label">Phone:</div>
    <div class="data">{{ cont.phone }}</div>
    <div class="label">E-Mail:</div>
    <div class="data">{{ cont.email }}</div>
    <div class="label">Position:</div>
    <div class="data">{{ cont.position }}</div>
    <div class="label">Note:</div>
    <div class="data">{{ cont.note }}</div>
  </div>
  <button class='del-but' @click="remove" 
      v-show="action == 'Delete'">Delete</button>
</template>

<script>
  export default {
    props: [
      'contact-list',
      'current-id',
      'action'
    ],
    data() {
      return {
        cont: this.getContact()
      }   
    },
    methods: {
      getContact() {
        let index = this.findContById();
        console.log(index)
        return this.contactList[index];
      },
      findContById() {
        for( let i = 0; i < this.contactList.length; i ++ ) {
          if ( this.contactList[i].id == this.currentId )
            return i;
        }
        return -1;       
      },
      remove() {
        this.$emit('do-delete', this.currentId);
      }
      
    }
  }

</script>

<style>
  .contact-header {
    background-color: #04c77f;
    border-radius: 10px;
    padding: 10px;
    margin-top: 30px;
  }
  .name {
    display: inline-block;
    color: LightYellow;
    font-weight: bold;
    font-size: large;
  }
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
  .del-but {
    float: right;
    background-color: tomato;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
  }

</style>