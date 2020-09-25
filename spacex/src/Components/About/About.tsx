import React from 'react';
import {CompanyInfoQuery } from '../../generated/graphql';

interface Props {
    data: CompanyInfoQuery
}

const CompanyInfo:React.FC<Props> = ({data}) =>{
    return(
        <div>
            <h2>About Company</h2>
            <div>
                Company:{data.info?.name}
                Founder:{data.info?.founder}
                Description:{data.info?.summary}
            </div>
        </div>
    )
}

export default CompanyInfo;