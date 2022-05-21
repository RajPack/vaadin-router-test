import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'

@customElement('app-main')
export class AppMain extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
            .main {
                padding: 20px;
            }
            a {
                padding-right: 20px;
            }
        `
    ];

    connectedCallback(): void {
        super.connectedCallback()
        console.log('main connected')
    }

    disconnectedCallback(): void {
        super.disconnectedCallback()
        console.log('main disconnected')
    }

    render() {
        return html`
        <div class="main">
            <div class="nav">
                <a href="/pageA">Page A </a>
                <a href="/pageB">Page B</a>
            </div>
            <slot class="main-slot"></slot>
        </div>
        `;
    }
}
