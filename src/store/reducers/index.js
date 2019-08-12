import { combineReducers } from 'redux';
import {
    GET_BOOKS,
    SAVE_BOOKS,
    TOGGLE_COLLAPSED
} from '../ActionTypes';

const counter = (counter=0,action) =>{
    return counter;
}

const collapsed = (collapsed=false,action) =>{
    if(action.type === TOGGLE_COLLAPSED){
        return action.collapsed
    }else{
        return collapsed;
    }
}

const books = (books={},action) =>{
    switch(action.type){
        case GET_BOOKS: 
            return {...books,loading:true};
        
        case SAVE_BOOKS:
            return {...books,loading:false,data:action.books};

        default: 
            return books;
    }
}


export default combineReducers({counter,books,collapsed})