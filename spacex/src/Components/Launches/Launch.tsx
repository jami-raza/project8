import React from 'react';
import {LaunchesQuery} from '../../generated/graphql';
import {Card,CardContent,CardActionArea,
CardActions,CardMedia,Typography,Grid,Button,} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface Props {
    data: LaunchesQuery
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
        <Grid item xs={12} >
            <h3>Launches</h3>
            {!!data.launches && data.launches.map(
                    (launch, i) => !!launch && (
        <Grid item xs={12} sm={6} key={i}>
            <Card className={classes.root} >
            <CardActionArea>
                <CardMedia
                className={classes.media} />
            <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
              {launch?.launch_site?.site_name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
          Year - 
        </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
        <Button size="small" color="primary">
          <a href={`$launch?.links?.article_link`}>article</a>
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
            </Card>
            
            </Grid> 
            )
            )} 
        </Grid>
    )
}

export default Launch;