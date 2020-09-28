import React from 'react';
import {LaunchesQuery} from '../../generated/graphql';
import {Grid, Button,Card, Box, Typography,Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';

interface Props {
    data: LaunchesQuery,
    
}
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
    pos: {
        marginBottom: 12,
    },
  });

        
            
const Launch: React.FC<Props> = ({data}) =>{
    const classes = useStyles();
    
    return(
        <Grid container spacing={3}>
          {!!data.launches && data.launches.map(
            (launch, i) => 
        
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Box p={2} m={1}>
              <Box p={1} m={1}>
              <Typography variant="h2">
              {launch?.launch_site?.site_name}
              </Typography>
              </Box>
            </Box>
          </Grid>
          )}
          
          </Grid>
    
    
    
    )
  }
            
          
           
export default Launch;