import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';


const theme = createMuiTheme({
  palette: {
    primary: {
        light: "#ffffa6",
        main: "#dce775",
        dark: "a8b545"
    },
    secondary: {
      main: "#ffb74d",
      light: "#ffe97d",
      dark: "#c88719"
    },
  },
});

export default theme;