<template>
  <div class="form-container">
    <form @submit.prevent="onContactSubmit">

      <h2>Nuevo Contacto</h2>

      <div class="field">
        <div class="label">Nombre</div>
        <input type="text" class="form-control" v-model="firstName" required>
      </div>
      <div class="field">
        <div class="label">Apellido</div>
        <input type="text" class="form-control" v-model="lastName" required>
      </div>
      <div class="field">
        <div class="label">EMail</div>
        <input type="text" class="form-control" v-model="email" required>
      </div>
      <div class="btn-container">
        <input type="submit" class="btn btn" :value="submitBtnText">
        <a v-if="editing" class="btn btn" value="Cancelar" @click="editing = false">Cancelar</a>
      </div>
    </form>

  </div>

</template>

<script>

import { mapActions } from "vuex";

export default {
  name: 'AddContact',
  data(){
    return {
      firstName: '',
      lastName: '',
      email: '',
      contactId: null,
      editing: false
    }
  },
  methods:{
    ...mapActions(["createContact", "updateContact"]),
    onContactSubmit() {
      if ( this.editing ) {
        this.updateContact({
          id: this.contactId,
          first_name: this.firstName,
          last_name: this.lastName,
          email: this.email
        })
      }
      else {
        this.createContact({
          first_name: this.firstName,
          last_name: this.lastName,
          email: this.email
        })
      }
      this.editing = false
      this.contactId = null
      this.firstName = ''
      this.lastName = ''
      this.email = ''

    },
    edit(contact) {
      this.editing = true;
      this.contactId = contact.id;
      this.firstName = contact.first_name;
      this.lastName = contact.last_name;
      this.email = contact.email;
    }
  },
  computed: {
    submitBtnText: function(){
      return (this.editing ? 'Actualizar' : 'Crear')
    }
  }
}

</script>

<style lang="scss" scoped>
  .form-container {
    width: 435px;
    border: 1px solid #cdcdcd;
    padding: 17px;
    border-radius: 10px;
    background: #f6f6f6;

    form {
      width: 100%;
      text-align: center;
      .field {
        padding: 4px;
        input {
          border: 1px solid #d5d5d5;
          border-left: 0;
          padding: 2px;
          width: 300px;
          border-radius: 0 10px 10px 0;
        }
        .label {
          background: #e6e6e6;
          display: inline-block;
          text-align: right;
          width: 100px;
          padding: 1px 7px 1px 1px;
          border-radius: 10px 0 0 10px;
          font-size: 14px;
          font-weight: 500;
        }
      }
      > h2 {
        color: #687e8d;
        font-weight: 500;
      }
      .btn-container {
        display: block;
      }

    }

  }


  .btn {
    margin-top: 30px;
    margin-left: 10px;
    border: 0px;
  }



</style>