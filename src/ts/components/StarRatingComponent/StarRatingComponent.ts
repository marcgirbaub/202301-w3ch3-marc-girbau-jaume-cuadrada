import { Component } from "../Component/Component";

export class StarRatingComponent extends Component {
  buttonsClass: string;

  constructor(parentElement: Element, buttonsClass: string) {
    super("ul", parentElement, "score");

    this.buttonsClass = buttonsClass;
  }

  render() {
    super.render();
    this.element.innerHTML = `<li class="score__star">
                <button><i class="${this.buttonsClass}" title="1/5"></i></button>
              </li>
              <li class="score__star">
                <button><i class="${this.buttonsClass}" title="2/5"></i></button>
              </li>
              <li class="score__star">
                <button><i class="${this.buttonsClass}" title="3/5"></i></button>
              </li>
              <li class="score__star">
                <button><i class="${this.buttonsClass}" title="4/5"></i></button>
              </li>
              <li class="score__star">
                <button><i class="${this.buttonsClass}" title="5/5"></i></button>
              </li>`;
  }
}
