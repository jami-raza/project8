import React from 'react';
import {CompanyInfoQuery } from '../../generated/graphql';
import {Grid, Box, Typography} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import Aboutus from '../../images/Aboutus.jpg';
interface Props {
    data: CompanyInfoQuery
}
const useStyles = makeStyles({
    
    
      pos: {
        marginBottom: 12,
        color:"#ffff",
        fontWeight:"lighter",
        background: 'linear-gradient(45deg, #000428   30%, #004e92 90%)',
        padding:20,
        minWidth: 300,
        minHeight: 100,
    },
    pos1:{
    
        marginBottom: 12,
        color:"#ffff",
        fontWeight:"bold",
    
    },
    data:{
        color:"#ffff",
        fontWeight:"normal",
        fontSize:14,
      },
      tablehead:{
        color:"#ffff",
        fontWeight:"bold",
        fontSize:20,
      },
      title:{
        fontFamily:"Helvetica Neue",
        fontSize:36,
        padding:100,
        textAlign:"center",
        backgroundImage:`url(${Aboutus})`,
        backgroundSize:"cover", 
        color:"#ffff",
        fontWeight:'bold',
        
        
      },
      title1:{
        fontFamily:"Helvetica Neue",
        fontSize:36,
        padding:100,
        textAlign:"center",
      },
      table: {
        minWidth: 300,
        minHeight:300,
        background: 'linear-gradient(45deg, #000428   30%, #004e92 90%)',
      },
})
const CompanyInfo:React.FC<Props> = ({data}) =>{
    const classes = useStyles()
    return(
        <Grid item xs={12}>
            <Grid item xs={12}>
            <Typography className={classes.title} >
              About us
            </Typography>
            <Box p={20} m={2}>
            <TableContainer>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center"  className={classes.tablehead}>
                            
                            Company details
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell >
                            <Typography component="p" className={classes.pos1}>
                                Company Name
                                </Typography>
                            </TableCell>
                            <TableCell>
                            <Typography component="p" className={classes.data}>
                                {data.info?.name}
                                </Typography>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                            <Typography component="p" className={classes.pos1}>
                                Founder
                                </Typography>
                            </TableCell>
                            <TableCell>
                            <Typography component="p" className={classes.data}>
                                {data.info?.founder}
                                </Typography>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                            <Typography component="p" className={classes.pos1}>
                                Founded
                                </Typography>
                            </TableCell>
                            <TableCell>
                            <Typography component="p" className={classes.data}>
                                {data.info?.founded}
                                </Typography>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                            <Typography component="p" className={classes.pos1}>
                            Chief Operating Officer
                            </Typography>
                            </TableCell>
                            <TableCell>
                            <Typography component="p" className={classes.data}>
                                {data.info?.coo}
                                </Typography>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                            <Typography component="p" className={classes.pos1}>
                            Chief Technology Officer
                            </Typography>
                            </TableCell>
                            <TableCell>
                            <Typography component="p" className={classes.data}>
                                {data.info?.cto}
                                </Typography>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                            <Typography component="p" className={classes.pos1}>
                            Employees
                            </Typography>
                            </TableCell>
                            <TableCell>
                            <Typography component="p" className={classes.data}>
                                {data.info?.employees}
                                </Typography>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                            <Typography component="p" className={classes.pos1}>
                            Vehicles
                            </Typography>
                            </TableCell>
                            <TableCell>
                            <Typography component="p" className={classes.data}>
                                {data.info?.vehicles}
                                </Typography>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                            <Typography component="p" className={classes.pos1}>
                            Test Sites
                            </Typography>
                            </TableCell>
                            <TableCell>
                            <Typography component="p" className={classes.data}>
                                {data.info?.test_sites}
                                </Typography>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                            <Typography component="p" className={classes.pos1}>
                            Launch Sites
                            </Typography>
                            </TableCell>
                            <TableCell>
                            <Typography component="p" className={classes.data}>
                                {data.info?.launch_sites}
                                </Typography>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                            <Typography component="p" className={classes.pos1}>
                            Valuation
                            </Typography>
                            </TableCell>
                            <TableCell>
                            <Typography component="p" className={classes.data}>
                                {data.info?.valuation}
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Box p={2} m={1}>
                <Typography className={classes.title1}>
                    Summary
                </Typography>
            <Typography className={classes.pos}>
                {data.info?.summary}
            </Typography >
            </Box>
            <Box p={2} m={1}>
                <Typography className={classes.title1}>
                    Headquarter
                </Typography>
            <Typography className={classes.pos}>
                
                <Typography align="center">
                    Address : {data.info?.headquarters?.address}
                </Typography>
                
                <Typography align="center">
                    City : {data.info?.headquarters?.city}
                </Typography>
                <Typography align="center">
                    State : {data.info?.headquarters?.state}
                </Typography>

            </Typography >
            </Box>
            </Box>
            </Grid>
            
        </Grid>
    )
}

export default CompanyInfo;