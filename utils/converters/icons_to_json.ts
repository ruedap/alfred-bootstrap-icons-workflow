const path = require('path');
const fs = require('fs')
const fg = require("fast-glob");
const fm = require('front-matter');

type FrontMatter = Readonly<{
  name: string
  title: string
  categories: string[]
  tags: string[]
}>

const getFrontMatters = (): FrontMatter[] => {
  const mds: string[] = fg.sync("./bootstrap-icons/docs/content/icons/*.md");
  const frontMatters: FrontMatter[] = mds.map(md => {
    const name = path.parse(md).name
    const frontMatter = fm(fs.readFileSync(md, 'utf-8'))

    return { 
      name,
      ...frontMatter.attributes
    } as FrontMatter
  })

  return frontMatters
}

const getIcons = (): string[] => {
  const icons = fg.sync("./bootstrap-icons/icons/*.svg");
  return icons.map((p: string) => path.parse(p).name)
}

const main = () => {
  const frontMatters = getFrontMatters()
  const icons = getIcons()

  if (frontMatters.length !== icons.length) {
    throw new Error('The numbers of frontMatters and icons are different.')
  }

  const json = JSON.stringify(frontMatters, null, 2)
  fs.writeFileSync("./assets/icons.json", json)
  console.log(`Output assets/icons.json for ${frontMatters.length} icons`);
};

main();
