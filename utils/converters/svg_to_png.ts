import fg from "fast-glob";
import path from "path";

// FIXME
// eslint-disable-next-line
const svgexport = require("svgexport");

const inputPaths = fg.sync("./bootstrap-icons/icons/*.svg");
const outputDir = "./assets/icons";
const outputPath = (name: string): string => `${outputDir}/${name}.png`;

type TSvg = Readonly<{
  input: string; // e.g. "./bootstrap-icons/icons/alarm.svg"
  output: string; // e.g. "./assets/icons/alarm.png pad 300:300"
}>;

const PARAMS = "pad 300:300";

const SVGS: TSvg[] = inputPaths.map((p: string) => {
  const name = path.parse(p).name;
  return {
    input: p,
    output: `${outputPath(name)} ${PARAMS}`,
  } as TSvg;
});

const convert = (svgs: TSvg[]) => {
  svgexport.render(svgs, process);
};

const EXAMPLES = {
  SVGS: [
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
  ],
};

const main = () => {
  convert(EXAMPLES.SVGS);
};

main();
