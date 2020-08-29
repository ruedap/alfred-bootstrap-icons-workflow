import { putName, putUrl } from "./put";

describe("putName()", () => {
  test("empty", () => {
    const actual = putName("");
    expect(actual).toBe(null);
  });

  test("icon: bootstrap", () => {
    const actual = putName("bootstrap");
    expect(actual).toBe("bi-bootstrap");
  });
});

describe("putUrl()", () => {
  test("empty", () => {
    const actual = putUrl("");
    expect(actual).toBe(null);
  });

  test("icon: bootstrap", () => {
    const actual = putUrl("bootstrap");
    expect(actual).toBe("https://icons.getbootstrap.com/icons/bootstrap/");
  });
});
