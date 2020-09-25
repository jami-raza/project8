import React from 'react';
import {useRocketsQuery} from '../../generated/graphql';
import Rockets from './Rocket';
import CircularLoading from '../Loading';

const RocketContainer = () =>{
    const {data,loading,error} = useRocketsQuery();

    if(loading){
        return<div><CircularLoading/></div>
    }
    if (error || !data){
        return<div>Error</div>
    }
    return<Rockets data={data}/>
}
export default RocketContainer;