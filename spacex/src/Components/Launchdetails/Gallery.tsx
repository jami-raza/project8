import React from 'react';
import {LaunchInfoQuery} from '../../generated/graphql'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';


interface Props {
    data: LaunchInfoQuery
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: "auto",
      height: "auto",
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }),
);


 const ImageGallery:React.FC<Props>=({data})=> {
  const classes = useStyles()
    console.log(data)
  return (
    <div className={classes.root}>
        
      <GridList cellHeight={1200} className={classes.gridList} >
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Image Gallery</ListSubheader>
        </GridListTile>
        
        {!!data.launch?.links?.flickr_images && data.launch.links.flickr_images.map((image,u)=>
        
          <GridListTile key={u}>
              {image ? <img src={image}/> : null}
            <GridListTileBar
              title= {data.launch?.mission_name}
              subtitle={<span>by: {data.launch?.launch_site?.site_name}</span>}
              
            />
            
          </GridListTile>
          )
          }
       
      </GridList>
     
    </div>
  )

}

export default ImageGallery;