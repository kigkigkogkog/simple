import * as actionTypes from './actionTypes';
import {fromJS} from 'immutable';

const defaultState = fromJS({
    topicList:[],
    listList:[],
    writerList:[],
    showScroll:false
})

export default (state = defaultState,action) => {
    switch (action.type){
        case actionTypes.HOME_SEARCH_LIST:
            return state.merge({
                "topicList":action.topicList,
                "listList":action.listList,
                "writerList":action.writerList,
            });
        case actionTypes.MORE_SEARCH_LIST:
            return state.set("listList",state.get("listList").concat(action.data));
        case actionTypes.BACK_TO_TOP:
            return state.set("showScroll",action.show);
        default:
            return state;
    }
}

