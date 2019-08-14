import {
    GET_BOOKS,
    SAVE_BOOKS,
    TOGGLE_COLLAPSED,
    GET_ARTICLES,
    GET_ARTICLE,
    DELETE_ARTICLE
} from '../ActionTypes';

import axios from 'axios';

export const toggleCollapsed = (collapsed) => {
    return{
        type:TOGGLE_COLLAPSED,
        collapsed:collapsed
    }
}

const DOMAIN = "http://localhost:3000";


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
    return axios.post(DOMAIN + "/article",data)
    }
}

// 查询文章列表
export const getArticles = () =>{
    return dispatch =>{
        return axios.get(DOMAIN + "/article")
        .then(res=>{
            console.log(res)
            dispatch({
                type:"GET_ARTICLES",
                articles:res.data
            })
        })
    }
}

// 查询单个文章
export const getArticle = (id) =>{
    return dispatch => {
        return axios.get(DOMAIN + '/article?id='+ id)
        .then(res=>{
            console.log(res)
            dispatch({
                type:GET_ARTICLE,
                article:res.data
            })
        })
    }
}

// 删除文章
export const deleteArt = (id) =>{
    return dispatch =>{
        return axios.delete(DOMAIN + "/article",{id})
        .then(res=>{
            console.log('删除成功：',res)
            
            // dispatch({
            //     type:DELETE_ARTICLE,
            //     id:id
            // })
            return res;
        })
    }
}

// 编辑文章
export const editArt = (id) =>{
    return dispatch =>{
        return axios.put(DOMAIN + "/article")
        .then(res=>{
            console.log(res)
            return res;
        })
    }
}