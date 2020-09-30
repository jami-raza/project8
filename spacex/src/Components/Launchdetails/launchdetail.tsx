import React from 'react';
import {LaunchInfoQuery} from '../../generated/graphql';
import Noimage from '../../images/no-image.png';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import ImageGallery from './Gallery';

interface Props {
    data: LaunchInfoQuery
}
const useStyles = makeStyles({
  root: {
    flexgrow:1,      
    
  },
  Subtitle:{
    fontFamily:"Arial",
    color:"#004e92",
    fontSize:28,
    padding:20,
    textAlign:"left",
    
  },
  pos: {
      marginBottom: 12,
      color:"#ffff",
      
      fontSize:18,
      
  },
  tablehead:{
    color:"#ffff",
    fontWeight:"bold",
    fontSize:24,
  },
  title1:{
    color:"#004e92",
    textAlign:"left",
    fontSize:36,
    fontWeight:"bolder",
    padding:50,
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
    media: {
        width:300,
        height:300,
      },
      pos1: {
        marginBottom: 12,
        color:"#ffff",
        fontWeight:"lighter",
        background: 'linear-gradient(45deg, #000428   30%, #004e92 90%)',
        padding:20,
        minWidth: 300,
        minHeight: 100,
    },
  });
  

const LaunchDetails: React.FC<Props> = ({ data }) => {
    const classes = useStyles();

    if (!data.launch){
        return<div>No launches available</div>
    }

    console.log(data.launch.links?.mission_patch_small)
    return(
       <Grid container spacing={2} className={classes.root}>
         
         <Grid item xs ={12} sm={6}>
           <Box p={1} m={1}>
             <Typography  className={classes.title1}>
             {data.launch.mission_name}
             </Typography>
              <Box p={1} m={1}>
              {data.launch.links?.mission_patch_small ? <img className={classes.media} src={data.launch.links?.mission_patch_small}/> :
               <img className={classes.media} src={Noimage}/> }
              </Box>
              <Box p={1} m={1}>
                <Typography className={classes.Subtitle}>
                Description
                </Typography>
              <Typography className={classes.pos1}>
              {data.launch.details}
              </Typography>
          </Box>
          </Box>
         </Grid>
         <Grid item xs={12} sm={6}>
          <Box p={5} m={1}>
            <TableContainer component={Paper}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell align="center" className={classes.tablehead}>
                    Details
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell align="left">
                    <Typography component="p" className={classes.pos}>
                      Mission Name
                      </Typography>
                      </TableCell>
                      <TableCell>
                      <Typography component="p" className={classes.data}>
                      {data.launch.mission_name}
                      </Typography>
                      </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                    <Typography component="p" className={classes.pos}>
                      Launch Year
                      </Typography>
                      </TableCell>
                      <TableCell>
                      <Typography component="p" className={classes.data}>
                      {data.launch.launch_year}
                      </Typography>
                      </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                    <Typography component="p" className={classes.pos}>
                      Launch Site 
                      </Typography>
                      </TableCell>
                      <TableCell>
                      <Typography component="p" className={classes.data}>
                      {data.launch.launch_site?.site_name}
                      </Typography>
                      </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                    <Typography component="p" className={classes.pos}>
                      Launch Date 
                      </Typography>
                      </TableCell>
                      <TableCell>
                      <Typography component="p" className={classes.data}>
                      {data.launch.launch_date_utc}
                      </Typography>
                      </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                    <Typography component="p" className={classes.pos}>
                      Launch Window 
                      </Typography>
                      </TableCell>
                      <TableCell>
                      <Typography component="p" className={classes.data}>
                      {data.launch.launch_window}
                      </Typography>
                      </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                    <Typography component="p" className={classes.pos}>
                      Rocket
                      </Typography>
                      </TableCell>
                      <TableCell>
                      <Typography component="p" className={classes.data}>
                      {data.launch.rocket?.rocket_name}
                      </Typography>
                      </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                    <Typography component="p" className={classes.pos}>
                      Launch Success
                      </Typography>
                      </TableCell>
                      <TableCell>
                      <Typography component="p" className={classes.data}>
                      {data.launch.launch_success ? 'Successfull' : 'Failed'}
                      </Typography>
                      </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                    <Typography component="p" className={classes.pos}>
                      Engine 
                      </Typography>
                      </TableCell>
                      <TableCell>
                      <Typography component="p" className={classes.data}>
                     {data.launch.timeline?.engine_chill ? data.launch.timeline?.engine_chill : <p> N/A </p>}
                     </Typography>
                      </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                    <Typography component="p" className={classes.pos}>
                      First Stage
                      </Typography>
                      </TableCell>
                      <TableCell>
                      <Typography component="p" className={classes.data}>
                     {data.launch.timeline?.first_stage_landing_burn ? data.launch.timeline?.first_stage_landing_burn : <p> N/A </p>}
                     </Typography>
                      </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                    <Typography component="p" className={classes.pos}>
                      Ignition
                      </Typography>
                      </TableCell>
                      <TableCell>
                      <Typography component="p" className={classes.data}>
                     {data.launch.timeline?.ignition ? data.launch.timeline?.ignition : <p> N/A </p>}
                     </Typography>
                      </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                    <Typography component="p" className={classes.pos}>
                      Lift Off
                      </Typography>
                      </TableCell>
                      <TableCell>
                      <Typography component="p" className={classes.data}>
                     {data.launch.timeline?.liftoff ? data.launch.timeline?.liftoff: <p> N/A </p>}
                     </Typography>
                      </TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell>
                  <Typography component="p" className={classes.pos}>
                      Pre Launches
                      </Typography>
                      </TableCell>
                      <TableCell>
                      <Typography component="p" className={classes.data}>
                     {data.launch.timeline?.prelaunch_checks ? data.launch.timeline?.prelaunch_checks : <p> N/A </p>}
                     </Typography>
                      </TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell>
                  <Typography component="p" className={classes.pos}>
                      Web Cast
                      </Typography>
                      </TableCell>
                      <TableCell>
                      <Typography component="p" className={classes.data}>
                     {data.launch.timeline?.webcast_liftoff ? data.launch.timeline?.webcast_liftoff : <p> N/A </p>}
                     </Typography>
                      </TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell>
                  <Typography component="p" className={classes.pos}>
                      Other details
                      </Typography>
                      </TableCell>
                      <TableCell>
                     {data.launch.links?.presskit ? <Link href={data.launch.links.presskit}>Visit Website</Link>: <p> N/A </p>}
                      </TableCell>
                  </TableRow>
                  </TableBody>
              </Table>  
            </TableContainer>
          </Box>
        </Grid>
        <Grid item xs={12}>
        <ImageGallery data={data}/>
        </Grid>
      </Grid>
    )

}
export default LaunchDetails;