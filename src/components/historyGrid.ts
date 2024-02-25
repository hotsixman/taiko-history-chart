import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('history-grid')
export class HistoryGrid extends LitElement{
    static styles = css`
        .history-container{
            width:100%;
            display:grid;

            grid-template-columns: 100px auto;
            grid-template-rows: auto 100px;
        }

        .gamecenter-container{
            display:flex;
            flex-direction: row;
            align-items: flex-start;
        }
    `

    render(){
        return html`
            <div class="history-container">
                <div class="date">
                    <slot name="date">
                </div>
                <div>
                    <slot name="history">
                </div>
                <div></div>
                <div class="gamecenter-container">
                    <slot name="gamecenter">
                </div>
            </div>
        `
    }
}