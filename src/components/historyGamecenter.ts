import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('history-gamecenter')
export class HistoryGamecenter extends LitElement{
    static styles = css`
        .gamecenter{
            writing-mode: vertical-lr;
            text-orientation: upright;

            width: 50px;

            display:flex;
            align-items:center;
        }
    `;

    render(){
        return html`
            <div class="gamecenter">
                <slot>
            </div>
        `;
    }
}