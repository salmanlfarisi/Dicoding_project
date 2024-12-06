class FooterBar extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._style = document.createElement('style');
  }

  _updateStyle() {
    this._style.textContent = `
            :host {
                display: block;
            }
            div {
                background-color: #EADBC8;
                color: #333;
                text-align: center;
                font-weight: 700;
                padding: 20px 0;
                font-family: 'Arial', sans-serif;
            }
        `;
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = '';
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._emptyContent();
    this._updateStyle();
    this._shadowRoot.appendChild(this._style);

    const footerDiv = document.createElement('div');
    footerDiv.textContent = 'Copyright © 2024 - Hunger Apps';

    this._shadowRoot.appendChild(footerDiv);
  }
}

customElements.define('footer-bar', FooterBar);
