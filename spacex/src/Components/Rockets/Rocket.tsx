import React from 'react';
import {RocketsQuery} from '../../generated/graphql';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Rocket from '../../images/Rocket.jpg';
import ImageGallery from './Gallery';
interface Props {
    data: RocketsQuery
}

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #000428   30%, #004e92 90%)',
      color:"#ffff"
    },
    typography:{
        fontFamily:"Helvetica Neue",
        fontSize:36,
    },
    title:{
        fontFamily:"Helvetica Neue",
      fontSize:36,
      padding:100,
      textAlign:"center",
      backgroundImage:`url(${Rocket})`,
      backgroundSize:"cover",
      color:"#ffff",
      fontWeight:'bold',
    },
  });

const Rockets:React.FC<Props> = ({data}) =>{
    const classes = useStyles()
    

    
    return(
        <Grid container>
            <Grid item xs={12}>
            <Typography className={classes.title}>Rockets</Typography>
            </Grid>
            {!!data.rockets && data.rockets.map(
                    (Rocket, i) => !!Rocket && 
            <Grid item xs={12} sm={6} key={i} >
            
            <Box display="flex" flexDirection="row" flexWrap="wrap" p={2} m={2} bgcolor="background.paper" className={classes.root} >
                <Box borderColor="grey.500" p={2} m={1} display="flex" flexDirection="column" >
                    <Box p={1} m={1}>
                    <Typography variant="h2" component="h2" className={classes.typography}>
                        {Rocket.rocket_name}
                    </Typography>
                    </Box>
                    
                    <Box p={2} >
                        <Typography variant="h6" component="h3" >
                            First Flight
                        </Typography>
                        <Typography>
                        {Rocket.first_flight}
                    </Typography>
                    </Box>
                    <Box p={2} >
                    <Typography variant="h6" component="h3" >
                            Country
                    </Typography>

                    <Typography>
                        {Rocket.country}
                    </Typography>
                    </Box>
                    <Box p={2} m={0}>
                    <Typography variant="h6" component="h3" >
                            Detail
                    </Typography>
                    <Typography>
                        {Rocket.description}
                    </Typography>
                    </Box>
                    <Box p={2} m={0}>
                    <Typography variant="h6" component="h3" >
                            Cost per Launch
                    </Typography>
                    <Typography>
                        {Rocket.cost_per_launch}
                    </Typography>
                    </Box>
                    
                    
                

                
                
            </Box>
            </Box>
            </Grid>
            
            )
            }
            <ImageGallery data={data}/>
            </Grid>
    )
}

export default Rockets;