import { AppBar, makeStyles, Toolbar, TextField, Box, FormControl, InputLabel, Select, MenuItem, Typography, Slider, Tooltip } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { useState } from "react";
import theme from "../theme";


const useStyles = makeStyles({
       searchToolbarStyle: {
           backgroundColor: theme.palette.secondary.light
       }
    }
    )

function Find(){

    const classes= useStyles();

    const [category, setCategory] = useState("");

    function handleChangeCategory(event){
        setCategory(event.target.value);
    }
    
    return(
        <Grid container direction="column" >
            <Grid container item>
                <AppBar position="static" >
                <Toolbar className={classes.searchToolbarStyle}>
                    <form>
                    <Grid container direction="column">
                        <Grid item xs={12}>
                            <Box mt={2} mb={3}>
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
                                        <MenuItem value={"Plambing"}>Plambing</MenuItem>
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
                                    defaultValue="2017-05-24"
                                    className={classes.textField}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                />
                            </Box>
                        </Grid>
                        <Grid>
                            <Typography gutterBottom>Maximum distance (If set to 0 it will display all distances)</Typography>
                            <Slider color={"secondary"} valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={0} />
                        </Grid>
                    
                    </Grid>
                    </form>
                </Toolbar>
                </AppBar>
            </Grid>

            <Grid container item>
                Tu idu rezultati
            </Grid>

        </Grid>
    )
}

export default Find;

