import React from 'react';
import {useShipsQuery} from '../../generated/graphql';
import Ships from './Ships';
import CircularLoading from '../Loading';

const ShipsContainer = () => {
    const{data, loading, error} = useShipsQuery();

    if (loading){
        return<div><CircularLoading/></div>
    }
    if (error || !data){
        return<div>Error</div>
    }
    return<Ships data={data}/>
}
export default ShipsContainer;