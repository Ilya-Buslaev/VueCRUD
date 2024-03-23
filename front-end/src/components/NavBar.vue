<template>
  <div class="nav">
    <div class="home">   <button @click="emitShowList">Home</button></div>
    <div class="title">  Contacts</div>
    <div class="actions"><button @click="emitAddCont">Add Contact</button></div>
  </div>
  <p>&nbsp;</p>
</template>

<script>
  export default {
    props: [
      'myprop'
    ],
    methods: {
      emitShowList() {
        this.$emit('show-list');
      },
      emitAddCont() {
        this.$emit('new-contact');
      }
    }
  }
</script>
  
<style scoped>
  .nav {
    display: grid;
    grid-template-columns: min-content auto min-content;
    background-color: #555555;
    color: white;
    margin: 0;
    padding: 0;
    position: fixed;
    top: 0px;
    width: 400px;
  }

  .nav > div {
    padding: 10px;
  }
  button {
    background-color: #555555;
    color: white;
    border: none;
  }
  button:hover {
    background-color: #333333;
  }
  .home {
    font-size: large;
  }
/*  .actions {
    float: right; 
  }*/
  .title {
    font-size: x-large;
    color: gold;
    text-align: center;
  }
  p {
    display: inline-block;
    padding: 10px;
    margin-bottom: 0px;
  }
</style>