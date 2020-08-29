import { getAllIconsObject } from "./icons_object";

describe("getAllIconsObject()", () => {
  test("length", () => {
    const obj = getAllIconsObject();
    expect(obj.length).toBe(1120);
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
          '"<svg width=\\"1em\\" height=\\"1em\\" viewBox=\\"0 0 16 16\\" class=\\"bi bi-bootstrap\\" fill=\\"currentColor\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n  <path fill-rule=\\"evenodd\\" d=\\"M12 1H4a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3zM4 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4z\\"/>\\n  <path fill-rule=\\"evenodd\\" d=\\"M8.537 12H5.062V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396zM6.375 4.658v2.467h1.558c1.16 0 1.764-.428 1.764-1.23 0-.78-.569-1.237-1.541-1.237H6.375zm1.898 6.229H6.375V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377z\\"/>\\n</svg>"',
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
          '"<svg width=\\"1em\\" height=\\"1em\\" viewBox=\\"0 0 16 16\\" class=\\"bi bi-bag-plus\\" fill=\\"currentColor\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n  <path fill-rule=\\"evenodd\\" d=\\"M8 1a2.5 2.5 0 0 0-2.5 2.5V4h5v-.5A2.5 2.5 0 0 0 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5H2z\\"/>\\n  <path fill-rule=\\"evenodd\\" d=\\"M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z\\"/>\\n</svg>"',
      },
    };
    expect(actual).toStrictEqual(expected);
  });
});
