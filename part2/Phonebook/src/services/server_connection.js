import axios from "axios";

const baseurl = "http://localhost:3001/persons"

const getContacts = () => {
    return axios
        .get(baseurl)
        .then( contacts =>{
            return (contacts.data)
        })
}

const addContact = (newContact) => {
    return axios
        .post(baseurl,newContact)
        .then( response => response.data)
}

export default {getContacts , addContact}