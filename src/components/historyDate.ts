import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('history-date')
export class HistoryGrid extends LitElement{
    static styles = css`
        .history-container{
            width:100%;
            display:grid;

            grid-template-columns: 100px auto;
            grid-template-rows: auto 100px;
        }
    `

    render(){
        return html`
            <div class="history-container">
                <div>
                    <slot name="date">
                </div>
                <div>
                    <slot name="history">
                </div>
                <div></div>
                <div>
                    <slot name="gamecenter">
                </div>
            </div>
        `
    }
}