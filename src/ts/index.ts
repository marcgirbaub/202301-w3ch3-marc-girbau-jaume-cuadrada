import { Component } from "./components/Component/Component";
import { PageComponent } from "./components/PageComponent.ts/PageComponent";
import { Series } from "./types/types";
import { SeriesStructure } from "./types/types";

export const pendingSeriesTitles = "Pending series";
export const watchedSeriesTitle = "Watched series";

const appContainer = new PageComponent();
appContainer.render();
