import { getAllIconsObject } from "./icons_object";

describe("getAllIconsObject()", () => {
  test("length", () => {
    const obj = getAllIconsObject();
    expect(obj.length).toBe(1325);
  });

  test("icon: bootstrap", () => {
    const obj = getAllIconsObject();
    const actual = obj.find((icon) => icon.name === "bootstrap");
    const expected = {
      name: "bootstrap",
      title: "Bootstrap",
      categories: ["Bootstrap"],
      tags: ["bootstrap"],
      svg: {
        raw:
          '"<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"16\\" height=\\"16\\" fill=\\"currentColor\\" class=\\"bi bi-bootstrap\\" viewBox=\\"0 0 16 16\\">\\n  <path d=\\"M5.062 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377H6.375z\\"/>\\n  <path d=\\"M0 4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4zm4-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H4z\\"/>\\n</svg>"',
      },
    };
    expect(actual).toStrictEqual(expected);
  });

  test("icon: bag-plus", () => {
    const obj = getAllIconsObject();
    const actual = obj.find((icon) => icon.name === "bag-plus");
    const expected = {
      name: "bag-plus",
      title: "Bag plus",
      layout: "icon",
      categories: ["Commerce"],
      tags: ["shopping", "checkout", "check", "cart", "basket", "bag"],
      svg: {
        raw:
          '"<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"16\\" height=\\"16\\" fill=\\"currentColor\\" class=\\"bi bi-bag-plus\\" viewBox=\\"0 0 16 16\\">\\n  <path fill-rule=\\"evenodd\\" d=\\"M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z\\"/>\\n  <path d=\\"M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z\\"/>\\n</svg>"',
      },
    };
    expect(actual).toStrictEqual(expected);
  });
});
