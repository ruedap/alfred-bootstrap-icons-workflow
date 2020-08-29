import { getAllIconsObject } from "./icons_object";

test("getAllIconsObject()", () => {
  const obj = getAllIconsObject();
  expect(obj.length).toBe(1120);

  const actual = obj.find((icon) => icon.name === "bootstrap");
  const expected = {
    name: "bootstrap",
  };
  expect(actual).toStrictEqual(expected);
});
