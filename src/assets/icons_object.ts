import IconsJson from "@/assets/icons.json";

type TIconObject = Readonly<{
  name: string;
}>;

export const getAllIconsObject = (): TIconObject[] => {
  return IconsJson as TIconObject[];
};
