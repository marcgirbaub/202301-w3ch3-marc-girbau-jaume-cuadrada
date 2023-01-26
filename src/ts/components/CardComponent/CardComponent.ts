import { type SeriesStructure } from "../../types/types";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
import { Component } from "../Component/Component";
import { StarRatingComponent } from "../StarRatingComponent/StarRatingComponent";
import { type CardComponentStructure } from "./types";

export class CardComponent extends Component implements CardComponentStructure {
  series: SeriesStructure;

  constructor(parentElement: Element, series: SeriesStructure) {
    super("div", parentElement, "serie");

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

    const ratingStars = new StarRatingComponent(this.element);
    ratingStars.render();

    const deleteButton = new ButtonComponent(this.element);
    deleteButton.render();
  }
}
