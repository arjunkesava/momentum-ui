/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const colors = require("@momentum-ui/tokens/dist/colors.json");

const checkbox = {
  prefix: "md",
  component: "checkbox",

  "bg-color": {
    light: colors.white[60].name,
    dark: colors.gray[95].name
  },
  "text-color": {
    light: colors.gray[90].name,
    dark: colors.gray[10].name
  },
  "border-color": {
    light: colors.gray[70].name,
    dark: colors.gray[40].name
  },
  "icon-color": {
    light: colors.white[100].name,
    dark: colors.white[100].name
  },
  hover: {
    "bg-color": {
      light: colors.gray[20].name,
      dark: colors.gray[90].name
    },
    "border-color": {
      light: colors.gray[70].name,
      dark: colors.gray[40].name
    }
  },
  pressed: {
    "bg-color": {
      light: colors.gray[30].name,
      dark: colors.gray[80].name
    },
    "border-color": {
      light: colors.gray[40].name,
      dark: colors.gray[70].name
    }
  },
  selected: {
    "bg-color": {
      light: colors.theme[50].name,
      dark: colors.theme[50].name
    },
    "border-color": {
      light: colors.theme[50].name,
      dark: colors.theme[50].name
    },
    "hover-bg-color": {
      light: colors.theme[60].name,
      dark: colors.theme[60].name
    },
    "hover-border-color": {
      light: colors.theme[60].name,
      dark: colors.theme[60].name
    },
    "pressed-bg-color": {
      light: colors.theme[70].name,
      dark: colors.theme[70].name
    },
    "pressed-border-color": {
      light: colors.theme[70].name,
      dark: colors.theme[70].name
    }
  },
  focus: {
    "border-color": {
      light: "transparent",
      dark: "transparent"
    },
    "shadow-color": {
      light: "0 0 4px 2px $md-blue-50",
      dark: "0 0 4px 2px $md-blue-50"
    }
  }
};

module.exports = checkbox;
