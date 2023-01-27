import { appContainer } from "../..";
import series from "../../series";
import { type SeriesStructure } from "../../types/types";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
import { Component } from "../Component/Component";
import { StarRatingComponent } from "../StarRatingComponent/StarRatingComponent";
import { type CardComponentStructure } from "./types";

export class CardComponent extends Component implements CardComponentStructure {
  serie: SeriesStructure;
  series: SeriesStructure[];

  constructor(parentElement: Element, serie: SeriesStructure) {
    super("div", parentElement, "serie");

    this.serie = serie;
    this.series = series;
  }

  render() {
    super.render();

    this.element.innerHTML = `
    <img class="serie__poster"
      src=${this.serie.poster}
      alt="${this.serie.name} poster"/>
    <h4 class="serie__title">${this.serie.name}</h4>
    <span class="serie__info">${this.serie.creator} (${this.serie.year})</span>
    `;

    const ratingStars = new StarRatingComponent(
      this.element,
      this.getClassStarRatingButton()
    );
    ratingStars.render();

    const ratingStarsEl = ratingStars.element.querySelectorAll(".icon--score");

    ratingStarsEl.forEach((star, position) => {
      star.addEventListener("click", () => {
        star.className = "icon-score fas fa-star";
      });
    });

    const deleteButton = new ButtonComponent(this.element);
    deleteButton.render();

    deleteButton.element.addEventListener("click", () => {
      this.series.splice(this.series.indexOf(this.serie), 1);
      appContainer.render();
    });
  }

  private isSeriesWatched(): boolean {
    return this.serie.isWatched;
  }

  private getClassStarRatingButton(): string {
    return this.isSeriesWatched()
      ? `icon icon--score fas fa-star`
      : `icon icon--score far fa-star`;
  }
}
