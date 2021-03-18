import { Grid, Box, Typography } from "@material-ui/core";
import React from "react";

function JobCard(){

    const a  = "Dobar dan moze li mi netko pomoci popraviti ovu ves masinu vec je jako stara";
    return (
        
        <Grid container item direction="row" xs={12}>
            
            <Grid item xs={2}>
                Slika
            </Grid>
            <Grid item container xs={10} direction="column">
                
                <Grid item xs={12} ><Box mb={2}><Typography>Potrebna mi je pomoc oko drva</Typography></Box></Grid>
                <Grid item container xs={12}>
                <Grid item container xs={11} direction="column">
                    <Grid item xs={12}>
                        <Typography>{a.substring(0,30)+" ..."}</Typography>
                    </Grid>
                    <Grid item container direction="row" xs={12}>
                        <Grid item xs={4}>
                        <Typography>Category</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography>Deadline</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography>Distance: </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <Typography>100$</Typography>
                </Grid>
                </Grid>
            </Grid>
            
        </Grid>
        
    )
}

export default JobCard;

