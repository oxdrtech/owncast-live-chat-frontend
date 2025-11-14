import { MantineColorsTuple } from "@mantine/core";

const response = {
  "customization": {
    "defaultColor": [
      "#dffbff",
      "#caf2ff",
      "#99e2ff",
      "#64d2ff",
      "#3cc4fe",
      "#23bcfe",
      "#00b5ff",
      "#00a1e4",
      "#008fcd",
      "#007cb6"
    ],
    "defaultColorScheme": "auto"
  }
}

const defaultColor: MantineColorsTuple = response.customization.defaultColor as unknown as MantineColorsTuple;

export const useColors = {
  defaultColor,
};

// #FFA903 -- defaultColor
