import {
    GET_BOOKS,
    SAVE_BOOKS,
    TOGGLE_COLLAPSED
} from '../ActionTypes';

import axios from 'axios';

export const toggleCollapsed = (collapsed) => {
    return{
        type:TOGGLE_COLLAPSED,
        collapsed:collapsed
    }
}


export const getBooks = () =>{
    return dispatch =>{
        dispatch({
            type:GET_BOOKS
        })
         axios.get('https://www.easy-mock.com/mock/5d1c66e9e85bc1461e567f67/api/books#!method=get')
         .then(res=>{
             dispatch({
                 type:SAVE_BOOKS,
                 books: res.data.collections
             })
         })
    }
}

// 保存富文本编辑器内容
export const saveEditorContent = (data) =>{
    return dispatch =>{
        axios.post("http://localhost:3000/article",data)
        .then(res =>{
            console.log(res)
        })
    }
}