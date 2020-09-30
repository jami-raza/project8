import React from 'react';
import {ShipsQuery} from '../../generated/graphql';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Box from '@material-ui/core/Box';
import Noimage from '../../images/no-image.png';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Ships from '../../images/Ship.jpg';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    typography: {
      padding: theme.spacing(1),
    },
    root:{
      flexGrow:10,
      
    },
    pos: {
        marginBottom: 12,
        color:"#ffff",
        fontWeight:"bold",
    },
    tablehead:{
      color:"#ffff",
      fontWeight:"bold",
      fontSize:20,
    },
    data:{
      color:"#ffff",
      fontWeight:"normal",
      fontSize:14,
    },
    media:{
      height: 500,
      width: 600,
      
    },
    table: {
      minWidth: 300,
      minHeight:300,
      background: 'linear-gradient(45deg, #000428   30%, #004e92 90%)',
      
      
    },
    title:{
      fontFamily:"Helvetica Neue",
      color:"#ffff",
      fontWeight:'bold',
      fontSize:36,
      padding:100,
      textAlign:"center",
      backgroundImage:`url(${Ships})`,
      backgroundSize:"cover",
    },
    title1:{
      color:"#004e92",
      textAlign:"center",
      fontSize:28,
      fontWeight:"bolder",
    },

  }),
);
interface Props{
    data: ShipsQuery
}

const CompanyInfo:React.FC<Props> = ({data}) =>{
  
    const classes = useStyles();

    
    return(
          <Grid container className={classes.root} spacing={10}>
            <Grid item xs={12}  >
            <Typography className={classes.title} >
              Ships
            </Typography>
            </Grid>
            {!!data.ships && data.ships.map(
                    (Ship, i) => !!Ship && 
                <Grid item xs={12} sm={6}   key={i}>
                <Box className={classes.typography}>
                
                  <Box p={2} m={1}>
                  <Typography gutterBottom  className={classes.title1}>
                  {Ship.ship_name}
                  </Typography>  
                  </Box>
                  <Box p={2} m={1} >
                
                {Ship?.image ? <img src={Ship?.image} alt='ships'  className={classes.media}/> : <img src={Noimage} className={classes.media}/>}
                  
                
                    </Box>
                
                <Box p={2} m={1}>   
                <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="simple table">
                  <TableHead>
            <TableRow>
              <TableCell align="center"  className={classes.tablehead}>
              Ship Data
            </TableCell>
            </TableRow>
            
            </TableHead>
            <TableBody>
            
              <TableRow >
              <TableCell align="left">
              <Typography component="p" className={classes.pos}>
                Ship Name
              </Typography>
                </TableCell>
              <TableCell align="left" >
              <Typography component="p" className={classes.data}>

                {Ship.ship_name}
              </Typography>
              </TableCell>
              </TableRow>
              <TableRow>
              <TableCell align="left">
              <Typography component="p" className={classes.pos}>
                Year Built
              </Typography>
                </TableCell>
              <TableCell align="left" >
              <Typography component="p" className={classes.data}>
                {Ship.year_built}
                </Typography>
              </TableCell>
              </TableRow>
              <TableRow>
              <TableCell align="left">
              <Typography component="p" className={classes.pos}>
                Weight
              </Typography>
                </TableCell>
              <TableCell align="left" >
              <Typography component="p" className={classes.data}>
                {Ship.weight_kg}-kg
              </Typography>
              </TableCell>
              </TableRow>
              
              <TableRow>
              <TableCell align="left">
              <Typography component="p" className={classes.pos}>
                Home Port
              </Typography>
                </TableCell>
              <TableCell align="left" >
              <Typography component="p" className={classes.data}>
                {Ship.home_port}
                </Typography>
              </TableCell>
              </TableRow>
              <TableRow>
              <TableCell align="left">
              <Typography component="p" className={classes.pos}>
                Ship Type
              </Typography>
                </TableCell>
              <TableCell align="left" >
              <Typography component="p" className={classes.data}>
                {Ship.ship_type}
                </Typography>
              </TableCell>
              </TableRow>
              <TableRow>
              <TableCell align="left">
              <Typography component="p" className={classes.pos}>
                Ship Roles
              </Typography>
                </TableCell>
              <TableCell align="left" >
              <Typography component="p" className={classes.data}>
                {Ship.roles}
              </Typography>
              </TableCell>
              </TableRow>
              <TableRow>
              <TableCell align="left">
              <Typography component="p" className={classes.pos}>
                For full detail
              </Typography>
                </TableCell>
              <TableCell align="left" >
              <Typography component="p" className={classes.data}>
                {Ship.url && (
                  <Link 
                  href={Ship.url}
                  >
                    Visit Site
                  </Link>
                )}
              </Typography>
              </TableCell>
              </TableRow>
            
          
              </TableBody>
              </Table>
              </TableContainer>
              </Box>

                    
                
                    </Box>
                    </Grid>
                    )
                    }
            
             
        </Grid>
    )
}

export default CompanyInfo;