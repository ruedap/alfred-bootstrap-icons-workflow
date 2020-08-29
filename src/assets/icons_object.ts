import IconsJson from "@/assets/icons.json";

export type TIconObject = Readonly<{
  name: string;
  title: string;
  categories: string[];
  tags: string[];
  layout?: string;
  svg: {
    raw: string;
  };
}>;

export const getAllIconsObject = (): TIconObject[] => {
  return IconsJson as TIconObject[];
};
