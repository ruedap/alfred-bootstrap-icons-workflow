import { getAllIcons, toResponseItem } from "./icons";

test("toResponseItem()", () => {
  const iconObject = {
    name: "bootstrap",
    title: "Bootstrap",
    categories: ["Bootstrap"],
    tags: ["bootstrap"],
    svg: {
      raw:
        '"<svg width=\\"1em\\" height=\\"1em\\" viewBox=\\"0 0 16 16\\" class=\\"bi bi-bootstrap\\" fill=\\"currentColor\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n  <path fill-rule=\\"evenodd\\" d=\\"M12 1H4a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3zM4 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4z\\"/>\\n  <path fill-rule=\\"evenodd\\" d=\\"M8.537 12H5.062V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396zM6.375 4.658v2.467h1.558c1.16 0 1.764-.428 1.764-1.23 0-.78-.569-1.237-1.541-1.237H6.375zm1.898 6.229H6.375V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377z\\"/>\\n</svg>"',
    },
  };

  const actual = toResponseItem(iconObject);
  const expected = {
    title: "bootstrap",
    subtitle: "Paste SVG code",
    arg: "bootstrap",
    icon: { path: "./icons/bootstrap.png" },
  };
  expect(actual).toStrictEqual(expected);
});

test("getAllIcons()", () => {
  const allIcons = getAllIcons();
  expect(allIcons.items.length).toBe(1370);

  const actual = allIcons.items.find((icon) => icon.arg === "bootstrap");
  const expected = {
    title: "bootstrap",
    subtitle: "Paste SVG code",
    arg: "bootstrap",
    icon: { path: "./icons/bootstrap.png" },
  };
  expect(actual).toStrictEqual(expected);
});
