import React from 'react';
import {ShipsQuery} from '../../generated/graphql';
import Popover from '@material-ui/core/Popover';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
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
      display:"flex",
      flexDirection:"row",
      flexWrap:"wrap",
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
          <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}  >
            {!!data.ships && data.ships.map(
                    (Ship, i) => !!Ship && 
            
                <Card className={classes.card} key={i}>
                  <CardMedia
                  className={classes.media}
                  >
                  {Ship?.image ? <img src={Ship?.image} alt='ships' style={{ maxWidth: '100%', maxHeight: '30vh', minHeight: '50vh', minWidth: '100%' }} /> : null}
                  </CardMedia>
                  <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {Ship?.ship_name}
                </Typography>  
                <Typography className={classes.pos} color="textSecondary">
                    Model - {Ship?.ship_model}
                    Year Build - {Ship?.year_built}
                    Type - {Ship?.ship_type}
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
                <CardActions>
                
                    <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
                    Show images
                    </Button>
                    
                    <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >   
      
                  <Typography className={classes.typography}>
                    
                  </Typography>
                  </Popover>
                    
                </CardActions>
                    </Card>
                    
                    )}
            </Grid>
             
        </Grid>
    )
}

export default CompanyInfo;