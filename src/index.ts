import axios from 'axios';
import type { Gamecenter, History } from './lib/types';
import { HistoryDate } from './components/historyDate';
import { HistoryGrid } from './components/historyGrid';
import { HistoryGamecenter } from './components/historyGamecenter';
import { HistoryPlate } from './components/historyPlate';

export { HistoryGrid, HistoryDate, HistoryGamecenter, HistoryPlate }

interface Data {
    gameCenters: Gamecenter[],
    histories: History[]
}

(async () => {
    let data: Data = (await axios({
        method: 'get',
        url: '/api'
    })).data;

    let dates: Set<number> = new Set();
    data.histories.forEach(e => {
        dates.add(e.date)
    })

    let gameCenters = [...data.gameCenters];

    render(dates, gameCenters, data.histories);
})();

function render(dates: Set<number>, gameCenters: Gamecenter[], histories: History[]): void {
    const historyGrid = document.querySelector('history-grid');

    if (!historyGrid) {
        return;
    }

    historyGrid.innerHTML = '';

    let datesArray = [...dates, 0].sort().reverse();
    historyGrid.innerHTML += datesArray.map(e => {
        return /*html*/`
            <history-date slot="date">
                ${e === 0 ? '' : (new Date(e)).toLocaleDateString()}
            </history-date>
        `
    }).join('\n')

    let gameCentersArray = [...gameCenters].sort((a, b) => a.order - b.order)
    historyGrid.innerHTML += gameCentersArray.map(e => {
        return /*html*/`
            <history-gamecenter slot="gamecenter">
            ${e.name}
            </history-gamecenter>
        `;
    }).join('\n')

    let system = Array(gameCenters.length);
    for (let i = 0; i < system.length; i++) {
        system[i] = Array(datesArray.length);
        for(let j = 0 ; j < system[i].length; j++){
            system[i][j] = {
                move:false
            }
        }
    }
    histories.forEach(e => {
        let x = gameCentersArray.findIndex(el => el.order === e.to);
        let y = datesArray.findIndex(el => el === e.date);
        system[x][y].move = true;

        let x_ = gameCentersArray.findIndex(el => el.order === e.from);
        system[x_][y+1].move = true;
    })
    historyGrid.innerHTML += /*html*/`
        <history-plate columns=${gameCenters.length} rows=${datesArray.length} slot="history">
        ${
            system.map(e => {
                return e.map((el: any) => {
                    if (el.move) {
                        return /*html*/`
                            <div>a</div>
                        `;
                    }
                    else {
                        return /*html*/`
                        <div></div>
                    `;
                    }
                }).join('\n')
            }).join('\n')
        }
        </history-plate>
    `;
}