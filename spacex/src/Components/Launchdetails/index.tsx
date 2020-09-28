import React from 'react';
import {useLaunchInfoQuery} from '../../generated/graphql';
import Launchdetails from './launchdetail';
import {useParams} from 'react-router-dom';
const LaunchDetailContainer = () => {
    const {id} = useParams();
    const {data, loading, error} = useLaunchInfoQuery({variables:{id:id}});

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