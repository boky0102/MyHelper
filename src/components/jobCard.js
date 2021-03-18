import { Grid, Box, Typography } from "@material-ui/core";
import React from "react";

function JobCard(){
    return (
        
        <Grid container item direction="row" xs={12}>
            <Grid item xs={2}>
                Slika
            </Grid>
            <Grid item container xs={10} direction="column">
                
                <Grid item xs={12} ><Box mb={2}><Typography>NASLOV fsfdsfsdč</Typography></Box></Grid>
                <Grid item container xs={12}>
                <Grid item container xs={10} direction="column">
                    <Grid item xs={12}>
                        <Typography>Dobar dan ljudi danas imamo novi posao za jendoga od vas koje ce da radi</Typography>
                    </Grid>
                    <Grid item container direction="row" xs={12}>
                        <Grid item xs={6}>
                        <Typography>Category</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography>Deadline</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={2}>
                    <Typography>100$</Typography>
                </Grid>
                </Grid>
            </Grid>
        </Grid>
        
    )
}

export default JobCard;

