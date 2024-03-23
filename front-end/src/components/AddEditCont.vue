<template>
  <div class="info">
    <div class="label">Name:</div>
    <div class="data">
      <input type="text" v-model="name">
    </div>
    <div class="label">Phone:</div>
    <div class="data">
      <input type="text" v-model="phone">
    </div>
    <div class="label">E-Mail:</div>
    <div class="data">
      <input type="text" v-model="email">
    </div>
    <div class="label">Position:</div>
    <div class="data">
      <input type="text" v-model="position">
    </div>
    <div class="label">Note:</div>
    <div class="data">
      <textarea v-model="note"></textarea>
    </div>
  </div>
  <button class='save-but' @click="save">Save</button>
</template>
  
<script>
    export default {
      props: [
        'contact-list',
        'current-id'
      ],
      data() {
        return {
          name: this.getContact().name,
          phone: this.getContact().phone,
          email: this.getContact().email,
          position: this.getContact().position,
          note: this.getContact().note
        }   
      },
      methods: {
        getContact() {
          let index = this.findContById();
          console.log(index)
          if ( index >= 0 )
            return this.contactList[index];
          else
            return { "id": 0, "name": "",  "phone": "", 
                     "email" : "", "position" : "", "note": "" }
        },
        findContById() {
          for( let i = 0; i < this.contactList.length; i ++ ) {
            if ( this.contactList[i].id == this.currentId )
              return i;
          }
          return -1;       
        },
        save() {
          let cont = {}
          cont["id"]       = this.currentId;
          cont["name"]     = this.name;
          cont["phone"]    = this.phone;
          cont["email"]    = this.email;
          cont["position"] = this.position;
          cont["note"]     = this.note;
          this.$emit('do-save', this.currentId, cont);
        }
      }
    }
  
</script>
  
<style scoped>
  .save-but {
    float: right;
    background-color: #04c77f;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
  }

  .data2 {
    border: 1px solid red;
  }

  input {
    width: 100%;
  }
  textarea {
    width: 100%;
    height: 60px;
  }

</style>