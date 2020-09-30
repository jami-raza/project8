import React from 'react';
import {LaunchesQuery} from '../../generated/graphql';
import {Grid, Box, Typography,Paper} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import Launchs from '../../images/Launch.jpg';

interface Props {
    data: LaunchesQuery,
    
}
const useStyles = makeStyles({
    root: {
      flexgrow:1,      
      
    },
    title:{
      fontFamily:"Helvetica Neue",
      fontSize:36,
      padding:100,
      textAlign:"center",
      backgroundImage:`url(${Launchs})`,
      backgroundSize:"cover",
      color:"#ffff",
      fontWeight:'bold',
      
    },
    pos: {
        marginBottom: 12,
        color:"#ffff",
        fontWeight:"bold",
    },
    tablehead:{
      color:"#ffff",
      
    },
    title1:{
      color:"#004e92",
      textAlign:"center",
      fontSize:28,
      fontWeight:"bolder",
    },
  data:{
    color:"#ffff",
    fontWeight:"normal",
    fontSize:14,
  },
    table: {
      minWidth: 300,
      minHeight:300,
      background: 'linear-gradient(45deg, #000428   30%, #004e92 90%)',
      color:"#ffff",
      
    },
    link:{
      color:"#000428",
      
    },

  });

        
            
const Launch: React.FC<Props> = ({data}) =>{
    const classes = useStyles();
    
    return(
        <Grid container spacing={1} className={classes.root}>
          <Grid item xs={12}>
            <Typography className={classes.title} >
              Launches
            </Typography>
          </Grid>
          {!!data.launches && data.launches.map(
            (launch, i) => 
        
          <Grid item xs={12} sm={6} md={4} key={i} >
            <Box p={2} m={1}>
              <Box p={1} m={1} >
              <Typography  className={classes.title1} align="center">
              {launch?.launch_site?.site_name}
              </Typography>
              </Box>
              
          <Box display="flex" flexDirection="row" p={2} m={2}>
            
           
            <TableContainer component={Paper} >
            <Table className={classes.table} size="small" aria-label="a dense table" >
            <TableHead>
            <TableRow>
              <TableCell align="center" className={classes.tablehead}>
                
            Launch Data
            
            </TableCell>
            
            </TableRow>
            </TableHead>
            <TableBody>
            <TableRow >
              
              <TableCell align="left">
              <Typography component="p" className={classes.pos}>
                Mission Name
              </Typography>
                </TableCell>
              <TableCell align="left" >
              <Typography component="p" className={classes.data}>
                {launch?.mission_name}
                </Typography>
              </TableCell>
              </TableRow>
              <TableRow >
            <TableCell align="left">
              <Typography component="p" className={classes.pos}>
                Launch Year
              </Typography>
                </TableCell>
              <TableCell align="left" >
              <Typography component="p" className={classes.data}>
                {launch?.launch_year}
                </Typography>
              </TableCell>
              </TableRow>
              <TableRow >
            <TableCell align="left">
              <Typography component="p" className={classes.pos}>
                Site Name
              </Typography>
                </TableCell>
              <TableCell align="left" >
              <Typography component="p" className={classes.data}>
                {launch?.launch_site?.site_name}
                </Typography>
              </TableCell>
              </TableRow>

            </TableBody>
            </Table>
            </TableContainer>
              
                
            </Box>
              <Box p={1} m={1}>
              
              
              <Typography component="p"  align="center">
              <Link  to  ={`/launches/${launch?.flight_number}`} style={{ color: '#000428', textDecoration: 'inherit'}} 
              
              >show more</Link>
              </Typography>
              
              </Box>
            </Box>
          </Grid>
          )}
          
          </Grid>
    
    
    
    )
  }
            
          
           
export default Launch;