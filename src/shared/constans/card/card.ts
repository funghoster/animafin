type animeType = "OVA" | "TV";

type genresType = "action" | "drama" | "horror" | "shcool";

export interface IAnimeBlock {
  id: number | string;
  name: string;
  subname?: string;
  slug: string;
  season: string;
  originalName: string;
  description: string;
  genres: genresType[];
  ageCategory: string;
  type: animeType;
  averageEpisode: string | number;
  date: Date;
  rating: number;
  plannedEpisodes: number | "Неизвестно";
  currentEpisodes: number;
  poster: string;
  bigPoster: string;
}

export const animeList: IAnimeBlock[] = [
  {
    id: "1",
    name: "Атака титанов",
    subname: "Финал",
    slug: "ataka-titanov",
    season: "final",
    originalName: "Shingeki no kyojin",
    averageEpisode: 24,
    currentEpisodes: 24,
    description:
      "Люди сражаются с титанами, которые мечтают их съесть. Финал самого эпичного аниме современности",
    ageCategory: "18+",
    date: new Date(),
    genres: ["action", "drama"],
    type: "TV",
    plannedEpisodes: 30,
    rating: 2.1,
    poster: "https://pluggedin.ru/images/upload/1668355150.jpeg",
    bigPoster: "https://assets.puzzlefactory.com/puzzle/318/550/original.webp",
  },
  {
    id: "2",
    name: "Атака титанов",
    subname: "Финал",
    slug: "ataka-titanov",
    season: "final",
    originalName: "Shingeki no kyojin",
    averageEpisode: 24,
    currentEpisodes: 24,
    description:
      "Люди сражаются с титанами, которые мечтают их съесть. Финал самого эпичного аниме современности",
    ageCategory: "18+",
    date: new Date(),
    genres: ["action", "drama"],
    type: "TV",
    plannedEpisodes: 30,
    rating: 2.1,
    poster: "https://pluggedin.ru/images/upload/1668355150.jpeg",
    bigPoster: "https://assets.puzzlefactory.com/puzzle/318/550/original.webp",
  },
  {
    id: "3",
    name: "Атака титанов",
    subname: "Финал",
    slug: "ataka-titanov",
    season: "final",
    originalName: "Shingeki no kyojin",
    averageEpisode: 24,
    currentEpisodes: 24,
    description:
      "Люди сражаются с титанами, которые мечтают их съесть. Финал самого эпичного аниме современности",
    ageCategory: "18+",
    date: new Date(),
    genres: ["action", "drama"],
    type: "TV",
    plannedEpisodes: 30,
    rating: 2.1,
    poster: "https://pluggedin.ru/images/upload/1668355150.jpeg",
    bigPoster: "https://assets.puzzlefactory.com/puzzle/318/550/original.webp",
  },
];
