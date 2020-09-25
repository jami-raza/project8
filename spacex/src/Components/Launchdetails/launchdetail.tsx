import React from 'react';
import {LaunchInfoQuery} from '../../generated/graphql';

interface Props {
    data: LaunchInfoQuery
}

const LaunchDetails: React.FC<Props> = ({ data }) => {
    if (!data.launch){
        return<div>No launches available</div>
    }
    return(
        <div>
            <div>
                <span>
                    {data.launch.launch_site?.site_name}
                </span>
                <span>
                    {data.launch.details}
                </span>
            </div>
        </div>
    )

}
export default LaunchDetails;