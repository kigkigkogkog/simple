import * as actionTypes from './actionTypes';
import axios from 'axios';
import {fromJS} from 'immutable';

const searchDetailList = (data) => ({
    type:actionTypes.DETAIL_SEARCH_LIST,
    data:fromJS(data)
})

export const getDetailList = (id) => {
    return (dispatch)=>{
        axios.get("/api/detailList.json?id="+id).then((res)=>{
            const data = res.data.data;
            dispatch(searchDetailList(data));
        }).catch(()=>{
           console.log('error'); 
        })
    }
}