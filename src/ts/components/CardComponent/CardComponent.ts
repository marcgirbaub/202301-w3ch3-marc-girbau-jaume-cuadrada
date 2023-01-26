import { type SeriesStructure } from "../../types/types";
import { Component } from "../Component/Component";
import { type CardComponentStructure } from "./types";

export class CardComponent extends Component implements CardComponentStructure {
  series: SeriesStructure;

  constructor(parentElement: Element, series: SeriesStructure) {
    super("li", parentElement, "serie");

    this.series = series;
  }

  render() {
    super.render();

    this.element.innerHTML = `
    <img class="serie__poster"
      src=${this.series.poster}
      alt="${this.series.name} poster" />
    <h4 class="serie__title">${this.series.name}</h4>
    <span class="serie__info">${this.series.creator} (${this.series.year})</span>
    `;
  }
}
