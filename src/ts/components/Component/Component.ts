import { type ComponentStructre } from "./types";

export class Component implements ComponentStructre {
  element: Element;
  private readonly parentElement: Element;

  constructor(tagName: string, parentElement: Element, className?: string) {
    this.element = document.createElement(tagName);
    if (className !== undefined) {
      this.element.className = className;
    }

    this.parentElement = parentElement;
  }

  render() {
    this.parentElement.appendChild(this.element);
  }
}
