import { getAllIcons, toResponseItem } from "./icons";

test("toResponseItem()", () => {
  const iconObject = {
    name: "bootstrap",
    title: "Bootstrap",
    categories: ["Bootstrap"],
    tags: ["bootstrap"],
  };

  const actual = toResponseItem(iconObject);
  const expected = {
    uid: "bootstrap",
    title: "bootstrap",
    subtitle: "Paste class name: bi-bootstrap",
    arg: "bootstrap",
    icon: { path: "./icons/bootstrap.png" },
  };
  expect(actual).toStrictEqual(expected);
});

test("getAllIcons()", () => {
  const allIcons = getAllIcons();
  expect(allIcons.items.length).toBe(1120);

  const actual = allIcons.items.find((icon) => icon.uid === "bootstrap");
  const expected = {
    uid: "bootstrap",
    title: "bootstrap",
    subtitle: "Paste class name: bi-bootstrap",
    arg: "bootstrap",
    icon: { path: "./icons/bootstrap.png" },
  };
  expect(actual).toStrictEqual(expected);
});
