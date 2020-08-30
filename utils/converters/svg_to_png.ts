import fg from "fast-glob";
import path from "path";

// FIXME
// eslint-disable-next-line
const svgexport = require("svgexport");

const inputPaths = fg.sync("./bootstrap-icons/icons/*.svg");
const outputPath = (name: string): string => `./assets/icons/${name}.png`;

type TSvg = Readonly<{
  input: string; // e.g. "./bootstrap-icons/icons/alarm.svg"
  output: string; // e.g. "./assets/icons2/alarm.png pad 300:300"
}>;

const PARAMS = "pad 300:300";

const svgs: TSvg[] = inputPaths.map((p: string) => {
  const name = path.parse(p).name;
  return {
    input: p,
    output: `${outputPath(name)} ${PARAMS}`,
  } as TSvg;
});

const svgsExample: TSvg[] = [
  {
    input: `./bootstrap-icons/icons/alarm.svg`,
    output: `./assets/icons2/alarm.png ${PARAMS}`,
  },
  {
    input: `./bootstrap-icons/icons/alarm-fill.svg`,
    output: `./assets/icons2/alarm-fill.png ${PARAMS}`,
  },
  {
    input: `./bootstrap-icons/icons/alt.svg`,
    output: `./assets/icons2/alt.png ${PARAMS}`,
  },
];

const convert = () => {
  svgexport.render(svgs, (err: Error) => {
    if (err) {
      console.log(err);
      process.exit(1);
    } else {
      console.log(`success!`);
    }
  });
};

const main = () => {
  convert();
};

main();
