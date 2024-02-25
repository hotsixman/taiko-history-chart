import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('history-plate')
export class HistoryPlate extends LitElement{
    static styles = css`
        .plate{
            display:grid;
            grid-auto-flow: column;
            height:100%;
        }
    `;

    @property()
    rows?:number;
    @property()
    columns?:number;

    render(){
        return html`
            <div class="plate" style="grid-template-rows: repeat(${this.rows}, calc(100% / ${this.rows}));grid-template-columns: repeat(${this.columns}, 50px);">
                <slot>
            </div>
        `;
    }
}