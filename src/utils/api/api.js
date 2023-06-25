import axios from 'axios';

axios.defaults.baseURL = 'https://dataservice.accuweather.com/';
axios.defaults.headers['Access-Control-Allow-Origin'] = '*';
axios.defaults.params = {}
axios.defaults.params['apikey'] = 'alDLATG0Vh0gAc9t9vK7RhcXAGfGKSGg';
axios.defaults.params['language'] = 'en-us';
axios.defaults.withCredentials = true;

export default axios;