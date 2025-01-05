import { createTheme, MantineColorsTuple } from "@mantine/core";

const colors: MantineColorsTuple = [
  "#f0fde9",
  "#e3f8d6",
  "#c5f1ac",
  "#a5e97e",
  "#8ae257",
  "#78de3f",
  "#6fdc32",
  "#5dc324",
  "#51ad1c",
  "#41960f",
];
export const theme = createTheme({
  colors: { colors },
});
