import type { ThemeConfig } from 'antd';

export const cssTheme = {
  '--color-brand': '#E95656',
  '--color-brand-light': '#0d6745',
  '--color-brand-dark': '#001522',
  '--color-background': '#FFFFFF',
  '--color-foreground': '#000',
  '--color-neutral-100': '#222222',
  '--color-neutral-200': '#d9d9d9',
  '--color-neutral-300': '#D8D8D8',
  '--color-neutral-400': '#f6f6f6',
  '--color-neutral-600': '#646464',
  '--color-neutral-700': '#323232',
  '--color-neutral-f4': '#f4f4f4',
  '--spacing-0': '0.125rem',
  '--spacing-1': '0.5rem',
  '--spacing-2': '1rem',
  '--spacing-3': '1.5rem',
  '--spacing-4': '2rem',
  '--spacing-5': '3rem',
  '--spacing-6': '4rem',
  '--spacing-7': '6rem',
};

function remToPx(rem: string) {
  return Number(rem.replace('rem', '')) * 16;
}

export const theme: ThemeConfig = {
  cssVar: true,
  token: {
    colorBorder: cssTheme["--color-brand"],
    colorPrimary: cssTheme["--color-brand"],
    colorText: cssTheme["--color-foreground"],
    colorBgContainer: cssTheme["--color-background"],
    colorLink: cssTheme["--color-foreground"],
    colorLinkHover: cssTheme["--color-brand"],
    colorTextHeading: cssTheme["--color-background"],
    paddingLG: remToPx(cssTheme["--spacing-4"]),
    borderRadius: remToPx(cssTheme["--spacing-0"]),
    controlHeightLG: remToPx(cssTheme["--spacing-5"]),
  },
  components: {
    Radio: {
      buttonBg: cssTheme["--color-neutral-400"],
    },
    Collapse: {
      headerBg: cssTheme["--color-background"],
      contentBg: cssTheme["--color-neutral-300"],
    },
    Button: {
      defaultColor: cssTheme["--color-brand"],
      borderRadius: 99,
    },
    Form: {
      labelColor: cssTheme["--color-neutral-100"],
    },
  },
};
