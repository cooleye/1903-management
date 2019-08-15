import {
    GET_BOOKS,
    SAVE_BOOKS,
    TOGGLE_COLLAPSED,
    GET_ARTICLES,
    GET_ARTICLE,
    DELETE_ARTICLE
} from '../ActionTypes';
import qs from 'qs';

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
export const saveEditorContent = (article) =>{
   
    return dispatch =>{
        console.log('保存富文本编辑器内容:',article)
        // return axios.post(DOMAIN + "/article",qs.stringify(data),{
        //     headers: {
        //         'X-Requested-With': 'XMLHttpRequest',
        //         'Content-Type': 'application/x-www-form-=urlencoded;charset=UTF-8'
        //       }
        // }).then(res=>{
        //     return res;
        // })
        return axios.post(DOMAIN + "/article",article)
        .then(res=>{
            return res
        })
    }
}

// 查询文章列表
export const getArticles = () =>{
    return dispatch =>{
        return axios.get(DOMAIN + "/article")
        .then(res=>{
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
        return axios.get(DOMAIN + '/article?id='+id)
        .then(res=>{
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
        console.log('id:',id)
        return axios.delete(DOMAIN + '/article?id='+ id)
        .then(res=>{
            console.log('删除成功：',res)
            if(res.data){
                dispatch({
                    type:DELETE_ARTICLE,
                    id:res.data._id
                })
            }
            
            return res;
        })
    }
}

// 编辑文章
// export const editArt = (id) =>{
//     return dispatch =>{
//         return axios.put(DOMAIN + "/article")
//         .then(res=>{
//             console.log(res)
//             return res;
//         })
//     }
// }

/** 编辑，获取文章内容 */
export const fetchEditorContent = (id) =>{
    return dispatch =>{
        return axios.get(DOMAIN + '/article?id='+id)
        .then(res =>{
            return res.data;
        })
    }
}

/** 修改文章内容 */
export const updateEditorContent = (article) =>{
    return dispatch =>{
        console.log('修改文章内容:',article)
        return axios.put(DOMAIN + "/article",article)
        .then(res=>{
            return res
        })
    }
}