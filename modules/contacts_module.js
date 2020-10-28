import ApiServer from '../lib/api';

const state = {
    contacts: [],
    actualPage: 0,
    pageLimit: 10,
};

const getters = {
    contactList: state => state.contacts,
    actualPage: state => state.actualPage,
    pageLimit: state => state.pageLimit,
};

const actions = {
    async fetchContacts({commit}, operator ){
        commit("setActualPage", operator)
        const response = await ApiServer.api.getContact(state.actualPage, state.pageLimit)
        if ( (!operator || operator === '+') && response.data.length === 0 ) {
            state.actualPage--
        }
        commit("setContacts", response.data)
    },
    async createContact({commit}, contact){
        await ApiServer.api.createContact(contact)
        const response = await ApiServer.api.getContact(state.actualPage, state.pageLimit)
        commit("setContacts", response.data)
    },
    async deleteContact({commit}, id){
        await ApiServer.api.deleteContact(id)
        const response = await ApiServer.api.getContact(state.actualPage, state.pageLimit)
        commit("setContacts", response.data)
    }
};

const mutations = {
    setContacts: (state, contacts) => (
        state.contacts = contacts
    ),
    removeContact: (state, id) => (
        state.contacts.filter(contact => contact.id !== id),
            state.contacts.splice(contact => contact.id, 1)
    ),
    setActualPage: (state, operator) => {
        if ( !operator || operator === '+' ) {
            state.actualPage++;
        }
        else {
            state.actualPage--;
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}