import { pendingSeriesTitles, watchedSeriesTitle } from "../..";
import series from "../../series";
import { type SeriesStructure, type Series } from "../../types/types";
import { CardComponent } from "../CardComponent/CardComponent";
import { Component } from "../Component/Component";
import { type SeriesListComponentStructure } from "./types";

export class SeriesListComponent
  extends Component
  implements SeriesListComponentStructure
{
  title: string;
  readonly series: SeriesStructure[];

  constructor(parentElement: Element, title: string) {
    super("section", parentElement, "list");

    this.title = title;
    this.series = series;
  }

  render() {
    super.render();

    this.element.innerHTML = `
    <h3 class="list__title">${this.title}</h3>
    <span class="list__info">${this.getListInfo()}</span>
    <ul class="series">${this.getListOfSeries()!
      .map(() => `<li class="serie"></li>`)
      .join("")}</ul>
    `;

    this.element
      .querySelectorAll(".serie")
      .forEach((seriesCardContainer, position) => {
        const seriesCardComponent = new CardComponent(
          seriesCardContainer,
          this.getListOfSeries()![position]
        );
        seriesCardComponent.render();
      });
  }

  getWatchedSeries(): SeriesStructure[] {
    return this.series.filter((serie) => serie.isWatched);
  }

  getPendingSeries(): SeriesStructure[] {
    return this.series.filter((serie) => !serie.isWatched);
  }

  getListInfo(): string {
    if (this.title === pendingSeriesTitles) {
      if (this.getPendingSeries().length === 0) {
        return `Congrats! You've watched all your series`;
      }

      return `You have ${
        this.getPendingSeries().length
      } series pending to watch`;
    }

    if (this.title === watchedSeriesTitle) {
      if (this.getWatchedSeries().length === 0) {
        return `You have not watched any serie yet`;
      }

      return `You have watched ${this.getWatchedSeries().length} series`;
    }

    return "";
  }

  getListOfSeries() {
    if (this.title === pendingSeriesTitles) {
      return this.getPendingSeries();
    }

    if (this.title === watchedSeriesTitle) {
      return this.getWatchedSeries();
    }
  }
}
