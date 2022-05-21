import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'

@customElement('app-page-b')
export class AppPageB extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    connectedCallback(): void {
        super.connectedCallback()
        console.log('page B connected')
    }

    disconnectedCallback(): void {
        super.disconnectedCallback()
        console.log('page B disconnected')
    }

    render() {
        return html`
            <div class="page-b">
                <h1>Page B</h1>
            </div>
        `;
    }
}
