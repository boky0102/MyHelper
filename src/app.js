import React from "react";

import { Button, Container, Toolbar, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Header from './header';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Find from "./routes/find";
import Messager from "./routes/messages";
import MyJobs from "./routes/myJobs";
import Myprofile from "./routes/myProfile";
import NewJob from "./routes/newJob";

const useStyles = makeStyles(
    {
        helloThereStyle: {
            fontStyle: 'normal'
        }
    }
)


function App(){
    const classes = useStyles();
    return (
        <Router>
        <div className='App'>
            
            <Grid container>
                <Grid xs={0} sm={2}></Grid>
                <Grid xs={12} md={8} container direction="column">
                    <Header/>

                    <Grid container my={3}>
                        <Grid  item xs={12} sm={4}>
                            <Button href="/find" size="large" color="secondary" fullWidth>FIND JOB</Button>
                            <Button href="/newJob" size="large" color="secondary" fullWidth>POST JOB</Button>
                            <Button href="/messages" size="large" color="secondary" fullWidth>MESSAGES</Button>
                            <Button href="/myJobs" size="large" color="secondary" fullWidth>MY JOBS</Button>
                            <Button href="/myprofile" size="large" color="secondary" fullWidth>MY PROFILE</Button>
                        </Grid>


                       
                        <Grid conteiner item xs={12} sm={8}><Box p={1}>
                        
                        <Switch>
                            <Route path="/find">
                                <Find />
                            </Route>
                            <Route path="/newJob">
                                <NewJob />
                            </Route>
                            <Route path="/messages">
                                <Messager />
                            </Route>
                            <Route path="/myJobs">
                                <MyJobs />
                            </Route>
                            <Route path="/myprofile">
                                <Myprofile />
                            </Route>
                            <Route path="/">
                                <Myprofile />
                            </Route>
                        </Switch>
                           </Box>
                        </Grid>
                    </Grid>
                        
                </Grid>
                <Grid xs={0} sm={2}></Grid>

                
            
            </Grid>
            
        </div>
        </Router>
    )
}

export default App