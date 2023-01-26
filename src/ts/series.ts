import { type Series } from "./types/types";

const series: Series = [
  {
    id: 1,
    name: "The Sopranos",
    creator: "David Chase",
    year: 1999,
    poster:
      "https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
    isWatched: true,
    score: 5,
    emmies: 21,
  },
  {
    id: 2,
    name: "Game of Thrones",
    creator: "David Benioff",
    year: 2011,
    poster: "img/GoT.jpg",
    isWatched: false,
    score: 0,
    emmies: 164,
  },
  {
    id: 3,
    name: "Mad Men",
    creator: "Matthew Weiner",
    year: 2007,
    poster: "img/madmen.jpg",
    isWatched: true,
    score: 5,
    emmies: 116,
  },
  {
    id: 4,
    name: "6 feet under",
    creator: "Alan Ball",
    year: 2001,
    poster: "img/sixfeet.jpg",
    isWatched: true,
    score: 5,
    emmies: 53,
  },
  {
    id: 5,
    name: "Atypical",
    creator: "Robia Rashid",
    year: 2017,
    poster: "img/atypical.jpg",
    isWatched: false,
    score: 0,
    emmies: 0,
  },
];

export default series;
