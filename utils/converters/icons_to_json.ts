const path = require('path');
const fs = require('fs')
const fg = require("fast-glob");

const main = () => {
  const paths = fg.sync("./bootstrap-icons/icons/*");

  const names = paths.map((p: string) => path.parse(p).name)
  const obj = names.map((n: string) => {
    return {
      name: n
    }
  })
  const json = JSON.stringify(obj, null, 2)
  fs.writeFileSync("./assets/icons.json", json)
  console.log(`${obj.length} icons`);
};

main();
