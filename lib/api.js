import axios from "axios";

const api = {
    getContact: async function(actualPage, pageLimit){
        return await axios.get(`http://localhost:3000/contacts?_page=${actualPage}&_limit=${pageLimit}&_sort=id&_order=desc`);
    },
    createContact: async function(contact){
        return await axios.post("http://localhost:3000/contacts", contact);
    },
    updateContact: async function(id, contact){
        return await axios.put(`http://localhost:3000/contacts/${id}`, contact);
    },
    deleteContact: async function(id){
        return await axios.delete(`http://localhost:3000/contacts/${id}`);
    }
}

export default {
    api
}