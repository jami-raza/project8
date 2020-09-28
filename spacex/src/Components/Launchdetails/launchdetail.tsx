import React from 'react';
import {LaunchInfoQuery} from '../../generated/graphql';
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { withStyles, Theme, createStyles,makeStyles } from '@material-ui/core/styles';

interface Props {
    data: LaunchInfoQuery
}
const useStyles = makeStyles({
    root: {
      minWidth: 275,
      padding:20,   
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
    table: {
    minWidth: 700,
    },

  });
  const values = {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  };
  const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
      textAlign:"initial",
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);

const LaunchDetails: React.FC<Props> = ({ data }) => {
    const classes = useStyles();

    if (!data.launch){
        return<div>No launches available</div>
    }

    console.log(data.launch.links?.mission_patch_small)
    return(
        <div >
            <Box display="flex" flexDirection="row" flexWrap="wrap" bgcolor="#90djn" minHeight={100} p={1} width="100%" mx="auto"  paddingBottom="20px">
                <Box p={1} m={1} border={1} >
                <Typography variant="h4" component="h2">
                    {data?.launch?.mission_name}
                </Typography>
                <Typography variant="h4" component="h2">
                {data.launch.links?.mission_patch_small ? <img src={data.launch.links?.mission_patch_small}/> : null}   
                </Typography>
                </Box>
                <Box p={5} m={0}>
                    <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                          <StyledTableCell align="center">Dessert (100g serving)</StyledTableCell>
                          

                        </TableRow>
                    </TableHead>
                    <TableBody>
                    <StyledTableRow>
                          <StyledTableCell>Mission</StyledTableCell>
                          <StyledTableCell align="right">
                              {data.launch?.mission_name}
                          </StyledTableCell>
                          </StyledTableRow>
                          <StyledTableRow>
                          <StyledTableCell>Site Name</StyledTableCell>
                          <StyledTableCell align="right">
                              {data.launch?.launch_site?.site_name}
                          </StyledTableCell>
                          </StyledTableRow>
                          <StyledTableRow>
                          <StyledTableCell>Launch Year</StyledTableCell>
                          <StyledTableCell align="right">
                              {data.launch?.launch_year}
                          </StyledTableCell>
                          </StyledTableRow>
                          <StyledTableRow>
                          <StyledTableCell>Launch Year</StyledTableCell>
                          <StyledTableCell align="right">
                              {data.launch?.launch_success ? 'sucessful':'failed'}
                          </StyledTableCell>
                          </StyledTableRow>
                          <StyledTableRow>
                          <StyledTableCell>Rocket</StyledTableCell>
                          <StyledTableCell align="right">
                              {data.launch?.rocket?.rocket_name}
                          </StyledTableCell>
                          </StyledTableRow>
                        
                    </TableBody>
                    </Table>
                
                    </Box>
                <Box borderColor="grey.500" border={1} p={1} m={1} width="auto" height="auto">
                    {data.launch.details}
                </Box>
                
                
                
                
                
                <Box borderColor="grey.500" />
                <Box borderColor="text.primary"  />    
                
                
                 
                
                </Box>
                
                
               
        </div>
    )

}
export default LaunchDetails;