import { createMuiTheme, colors } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#6A072F',
      paper: colors.common.black
    },
    primary: {
      contrastText: '#ffffff',
      main: '#770720'
    },
    text: {
      primary: '#F4F5F6',
      secondary: '#3F778F'
    }
  },
  shadows,
  typography
});

export default theme;
