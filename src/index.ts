import { getAllIconsObject } from "./assets/icons_object";
import { putName, putSvg, putUrl } from "./put";
import { getArgs, getFlagArgs, includesFlag } from "./query";
import { search, toJson } from "./search";

const FLAG = {
  FIND: "--find",
  PUT: {
    SVG: "--put-svg",
    NAME: "--put-name",
    URL: "--put-url",
  },
};

const output = (str: string): void => {
  process.stdout.write(str); // NOTE: Output to Alfred
};

const main = (): void => {
  const args = getArgs();
  const list = getAllIconsObject();

  if (includesFlag(args, FLAG.FIND)) {
    const query = getFlagArgs(args, FLAG.FIND);
    const searchResult = search(list, query);
    output(toJson(searchResult));
    return;
  }

  if (includesFlag(args, FLAG.PUT.SVG)) {
    const query = getFlagArgs(args, FLAG.PUT.SVG);
    const result = putSvg(query);
    result && output(result);
    return;
  }

  if (includesFlag(args, FLAG.PUT.NAME)) {
    const query = getFlagArgs(args, FLAG.PUT.NAME);
    const result = putName(query);
    result && output(result);
    return;
  }

  if (includesFlag(args, FLAG.PUT.URL)) {
    const query = getFlagArgs(args, FLAG.PUT.URL);
    const result = putUrl(query);
    result && output(result);
    return;
  }

  // NOTE: No flags
  output(toJson(search(list, "")));
};

main();
