import axios from 'axios';
import { HistoryGrid } from './components/historyGrid';

export {HistoryGrid}

(async() => {
    let data = (await axios({
        method: 'get',
        url:'/api'
    })).data;
})();