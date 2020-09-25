import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../images/logo';
import { ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 50,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
    color:"#2E3B55"
  },
  style:{
      background: "transparent"
  },
  logo:{
      marginTop:50,
  },
}));

export default function Header() {
  const classes = useStyles();
  

  return (
    <div className={classes.root}>
      <AppBar className={classes.style} position="static">
        <Toolbar className={classes.toolbar}>
          
          <Typography className={classes.title} variant="h3" noWrap>
            SPACE <Logo />
          </Typography>

          
          
          <IconButton aria-label="display more actions" edge="end" color="inherit">
            
            <ListItem>
                <Link to="/"> Home</Link>
                <Link to="/about-us"> About</Link>
                <Link to="/launches"> Launches</Link>
                <Link to="/missions"> Missions</Link>
                <Link to="/rockets"> Rockets</Link>
                <Link to="/ships"> Ships</Link>
                
                
                
                
                
            </ListItem>
           
          </IconButton>
        </Toolbar>
        
      </AppBar>
    </div>
  );
}
