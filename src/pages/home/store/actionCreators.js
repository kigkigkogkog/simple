import * as actionTypes from './actionTypes';
import axios from 'axios';
import {fromJS} from 'immutable';

const searchHomeList = (data) => ({
    type:actionTypes.HOME_SEARCH_LIST,
    topicList:fromJS(data.topicList),
    listList:fromJS(data.listList),
    writerList:fromJS(data.writerList)
})

const searchMoreList = (data) => ({
    type:actionTypes.MORE_SEARCH_LIST,
    data:fromJS(data)
})

export const getHomeList = () => {
    return (dispatch)=>{
        axios.get("/api/homeList.json").then((res)=>{
            const data = res.data.data;
            dispatch(searchHomeList(data));
        }).catch(()=>{
           console.log('error'); 
        })
    }
}

export const getMoreList = () => {
    return (dispatch)=>{
        axios.get("/api/moreList.json").then((res)=>{
            const data = res.data.data;
            dispatch(searchMoreList(data));
        }).catch(()=>{
           console.log('error'); 
        })
    }
}

export const getTopState = (show) => ({
    type:actionTypes.BACK_TO_TOP,
    show
})