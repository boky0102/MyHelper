import { AppBar, Avatar, Toolbar, Box } from "@material-ui/core";

import {makeStyles} from "@material-ui/styles";

import avat from "./static/picture.jpg";
import theme from "./theme";
import logo from "./static/drawing2.svg";
import NotificationsIcon from '@material-ui/icons/Notifications';

const useStyles = makeStyles({
    typographySyles: {
      
    },
    avatarStyoes: {
        width:100,
        height:100
        
    },

    toolbarStyle: {
        display: 'flex',
        flexDirection: 'row',
        color: theme.palette.primary.dark,
        justifyContent: 'space-between',
        alignItems:"center"

    },

    iconStyle:{
        alignSelf: "center"
    },

    logoStyle:{
        width: "100%",
        height: "auto"
    },

    appBarStyle: {
        
    }
    
})

function Header(){
    const classes = useStyles();
    return(
        <AppBar  position="static" className={classes.appBarStyle}>
            
            <Toolbar className={classes.toolbarStyle}>
                
                    <Box my={2}>
                        <Avatar src={avat} className={classes.avatarStyoes}></Avatar>
                    </Box>
                    <Box p={1} mx={2}>
                        <img alt="helper logo" src={logo} className={classes.logoStyle}/>
                        
                    </Box>
                    <Box>
                        <NotificationsIcon className={classes.iconStyle} />
                    </Box>
                
            </Toolbar>
            
        </AppBar>
    )
}

export default Header;