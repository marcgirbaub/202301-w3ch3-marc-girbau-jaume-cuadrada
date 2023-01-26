import { ButtonComponent } from "./components/ButtonComponent/ButtonComponent";
import { Component } from "./components/Component/Component";
import { PageComponent } from "./components/PageComponent/PageComponent";
import series from "./series";
import { Series } from "./types/types";
import { SeriesStructure } from "./types/types";

export const pendingSeriesTitles = "Pending series";
export const watchedSeriesTitle = "Watched series";

export const appContainer = new PageComponent();
appContainer.render();
