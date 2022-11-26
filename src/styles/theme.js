export const baseTheme = {
  colors: {
    background: 'linear-gradient(299.75deg, #b9d5ff 0%, #f6d1fc 98.93%)',
    white: '#ffffff',
    grey: '#f3f3f3',
    purple: '#9333ea',
    fontGrey: '#6B7280',
  },
  dFAcJc: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dFAcJSB: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dFDcAcJc: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
};

export const darkTheme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    background: '#271d27',
  },
};
