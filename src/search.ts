import Fuse from "fuse.js";
import { TResponse, TResponseItem } from "./alfred/response";
import { TIconObject } from "./assets/icons_object";
import { toResponseItem } from "./icons";

type TSearchResult = Readonly<{
  item: TIconObject;
  refIndex: number;
  score: number;
}>;

const DEFAULT_KEYS = [
  { name: "name", weight: 0.7 },
  { name: "title", weight: 0.7 },
  { name: "categories", weight: 0.3 },
  { name: "tags", weight: 0.3 },
];

export const search = (
  list: TIconObject[],
  query: string,
  keys?: string[]
): TSearchResult[] => {
  if (!query) {
    return list.map((item, i) => {
      return {
        item: item,
        refIndex: i,
        score: 0,
      };
    }) as TSearchResult[];
  }

  const options = {
    includeScore: true,
    useExtendedSearch: true,
    keys: keys ?? DEFAULT_KEYS,
  } as const;

  const fuse = new Fuse(list, options, undefined);
  const sr = fuse.search(query) as TSearchResult[];

  return sr;
};

export const toJson = (searchResult: TSearchResult[]): string => {
  const items: TResponseItem[] = searchResult.map(({ item }) => {
    return toResponseItem(item);
  });

  const response: TResponse = { items: items };

  return JSON.stringify(response);
};
