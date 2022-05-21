import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'

@customElement('app-page-a')
export class AppPageA extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    connectedCallback(): void {
        super.connectedCallback()
        console.log('page A connected')
    }

    disconnectedCallback(): void {
        super.disconnectedCallback()
        console.log('page A disconnected')
    }

    render() {
        return html`
            <div class="page-a">
                <h1>Page A</h1>
                <div class="nav">
                    <a href="/pageA/a-sub">Sub section</a>
                </div>
                <slot class="page-a-slot"></slot>
            </div>
        `;
    }
}
