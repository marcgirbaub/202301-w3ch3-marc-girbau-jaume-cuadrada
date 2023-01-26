import { Component } from "../Component/Component";

export class ButtonComponent extends Component {
  constructor(parentElement: Element) {
    super("button", parentElement);
  }

  render() {
    super.render();
    this.element.innerHTML = `<i class="icon icon--delete fas fa-times-circle"></i>`;
  }
}
