import { getAllIconsObject, TIconObject } from "./assets/icons_object";
import { search, toJson } from "./search";

const EXAMPLE_LIST_1: TIconObject = {
  name: "aaabbb",
  title: "AAABBB",
  categories: ["111", "222"],
  tags: ["100", "200"],
  svg: {
    raw: "",
  },
};

const EXAMPLE_LIST_2: TIconObject = {
  name: "bbbccc",
  title: "BBBCCC",
  categories: ["222", "444"],
  tags: ["200", "400"],
  svg: {
    raw: "",
  },
};

const EXAMPLE_LIST_3: TIconObject = {
  name: "cccddd",
  title: "CCCDDD",
  categories: ["333", "666"],
  tags: ["300", "600"],
  svg: {
    raw: "",
  },
};

const EXAMPLE_LIST: TIconObject[] = [
  EXAMPLE_LIST_1,
  EXAMPLE_LIST_2,
  EXAMPLE_LIST_3,
];

const ACTUAL_LIST = getAllIconsObject();

describe("search()", () => {
  describe("example list", () => {
    test("empty query", () => {
      const query = "";
      const actual = search(EXAMPLE_LIST, query);
      const expected = [
        {
          item: EXAMPLE_LIST_1,
          refIndex: 0,
          score: 0,
        },
        {
          item: EXAMPLE_LIST_2,
          refIndex: 1,
          score: 0,
        },
        {
          item: EXAMPLE_LIST_3,
          refIndex: 2,
          score: 0,
        },
      ];

      expect(actual.length).toBe(3);
      expect(actual).toStrictEqual(expected);
    });

    test("name key", () => {
      const query = "BBB";
      const actual = search(EXAMPLE_LIST, query);
      const expected = [
        {
          item: EXAMPLE_LIST_2,
          refIndex: 1,
          score: 0.00006309573444801936,
        },
        {
          item: EXAMPLE_LIST_1,
          refIndex: 0,
          score: 0.007378528457548093,
        },
      ];

      expect(actual.length).toBe(2);
      expect(actual).toStrictEqual(expected);
    });

    test("categories key", () => {
      const query = "22";
      const actual = search(EXAMPLE_LIST, query);
      const expected = [
        {
          item: EXAMPLE_LIST_1,
          refIndex: 0,
          score: 0.1022565182563573,
        },
        {
          item: EXAMPLE_LIST_2,
          refIndex: 1,
          score: 0.1022565182563573,
        },
      ];

      expect(actual.length).toBe(2);
      expect(actual).toStrictEqual(expected);
    });

    test("tags key", () => {
      const query = "200";
      const actual = search(EXAMPLE_LIST, query);
      const expected = [
        {
          item: EXAMPLE_LIST_1,
          refIndex: 0,
          score: 0.00001448090456013047,
        },
        {
          item: EXAMPLE_LIST_2,
          refIndex: 1,
          score: 0.00001448090456013047,
        },
        {
          item: EXAMPLE_LIST_3,
          refIndex: 2,
          score: 0.5172818579717865,
        },
      ];

      expect(actual.length).toBe(3);
      expect(actual).toStrictEqual(expected);
    });
  });

  describe("actual list", () => {
    test("name key", () => {
      const query = "bootstrap-reboot";
      const actual = search(ACTUAL_LIST, query);
      const expected = [
        {
          item: {
            name: "bootstrap-reboot",
            title: "Bootstrap Reboot",
            categories: ["Bootstrap"],
            tags: ["bootstrap"],
            svg: {
              raw:
                '"<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"16\\" height=\\"16\\" fill=\\"currentColor\\" class=\\"bi bi-bootstrap-reboot\\" viewBox=\\"0 0 16 16\\">\\n  <path fill-rule=\\"evenodd\\" d=\\"M1.161 8a6.84 6.84 0 1 0 6.842-6.84.58.58 0 0 1 0-1.16 8 8 0 1 1-6.556 3.412l-.663-.577a.58.58 0 0 1 .227-.997l2.52-.69a.58.58 0 0 1 .728.633l-.332 2.592a.58.58 0 0 1-.956.364l-.643-.56A6.812 6.812 0 0 0 1.16 8zm5.48-.079V5.277h1.57c.881 0 1.416.499 1.416 1.32 0 .84-.504 1.324-1.386 1.324h-1.6zm0 3.75V8.843h1.57l1.498 2.828h1.314L9.377 8.665c.897-.3 1.427-1.106 1.427-2.1 0-1.37-.943-2.246-2.456-2.246H5.5v7.352h1.141z\\"/>\\n</svg>"',
            },
          },
          refIndex: 158,
          score: 1.7028485066985596e-12,
        },
        {
          item: {
            name: "bootstrap",
            title: "Bootstrap",
            categories: ["Bootstrap"],
            tags: ["bootstrap"],
            svg: {
              raw:
                '"<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"16\\" height=\\"16\\" fill=\\"currentColor\\" class=\\"bi bi-bootstrap\\" viewBox=\\"0 0 16 16\\">\\n  <path fill-rule=\\"evenodd\\" d=\\"M12 1H4a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3zM4 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4z\\"/>\\n  <path fill-rule=\\"evenodd\\" d=\\"M8.537 12H5.062V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396zM6.375 4.658v2.467h1.558c1.16 0 1.764-.428 1.764-1.23 0-.78-.569-1.237-1.541-1.237H6.375zm1.898 6.229H6.375V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377z\\"/>\\n</svg>"',
            },
          },
          refIndex: 159,
          score: 0.19140625,
        },
        {
          item: {
            name: "bootstrap-fill",
            title: "Bootstrap fill",
            categories: ["Bootstrap"],
            tags: ["bootstrap"],
            svg: {
              raw:
                '"<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"16\\" height=\\"16\\" fill=\\"currentColor\\" class=\\"bi bi-bootstrap-fill\\" viewBox=\\"0 0 16 16\\">\\n  <path fill-rule=\\"evenodd\\" d=\\"M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z\\"/>\\n</svg>"',
            },
          },
          refIndex: 157,
          score: 0.20357702451072787,
        },
        {
          item: {
            categories: ["Misc"],
            name: "bookmark-heart-fill",
            svg: {
              raw:
                '"<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"16\\" height=\\"16\\" fill=\\"currentColor\\" class=\\"bi bi-bookmark-heart-fill\\" viewBox=\\"0 0 16 16\\">\\n  <path fill-rule=\\"evenodd\\" d=\\"M4 0a2 2 0 0 0-2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4zm4 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z\\"/>\\n</svg>"',
            },
            tags: ["reading", "book"],
            title: "Bookmark heart fill",
          },
          refIndex: 145,
          score: 0.6684759217372512,
        },
        {
          item: {
            categories: ["Misc"],
            name: "bookmark-heart",
            svg: {
              raw:
                '"<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"16\\" height=\\"16\\" fill=\\"currentColor\\" class=\\"bi bi-bookmark-heart\\" viewBox=\\"0 0 16 16\\">\\n  <path fill-rule=\\"evenodd\\" d=\\"M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z\\"/>\\n  <path fill-rule=\\"evenodd\\" d=\\"M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z\\"/>\\n</svg>"',
            },
            tags: ["reading", "book"],
            title: "Bookmark heart",
          },
          refIndex: 146,
          score: 0.6684759217372512,
        },
      ];

      expect(actual.length).toBe(5);
      expect(actual).toStrictEqual(expected);
    });
  });
});

describe("toJson()", () => {
  test("3 results", () => {
    const searchResult = [
      {
        item: EXAMPLE_LIST_1,
        refIndex: 0,
        score: 7.401486830834377e-17,
      },
      {
        item: EXAMPLE_LIST_2,
        refIndex: 1,
        score: 7.401486830834377e-17,
      },
      {
        item: EXAMPLE_LIST_3,
        refIndex: 2,
        score: 0.1111111111111111,
      },
    ];
    const actual = toJson(searchResult);
    const expected =
      '{"items":[{"title":"aaabbb","subtitle":"Paste SVG code","arg":"aaabbb","icon":{"path":"./icons/aaabbb.png"}},{"title":"bbbccc","subtitle":"Paste SVG code","arg":"bbbccc","icon":{"path":"./icons/bbbccc.png"}},{"title":"cccddd","subtitle":"Paste SVG code","arg":"cccddd","icon":{"path":"./icons/cccddd.png"}}]}';

    expect(actual).toStrictEqual(expected);
  });
});
