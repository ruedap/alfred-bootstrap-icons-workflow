import { toJson, TResponse } from "./response";

const response: TResponse = {
  items: [
    {
      uid: "bootstrap",
      title: "bootstrap",
      subtitle: "Paste SVG code",
      arg: "bootstrap",
      icon: {
        type: "fileicon",
        path: "./icons/bootstrap.png",
      },
    },
    {
      uid: "bag-plus",
      title: "bag-plus",
      subtitle: "Paste SVG code",
      arg: "bag-plus",
      icon: {
        type: "fileicon",
        path: "./icons/bag-plus.png",
      },
    },
  ],
};

test("toJson", () => {
  const actual = toJson(response);
  const expected =
    '{"items":[{"uid":"bootstrap","title":"bootstrap","subtitle":"Paste SVG code","arg":"bootstrap","icon":{"type":"fileicon","path":"./icons/bootstrap.png"}},{"uid":"bag-plus","title":"bag-plus","subtitle":"Paste SVG code","arg":"bag-plus","icon":{"type":"fileicon","path":"./icons/bag-plus.png"}}]}';
  expect(actual).toBe(expected);
});
