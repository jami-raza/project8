import React from 'react';
import {RocketsQuery} from '../../generated/graphql'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

interface Props {
    data: RocketsQuery
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

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
 const ImageGallery:React.FC<Props>=({data})=> {
  const classes = useStyles()
    console.log(data.rockets)
  return (
    <div className={classes.root}>
      <GridList cellHeight={1200} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">dfsdf</ListSubheader>
        </GridListTile>
        {!!data.rockets && data.rockets.map(
            (Rocket, i) => !!Rocket && 
          <GridListTile key={i}>
              {Rocket.flickr_images?.map( (image) =>
              <Box maxWidth={700} maxHeight={1200}>
            {image ? <img src={image}/> : null}
            </Box>
            )

          }
          
            <GridListTileBar
              title= {Rocket.rocket_name}
              subtitle={<span>by: {Rocket.company}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${Rocket.country}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
            
          </GridListTile>
          
        )
    }
      </GridList>
    </div>
  )

}

export default ImageGallery;