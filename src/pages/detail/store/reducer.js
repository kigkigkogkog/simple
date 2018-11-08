import * as actionTypes from './actionTypes';
import {fromJS} from 'immutable';

const defaultState = fromJS({
    detailList:[]
})

export default (state = defaultState,action) => {
    switch (action.type){
        case actionTypes.DETAIL_SEARCH_LIST:
            return state.set("detailList",action.data);
        default:
            return state;
    }
}

