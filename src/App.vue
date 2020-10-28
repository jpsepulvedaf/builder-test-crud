<template>
  <div id="app">
    <AddContact ref="contactForm" />
    <ContactList @updateRow="updateRow" />
  </div>
</template>

<script>
import ContactList from './components/ContactList.vue'
import AddContact from "@/components/AddContact";

export default {
  name: 'App',
  components: {
    AddContact,
    ContactList
  },
  methods: {
    updateRow: function(contact){
      this.$refs.contactForm.edit(contact);
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 30px;

  .btn {
    cursor: pointer;
    background: #32719c;
    padding: 6px 13px;
    font-size: 14px;
    border-radius: 17px;
    color: white;
    font-weight: 500;
    &.next-btn {
      float: right;
    }
    &.last-btn {
      float:left;
    }
    &:hover {
      background: #d9d9d9;
      color: #707070;
    }
  }


}
</style>
