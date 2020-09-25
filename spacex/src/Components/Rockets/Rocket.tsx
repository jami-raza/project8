import React from 'react';
import {RocketsQuery} from '../../generated/graphql';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

interface Props {
    data: RocketsQuery
}

const Rockets:React.FC<Props> = ({data}) =>{
    return(
        <Grid item xs={12} sm={6}>
            {!!data.rockets && data.rockets.map(
                    (Rocket, i) => !!Rocket && 
            <Box display="flex" flexDirection="row" p={1} m={1} bgcolor="background.paper" key={i}>
            <h3>Rockets</h3>
            <div>
                
                    <li >
                        {Rocket.rocket_name}
                        {Rocket.flickr_images}
                        {Rocket.description}
                        {Rocket.cost_per_launch}
                    </li>
                
            </div>
            </Box>
            )}
            </Grid>
    )
}

export default Rockets;