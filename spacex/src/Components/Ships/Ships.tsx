import React from 'react';
import {ShipsQuery} from '../../generated/graphql';
import Popover from '@material-ui/core/Popover';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    typography: {
      padding: theme.spacing(10),
    },
    root:{
      flexGrow:10,
      
    },
    pos: {
        marginBottom: 12,
    },
    media:{
      height: 140,
    },
    card:{
      maxWidth:345,
      padding: theme.spacing(10),
      
    },
    title:{
      fontFamily:"Helvetica Neue",
      fontSize:36,
      padding:100,
      textAlign:"center",
    },
  }),
);
interface Props{
    data: ShipsQuery
}

const CompanyInfo:React.FC<Props> = ({data}) =>{
  
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
      const open = Boolean(anchorEl);
      const id = open ? 'simple-popover' : undefined;
    return(
          <Grid container className={classes.root} spacing={1}>
            <Grid item xs={12}  >
            <Typography className={classes.title} >
              Launches
            </Typography>
            </Grid>
            {!!data.ships && data.ships.map(
                    (Ship, i) => !!Ship && 
                <Grid item xs={12} sm={6} md={4} key={i}>
                <Card className={classes.card} >
                  <CardActionArea>
                  <CardMedia
                  className={classes.media}
                  >
                  {Ship?.image ? <img src={Ship?.image} alt='ships'  /> : null}
                  </CardMedia>
                  <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {Ship?.ship_name}
                </Typography>  
                <Typography className={classes.pos} color="textSecondary">
                    
                </Typography>   
                <Typography gutterBottom variant="h5" component="h3">
                    Mission - {Ship.missions?.map(   
                      (mission, k) =>
                      <div key={k}>
                        {mission?.flight}
                        {mission?.name}
                        </div>
                      )}
                    </Typography>

                    </CardContent>
                    </CardActionArea>
                
                    </Card>
                    </Grid>
                    )
                    }
            
             
        </Grid>
    )
}

export default CompanyInfo;