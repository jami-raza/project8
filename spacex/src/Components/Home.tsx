import React from 'react';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Home1 from '../images/Home/Home1.jpg';
import Home2 from '../images/Home/Home2.jpg';
import Home3 from '../images/Home/Home3.jpg';
import Home4 from '../images/Home/Home4.jpg';
import Home5 from '../images/Home/Home5.jpg';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  media:{
    width:1920,
    height:1277,
  },
  Grid1:{
    backgroundImage:`url(${Home1})`,
    backgroundSize:"cover",
    height:'100vh',
    backgroundPosition: "center center",
    
  },
  Grid2:{
    backgroundImage:`url(${Home2})`,
    backgroundSize:"cover",
    height:'100vh',
  },
  Grid3:{
    backgroundImage:`url(${Home3})`,
    backgroundSize:"cover",
    height:'100vh',
  },
  Grid4:{
    backgroundImage:`url(${Home4})`,
    backgroundSize:"cover",
    height:'100vh',
  },
  Grid5:{
    backgroundImage:`url(${Home5})`,
    backgroundSize:"cover",
    height:'100vh',
  },
  button:{
    padding:20,
    marginTop:'20%',
    
    textAlign:"center",
    background:'linear-gradient(45deg, #000428   30%, #004e92 90%)',
    borderRadius:'10px',
  },
  link:{
    color:"#fff",
    textDecoration:"none",
  },
  
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.Grid1}>
          <Box p={1} m={1}>
            <Button className={classes.button}>
            <Link to="/launches"  className={classes.link}> Launches</Link>
            </Button>
          </Box>  
        </Grid>
        <Grid item xs={12} className={classes.Grid2}>
        <Box p={1} m={1}>
        <Button className={classes.button}>
            <Link to="/about-us" className={classes.link}> About us</Link>
            </Button>
            </Box> 
        </Grid>
        <Grid item xs={12} className={classes.Grid3}>
        <Box p={1} m={1}>
        <Button className={classes.button}>
            <Link to="/rockets" className={classes.link}> Rockets</Link>
            </Button>
            </Box> 
        </Grid>
        <Grid item xs={12} className={classes.Grid4}>
        <Box p={1} m={1}>
        <Button className={classes.button}>
            <Link to="/missions" className={classes.link}> Missions</Link>
            </Button>
            </Box> 
        </Grid>
        <Grid item xs={12} className={classes.Grid5}>
        <Box p={1} m={1}>
        <Button className={classes.button}>
            <Link to="/ships" className={classes.link}> Ships</Link>
        </Button>
        </Box> 
        </Grid>
      </Grid>
    </div>
  );
}
