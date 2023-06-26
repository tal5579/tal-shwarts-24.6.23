import axios from 'axios';

axios.defaults.baseURL = 'https://dataservice.accuweather.com/';
axios.defaults.params = {}
axios.defaults.params['apikey'] = 'DGvbkSMIlATNAW4wkxp1k3qVgH23Uive';
axios.defaults.params['language'] = 'en-us';

export default axios;