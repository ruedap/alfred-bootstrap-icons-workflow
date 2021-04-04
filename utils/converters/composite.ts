import fg from "fast-glob";
import path from "path";

// FIXME
// eslint-disable-next-line
const sharp = require("sharp");
// eslint-disable-next-line
const imagemin = require("imagemin");
// eslint-disable-next-line
const imageminPngquant = require("imagemin-pngquant");

const outputDir = "./assets/icons";
const outputPaths = fg.sync(`${outputDir}/*.png`);

const composite = async (paths: string[]) => {
  return await Promise.all(
    paths.map(async (p) => {
      const buffer = await sharp(p)
        .flatten({ background: "#ffffff" })
        .toBuffer();

      await sharp(buffer).toFile(p, (err: Error, info: string) => {
        if (!err) return;
        throw new Error(`${err}: ${p}`);
      });
    })
  );
};

const minify = async (paths: string[]) => {
  const destination = path.parse(paths[0]).dir;
  return await imagemin(paths, {
    destination,
    plugins: [
      imageminPngquant({
        quality: [0.2, 0.4],
      }),
    ],
  });
};

const EXAMPLES = {
  outputPaths: [
    `./assets/icons2/alarm.png`,
    `./assets/icons2/alarm-fill.png`,
    `./assets/icons2/alt.png`,
  ],
};

const main = async () => {
  const paths = outputPaths;

  console.log("Compositing is progress...");
  await composite(paths);
  console.log("Composited successfully.");

  console.log("Minifying is progress...");
  await minify(paths);
  console.log("Minified successfully.");
};

main();
