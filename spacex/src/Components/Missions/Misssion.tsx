import React from 'react';
import {MissionQuery} from '../../generated/graphql';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
interface Props{
    data: MissionQuery
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection:'row',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(100),
        height: theme.spacing(10),
      },
    },
  }),
);

const Missions:React.FC<Props> = ({data}) =>{
    const classes = useStyles();

    return(
        <Grid item xs={12}>
            <h3>Missions</h3>
            {!!data.missions && data.missions.map(
                  (Mission, i) => !!Mission &&  (
        <Grid item xs={12} className={classes.root}>
            
                
                <Box display="flex" flexDirection="row" p={10} m={10} bgcolor="background.paper" key={i}>
                <Box p={2} m={2} bgcolor="grey.300">
                <Typography  color="textSecondary" gutterBottom>

                {Mission.mission_name}
                    </Typography>
                
                     
                </Box>
                <Box p={2} m={2} bgcolor="grey.300">
                <Typography variant="body2" color="textSecondary" component="p">

                {Mission.description}
                    </Typography>
                </Box>
                    
                
                          
                </Box>
            
        </Grid>
                  )
            )}
        </Grid>

    )
}

export default Missions;