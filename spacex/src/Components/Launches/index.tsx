import React from 'react';
import {useLaunchesQuery} from '../../generated/graphql';
import Launch from './Launch';
import CircularLoading from '../Loading';
const LaunchContainer = () => {
    const {loading,error,data} = useLaunchesQuery();

    if (loading){
        return <div><CircularLoading/></div>
    }
    if (error || !data){
        return <div>Error</div>
    }
    return <Launch data={data}/>
}
export default LaunchContainer;