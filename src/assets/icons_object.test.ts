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
    };
    expect(actual).toStrictEqual(expected);
  });
});
