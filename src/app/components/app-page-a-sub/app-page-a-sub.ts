import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'

@customElement('app-page-a-sub')
export class AppPageASub extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    connectedCallback(): void {
        super.connectedCallback()
        console.log('page A sub connected')
    }

    disconnectedCallback(): void {
        super.disconnectedCallback()
        console.log('page A sub disconnected')
    }

    render() {
        return html`
            <div class="page-a-sub">
                <h2>Page A sub section</h2>
            </div>
        `;
    }
}
