import { html, LitElement } from 'lit';

class MyElement extends LitElement {
  static properties = {
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
  };

  constructor() {
    super();

    this.name = 'John Doe';
    this.age = 30;
  }

  render() {
    console.log('render');
    return html`
      <p>Selamat Datang!</p>
      <p>${this.name}, ${this.age}</p>
    `;
  }
}

customElements.define('my-element', MyElement);
