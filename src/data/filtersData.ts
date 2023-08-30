import { v4 as uuidv4 } from "uuid";

export type filter = {
  id: string;
  title: string;
  value: string;
  options: string[];
};

export const filtersData: filter[] = [
  {
    id: uuidv4(),
    title: "Platform",
    value: "platform",
    options: ["All", "PC", "Browser"],
  },
  {
    id: uuidv4(),
    title: "Genre",
    value: "genre",
    options: [
      "All",
      "MMO",
      "MMORPG",
      "Shooter",
      "Strategy",
      "Moba",
      "Battle Royale",
      "Card",
      "Racing",
      "Sports",
      "Social",
      "Fighting",
    ],
  },
  {
    id: uuidv4(),
    title: "Sort By",
    value: "sortedBy",
    options: ["Relevance", "Popularity", "Release Date", "Alphabetical"],
  },
];
