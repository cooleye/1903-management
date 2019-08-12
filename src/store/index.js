import {createStore,applyMiddleware} from 'redux'
import reducer from './reducers'
import thunk from 'redux-thunk';
const initialState = {
    counter:0,
    collapsed:false,
    books:{
        loading:false,
        data:[]
    }
}

export default createStore(reducer,initialState,applyMiddleware(thunk))