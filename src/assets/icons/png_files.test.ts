import fg from "fast-glob";

describe("./assets/icons/*.png", () => {
  test("length", () => {
    const icons: string[] = fg.sync("./assets/icons/*.png");
    expect(icons.length).toBe(1201);
  });
});
