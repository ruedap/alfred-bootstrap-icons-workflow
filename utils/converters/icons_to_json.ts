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

type Svg = Readonly<{
  name: string
  svg: {
    raw: string
  }
}>

const getSvgs = (): Svg[] => {
  const icons = fg.sync("./bootstrap-icons/icons/*.svg");
  return icons.map((icon) => {
    const name = path.parse(icon).name;
    const svg = fs.readFileSync(icon, "utf-8");
    const svgRaw = JSON.stringify(svg);

    return {
      name,
      svg: {
        raw: svgRaw
      }
    } as Svg
  });
};

const main = () => {
  const frontMatters = getFrontMatters();
  const svgs = getSvgs();

  if (frontMatters.length !== svgs.length) {
    throw new Error("The numbers of frontMatters and svgs are different.");
  }
  
  const obj: TIconObject[] = frontMatters.map((v, i) => {
    if (v.name !== svgs[i].name) {
      throw new Error("The name of frontMatters and svgs are different.");
    }

    return {
      ...v,
      svg: {
        raw: svgs[i].svg.raw
      }
    } as TIconObject
  })

  const json = JSON.stringify(obj, null, 2);
  fs.writeFileSync("./assets/icons.json", json);
  console.log(`Output assets/icons.json for ${frontMatters.length} icons`);
};

main();
