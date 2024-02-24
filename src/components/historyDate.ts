import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('history-date')
export class HistoryDate extends LitElement{
    static styles = css`
        .history-date{
            width:100%;
            display:flex;

            justify-content:center;
            align-items:center;
        }
    `

    @property({type:Number})
    height:number = 50;

    render(){
        return html`
            <div class="history-date" style="height:${this.height}px;">
                <slot>
            </div>
        `
    }
}