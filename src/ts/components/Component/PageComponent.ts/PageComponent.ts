import { Component } from "../Component";

export class PageComponent extends Component {
  constructor() {
    super("div", document.body, "container");
  }

  render() {
    super.render();
    this.element.innerHTML = `<header class="main-header">
      <h1 class="main-title">My Series</h1>
    </header> <main class="main-content">`;
  }
}
