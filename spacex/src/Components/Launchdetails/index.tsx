import React from 'react';
import {useLaunchInfoQuery} from '../../generated/graphql';
import Launchdetails from './launchdetail';

const LaunchDetailContainer = () => {
    const {data, loading, error} = useLaunchInfoQuery({variables:{id:"13"}});

    if (loading){
        return <div>Loading</div>
    }
    if (error){
        return <div>Error</div>
    }
    if (!data){
        return<div>Please select a mission</div>
    }
    return <Launchdetails data={data}/>
}
export default LaunchDetailContainer;