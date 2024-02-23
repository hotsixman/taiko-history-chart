import axios from 'axios';

(async() => {
    let data = (await axios({
        method: 'get',
        url:'/api'
    })).data;
})();