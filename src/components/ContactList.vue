<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>EMail</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="contact in contactList" :key="contact.id">
          <td>{{ contact.first_name }}</td>
          <td>{{ contact.last_name }}</td>
          <td>{{ contact.email }}</td>
          <td>
            <a class="minibtn update-btn" @click="update(contact)">ACTUALIZAR</a>
          </td>
          <td>
            <a class="minibtn delete-btn" @click="deleteContact(contact.id)">ELIMINAR</a>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="paginator">
      <a class="btn last-btn" v-if="actualPage > 1" @click="fetchContacts('-')">Anterior</a>
      <a class="btn next-btn" v-if="contactList.length === pageLimit" @click="fetchContacts('+')">Siguiente</a>
    </div>
  </div>
</template>

<script>

import {
  mapGetters,
  mapActions
} from "vuex";

export default {
  name: 'ContactList',
  methods: {
    ...mapActions(["fetchContacts", "deleteContact", "updateContact"]),
    update: function(row){
      this.$emit("updateRow", row)
    }

  },
  computed: mapGetters(["contactList", "actualPage", "pageLimit"]),
  created() {
    this.fetchContacts()
  }
}

</script>

<style lang="scss" scoped>

  table {
    border: 1px solid #9a9a9a;
    margin-top: 30px;
    width: 100%;
    thead {
      background: #cfcfcf;
    }
    tbody {
      tr:nth-child(even) {
        background-color: #eee;
      }
      tr:nth-child(odd) {
        background-color: #fff;
      }
    }
  }

  .paginator {
    margin-top: 30px;
    display: block;
    height: 30px;
    padding: 8px;
    vertical-align: middle;
  }
  a.minibtn {
    cursor: pointer;
    font-size: 10px;
    background: #ffffff;
    padding: 1px 8px;
    border-radius: 13px;
    font-weight: 500;
    &:hover {
      color: white;
    }
  }
  a.delete-btn {
    color: #c93939;
    border: 1px solid #c93939;
    font-weight: 500;
    &:hover {
      background: #bf6565;
    }
  }
  a.update-btn {
    color: #396ec9;
    border: 1px solid #398bc9;
    font-weight: 500;
    &:hover {
      background: #65a3bf;
    }
  }


</style>