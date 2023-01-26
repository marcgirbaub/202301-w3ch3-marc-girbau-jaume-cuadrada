import { pendingSeriesTitles, watchedSeriesTitle } from "../..";
import { Component } from "../Component/Component";
import { SeriesListComponent } from "../SeriesListComponent/SeriesListComponent";

export class PageComponent extends Component {
  constructor() {
    super("div", document.body, "container");
  }

  public render() {
    super.render();

    this.element.innerHTML = `
    <header class="main-header">
      <h1 class="main-title">My Series</h1>
    </header> 
    <main class="main-content"> 
      <h2 class="main-content__title">Series list</h2>
    </main>`;

    const pendingSeriesList = new SeriesListComponent(
      this.element,
      pendingSeriesTitles
    );

    const watchedSeriesList = new SeriesListComponent(
      this.element,
      watchedSeriesTitle
    );

    pendingSeriesList.render();
    watchedSeriesList.render();
  }
}
