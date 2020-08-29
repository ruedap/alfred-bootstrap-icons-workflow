import fg from "fast-glob";
import fm from "front-matter";
import fs from "fs";
import path from "path";
import type { TIconObject } from "@/src/assets/icons_object";

const getFrontMatters = (): TIconObject[] => {
  const mds: string[] = fg.sync("./bootstrap-icons/docs/content/icons/*.md");
  const frontMatters: TIconObject[] = mds.map((md) => {
    const name = path.parse(md).name;
    const frontMatter = fm(fs.readFileSync(md, "utf-8")).attributes as Omit<
      TIconObject,
      "name"
    >;

    return {
      name,
      ...frontMatter,
    } as TIconObject;
  });

  return frontMatters;
};

const getIcons = (): string[] => {
  const icons = fg.sync("./bootstrap-icons/icons/*.svg");
  return icons.map((p: string) => path.parse(p).name);
};

const main = () => {
  const frontMatters = getFrontMatters();
  const icons = getIcons();

  if (frontMatters.length !== icons.length) {
    throw new Error("The numbers of frontMatters and icons are different.");
  }

  const json = JSON.stringify(frontMatters, null, 2);
  fs.writeFileSync("./assets/icons.json", json);
  console.log(`Output assets/icons.json for ${frontMatters.length} icons`);
};

main();
