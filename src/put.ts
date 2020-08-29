import { TResponseItem } from "./alfred/response";
import { getAllIconsObject, TIconObject } from "./assets/icons_object";

type Query = TResponseItem["uid"];

const getIconObject = (query: Query): TIconObject | undefined => {
  const allIconsObject = getAllIconsObject();
  return allIconsObject.find((icon) => icon.name === query);
};

export const putSvg = (query: Query): string | null => {
  const icon = getIconObject(query);
  if (!icon) return null;
  const svg = JSON.parse(icon.svg.raw);
  return svg;
};

export const putName = (query: Query): string | null => {
  const icon = getIconObject(query);
  if (!icon) return null;
  return `${icon.name}`;
};

export const putUrl = (query: Query): string | null => {
  const icon = getIconObject(query);
  if (!icon) return null;
  return `https://icons.getbootstrap.com/icons/${icon.name}/`;
};
