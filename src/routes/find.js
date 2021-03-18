import { AppBar, makeStyles, Toolbar, TextField, Box, FormControl, InputLabel, Select, MenuItem, Typography, Slider, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { useState } from "react";
import theme from "../theme";
import SearchIcon from '@material-ui/icons/Search';
import JobCard from "../components/jobCard";


const useStyles = makeStyles({
       searchToolbarStyle: {
           backgroundColor: theme.palette.secondary.light
       },

       searchIconStyle: {
            display: "flex",
            flexDirection: "row",
            justifyContent: 'space-between',
            alignItems:"center"
       }
    }
    )

function Find(){



    const classes= useStyles();

    const [category, setCategory] = useState("");

    function handleChangeCategory(event){
        setCategory(event.target.value);
    }

    function add2Weeks(){
        var date = new Date();
        date.setDate(date.getDate() + 14);

        const ye = date.getFullYear();
        var mon = date.getMonth()+1;
        mon = mon.toString();


        if(mon.length === 1){
            mon="0"+mon;
        }

        var day = date.getDate();
        day = day.toString();
        if(day.length === 1){
            day="0"+day;
        }
        

        return `${ye}-${mon}-${day}`
        
      
    }

    console.log(add2Weeks());

    

    
    
    return(
        <Grid container direction="column" >
            <Grid container item>
                <AppBar position="static" >
                <Toolbar className={classes.searchToolbarStyle}>
                    <form action='get'>
                    <Grid container direction="column">
                        <Grid item xs={12}>
                            <Box mt={2} mb={1}>
                            <TextField color="secondary" fullWidth="true" id="standard-basic" size="medium" placeholder="Search by title"></TextField>
                            </Box>
                        </Grid>

                        <Grid>
                            <Box pb={2}>
                            <FormControl className={classes.formControl}>
                                <InputLabel  color="secondary">Category</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={category}
                                    onChange={handleChangeCategory}
                                    color="secondary"

                                    >
                                        <MenuItem value={"Any"}>Any</MenuItem>
                                        <MenuItem value={"Digital"}>Digital</MenuItem>
                                        <MenuItem value={"Hard Labour"}>Hard Labour</MenuItem>
                                        <MenuItem value={"Cleaning"}>Cleaning</MenuItem>
                                        <MenuItem value={"Gardening"}>Gardening</MenuItem>
                                        <MenuItem value={"Driving"}>Driving</MenuItem>
                                        <MenuItem value={"Teaching"}>Teaching</MenuItem>
                                        <MenuItem value={"Furniture moving"}>Furniture moving</MenuItem>
                                        <MenuItem value={"Furniture building"}>Furniture Building</MenuItem>
                                        <MenuItem value={"Machine fixing"}>Machine fixing</MenuItem>
                                        <MenuItem value={"Plumbing"}>Plumbing</MenuItem>
                                     </Select>
                             </FormControl>
                            </Box>
                        </Grid>

                        <Grid item>
                            <Box mb={2}>
                                <TextField
                                    color="secondary"
                                    id="date"
                                    label="Deadline before"
                                    type="date"
                                    defaultValue={add2Weeks()}
                                    className={classes.textField}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                />
                            </Box>
                        </Grid>
                        <Grid> <Typography gutterBottom >Maximum distance in km (If set to 0 it will display all distances)</Typography></Grid>
                        <Box mb={2}>
                        <Grid container item direction="row" justify="space-evenly">
                            <Grid item xs={12} sm={4}>
                                
                                <Slider color={"secondary"} valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={0} />

                            </Grid>
                            <Grid item xs={0} sm={4}>

                            </Grid>
                            <Grid item xs={12} sm={4}>

                                <Button variant="contained" color="primary" endIcon={<SearchIcon/>}>Search</Button>
                            </Grid>
                            
                            
                        </Grid>
                        </Box>
                    
                    </Grid>
                    </form>
                </Toolbar>
                </AppBar>
            </Grid>

            <Grid container item xs={11} direction="column" alignContent="center" >
            
                <Box width="inherit" mt={2} borderBottom={1}>
                    <JobCard/>
                </Box>

                <Box width="inherit" mt={2} borderBottom={1}>
                    <JobCard/>
                </Box>

                <Box width="inherit" mt={2} borderBottom={1}>
                    <JobCard/>
                </Box>

                <Box width="inherit" mt={2} borderBottom={1}>
                    <JobCard/>
                </Box>
                
                
            </Grid>

        </Grid>
    )
}

export default Find;

