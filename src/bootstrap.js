window.$ = window.jQuery = require('jquery');
window.Popper = require('popper.js').default;
require('bootstrap');
  


window.axios = require('axios').default;
// TODO CAMBIAR EL DOMINIO
axios.defaults.baseURL = 'https://nixoncarpinteria.herokuapp.com/api';

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';




