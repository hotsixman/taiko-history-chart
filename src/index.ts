import axios from 'axios';
import type { Gamecenter, History } from './lib/types';
import { HistoryDate } from './components/historyDate';
import { HistoryGrid } from './components/historyGrid';
import { HistoryGamecenter } from './components/historyGamecenter';

export {HistoryGrid, HistoryDate, HistoryGamecenter}

interface Data{
    gameCenters:Gamecenter[],
    histories:History[]
}

(async() => {
    let data:Data = (await axios({
        method: 'get',
        url:'/api'
    })).data;
    
    let dates:Set<number> = new Set();
    data.histories.forEach(e => {
        dates.add(e.date)
    })

    let gameCenters = [...data.gameCenters];

    render(dates, gameCenters);
})();

function render(dates:Set<number>, gameCenters:Gamecenter[]):void{
    const historyGrid = document.querySelector('history-grid');

    if(!historyGrid){
        return;
    }

    historyGrid.innerHTML = '';

    historyGrid.innerHTML += [...dates].sort().reverse().map(e => {
        return /*html*/`
            <history-date slot="date">
                ${(new Date(e)).toLocaleDateString()}
            </history-date>
        `
    }).join('\n')

    historyGrid.innerHTML += [...gameCenters].map(e => {
        return /*html*/`
            <history-gamecenter slot="gamecenter">
            ${e.name}
            </history-gamecenter>
        `;
    }).join('\n')
}