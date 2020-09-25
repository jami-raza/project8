import React from 'react';
import {useCompanyInfoQuery} from '../../generated/graphql';
import CompanyInfo from './About';
import CircularLoading from '../Loading';
const CompanyInfoContainer = () =>{
    const {error, loading, data} = useCompanyInfoQuery();
    if (loading){
        return<div><CircularLoading/></div>
    }
    if (error || !data){
        return<div>there is an error</div>
    }
    return<CompanyInfo data={data}/>
}
export default CompanyInfoContainer;