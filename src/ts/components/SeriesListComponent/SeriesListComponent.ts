import { pendingSeriesTitles, watchedSeriesTitle } from "../..";
import series from "../../series";
import { type SeriesStructure, type Series } from "../../types/types";
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
    <ul class="series"></ul>
    `;
  }

  getNumberOfWatchedSeries(): string {
    return `${this.series.filter((serie) => serie.isWatched).length}`;
  }

  getNumberOfPendingSeries(): string {
    return `${this.series.filter((serie) => !serie.isWatched).length}`;
  }

  getListInfo(): string {
    if (this.title === pendingSeriesTitles) {
      return `You have ${this.getNumberOfPendingSeries()} series pending to watch`;
    }

    if (this.title === watchedSeriesTitle) {
      return `You have watched ${this.getNumberOfWatchedSeries()} series`;
    }

    return "";
  }
}
