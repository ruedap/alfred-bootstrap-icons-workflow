import fg from "fast-glob";

// FIXME
// eslint-disable-next-line
const sharp = require("sharp");

const outputDir = "./assets/icons";
const outputPaths = fg.sync(`${outputDir}/*.png`);

const composite = async (paths: string[]) => {
  await Promise.all(
    paths.map(async (p) => {
      const buffer = await sharp(p)
        .flatten({ background: "#ffffff" })
        .toBuffer();

      await sharp(buffer).toFile(p, (err: Error, info: string) => {
        console.log({ err: err, info: info });
      });
    })
  );
};

const EXAMPLES = {
  outputPaths: [
    `./assets/icons2/alarm.png`,
    `./assets/icons2/alarm-fill.png`,
    `./assets/icons2/alt.png`,
  ],
};

const main = () => {
  composite(EXAMPLES.outputPaths);
};

main();
