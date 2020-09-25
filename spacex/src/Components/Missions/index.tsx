import React from 'react';
import {useMissionQuery} from '../../generated/graphql';
import Missions from './Misssion';
import CircularLoading from '../Loading';

const MissionContainer = () =>{
    const {data,loading,error} = useMissionQuery();

    if (loading){
        return<div><CircularLoading/></div>
    }
    if (error || !data){
        return<div>Error</div>
    }
    return<Missions data={data}/>
}
export default MissionContainer;