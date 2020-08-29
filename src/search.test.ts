import { TIconObject } from "./assets/icons_object";
import { search, toJson } from "./search";

const LIST_1: TIconObject = {
  name: "aaabbb",
  title: "AAABBB",
  categories: ["111", "222"],
  tags: ["100", "200"],
};

const LIST_2: TIconObject = {
  name: "bbbccc",
  title: "BBBCCC",
  categories: ["222", "444"],
  tags: ["200", "400"],
};

const LIST_3: TIconObject = {
  name: "cccddd",
  title: "CCCDDD",
  categories: ["333", "666"],
  tags: ["300", "600"],
};

const LIST: TIconObject[] = [LIST_1, LIST_2, LIST_3];

const KEYS = ["name", "title", "categories", "tags"];

describe("search()", () => {
  test("empty query", () => {
    const query = "";
    const actual = search(LIST, KEYS, query);
    const expected = [
      {
        item: LIST_1,
        refIndex: 0,
        score: 0,
      },
      {
        item: LIST_2,
        refIndex: 1,
        score: 0,
      },
      {
        item: LIST_3,
        refIndex: 2,
        score: 0,
      },
    ];

    expect(actual.length).toBe(3);
    expect(actual).toStrictEqual(expected);
  });

  test("name key", () => {
    const query = "BBB";
    const actual = search(LIST, KEYS, query);
    const expected = [
      {
        item: LIST_2,
        refIndex: 1,
        score: 0.000001,
      },
      {
        item: LIST_1,
        refIndex: 0,
        score: 0.0009,
      },
    ];

    expect(actual.length).toBe(2);
    expect(actual).toStrictEqual(expected);
  });

  test("categories key", () => {
    const query = "22";
    const actual = search(LIST, KEYS, query);
    const expected = [
      {
        item: LIST_1,
        refIndex: 0,
        score: 0.0005,
      },
      {
        item: LIST_2,
        refIndex: 1,
        score: 0.0005,
      },
    ];

    expect(actual.length).toBe(2);
    expect(actual).toStrictEqual(expected);
  });

  test("tags key", () => {
    const query = "200";
    const actual = search(LIST, KEYS, query);
    const expected = [
      {
        item: LIST_1,
        refIndex: 0,
        score: 7.401486830834377e-17,
      },
      {
        item: LIST_2,
        refIndex: 1,
        score: 7.401486830834377e-17,
      },
      {
        item: LIST_3,
        refIndex: 2,
        score: 0.1111111111111111,
      },
    ];

    expect(actual.length).toBe(3);
    // FIXME: Is this correct?
    expect(actual).toStrictEqual(expected);
  });
});

describe("toJson()", () => {
  test("3 results", () => {
    const searchResult = [
      {
        item: LIST_1,
        refIndex: 0,
        score: 7.401486830834377e-17,
      },
      {
        item: LIST_2,
        refIndex: 1,
        score: 7.401486830834377e-17,
      },
      {
        item: LIST_3,
        refIndex: 2,
        score: 0.1111111111111111,
      },
    ];
    const actual = toJson(searchResult);
    const expected =
      '{"items":[{"uid":"aaabbb","title":"aaabbb","subtitle":"Paste class name: bi-aaabbb","arg":"aaabbb","icon":{"path":"./icons/aaabbb.png"}},{"uid":"bbbccc","title":"bbbccc","subtitle":"Paste class name: bi-bbbccc","arg":"bbbccc","icon":{"path":"./icons/bbbccc.png"}},{"uid":"cccddd","title":"cccddd","subtitle":"Paste class name: bi-cccddd","arg":"cccddd","icon":{"path":"./icons/cccddd.png"}}]}';

    expect(actual).toStrictEqual(expected);
  });
});
