import * as actionTypes from './actionTypes';
import axios from 'axios';
import {fromJS} from 'immutable';

const searchList = (data) => ({
    type:actionTypes.SEARCH_LIST,
    data:fromJS(data),
    totalPage:Math.ceil(data.length/10)
})

export const inputFocus = () => ({
    type:actionTypes.INPUT_FOCUS
})

export const inputBlur = () => ({
    type:actionTypes.INPUT_BLUR
})

export const getSearchList = () => {
    return (dispatch)=>{
        axios.get("/api/searchList.json").then((res)=>{
            const data = res.data;
            dispatch(searchList(data.data));
        }).catch(()=>{
           console.log('error'); 
        })
    }
}

export const mouseEnter = () => ({
    type:actionTypes.MOUSE_ENTER
})

export const mouseLeave = () => ({
    type:actionTypes.MOUSE_LEAVE
})

export const changePage = (page) => ({
    type:actionTypes.CHANGE_PAGE,
    page
})