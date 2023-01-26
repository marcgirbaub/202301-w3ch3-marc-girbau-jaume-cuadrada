import series from "../../series";
import { type SeriesStructure, type Series } from "../../types/types";
import { Component } from "../Component/Component";
import { type SeriesListComponentStructure } from "./types";

export class SeriesSectionComponent
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
    <span class="list__info">You have 4 series pending to watch</span>
    `;
  }
}
