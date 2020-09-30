import React from 'react';
import {MissionQuery} from '../../generated/graphql';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import LanguageRoundedIcon from '@material-ui/icons/LanguageRounded';
import Mission from '../../images/Mission.jpg'; 
interface Props{
    data: MissionQuery
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        flexGrow:10,
    },
    pos: {
        marginBottom: 12,
        color:"#ffff",
        fontWeight:"lighter",
        background: 'linear-gradient(45deg, #000428   30%, #004e92 90%)',
        padding:20,
        minWidth: 300,
        minHeight: 100,
    },

    title:{
        fontFamily:"Helvetica Neue",
        fontSize:36,
        padding:100,
        textAlign:"center",
        backgroundImage:`url(${Mission})`,
        backgroundSize:"cover",
        color:"#ffff",
      fontWeight:'bold',
      },
      title1:{
        color:"#004e92",
        textAlign:"center",
        fontSize:28,
        fontWeight:"bolder",
        marginBottom: 12,
      },
      link:{
        marginBottom: 12,
          
          color:"#ffff",
          textDecoration:"none",
      },
  }),
);

const Missions:React.FC<Props> = ({data}) =>{
    const classes = useStyles();

    return(
        <Grid container spacing={5}>
            <Grid item xs={12}>
            <Typography className={classes.title} >
              Missions
            </Typography>
            </Grid>
            {!!data.missions && data.missions.map(
                  (Mission, i) => !!Mission &&  (
            <Grid item xs={12} sm={6} className={classes.root} key={i}>
            
                
                <Box >
                <Box p={2} m={1} >
                <Typography gutterBottom className={classes.title1} >
                {Mission.mission_name}
                </Typography>
                <Typography className={classes.pos}>
                {Mission.description}
                <Typography >
                    <LanguageRoundedIcon/>
                {Mission.wikipedia && (
                        <Link
                        href={Mission.wikipedia}
                        className={classes.link}
                        target="_blank"
                        >
                            Wikipedia
                        </Link>
                    )}
                </Typography>
                </Typography>
                
                </Box>
                <Box p={2} m={1} >
                
                
                   
                    

                </Box>  
                
                          
                </Box>
            
        </Grid>
                  )
            )}
        </Grid>

    )
}

export default Missions;