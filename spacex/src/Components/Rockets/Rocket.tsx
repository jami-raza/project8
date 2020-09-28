import React from 'react';
import {RocketsQuery} from '../../generated/graphql';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography'
interface Props {
    data: RocketsQuery
}

const Rockets:React.FC<Props> = ({data}) =>{
    return(
        <Grid container>
            <Grid item xs={12}>
            <h3>Rockets</h3>
            </Grid>
            {!!data.rockets && data.rockets.map(
                    (Rocket, i) => !!Rocket && 
            <Grid item xs={12} sm={6} key={i}>
            
            <Box display="flex" flexDirection="row" flexWrap="wrap" p={1} m={1} bgcolor="background.paper" >
                <Box borderColor="grey.500" p={1} m={1} display="flex" flexDirection="column">
                    <Typography variant="h2" component="h2">
                        {Rocket.rocket_name}
                    </Typography>
                    <Typography>
                        <Typography variant="h6" component="h3" >
                            First Flight
                        </Typography>
                        {Rocket.first_flight}
                    </Typography>
                    <Typography variant="h6" component="h3" >
                            Country
                    </Typography>
                    <Typography>
                        {Rocket.country}
                    </Typography>
                    <Typography variant="h6" component="h3" >
                            Detail
                    </Typography>
                    <Typography>
                        {Rocket.description}
                    </Typography>
                    <Typography variant="h6" component="h3" >
                            Detail
                    </Typography>
                    <Typography>
                        {Rocket.boosters}
                    </Typography>
                    
                </Box>
                <Box>
                </Box>
                
            </Box>
            </Grid>
            )}
            </Grid>
    )
}

export default Rockets;