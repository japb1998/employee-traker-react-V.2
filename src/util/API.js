import axios from 'axios';
// const axios = require('axios');

const URL = 'https://randomuser.me/api/?results=';


export default {
    searchEmployees: function (arg) {
    let newUrl = URL+arg
return axios.get(newUrl);
}
}