import { combineReducers } from 'redux';
import {
    GET_BOOKS,
    SAVE_BOOKS,
    TOGGLE_COLLAPSED,
    GET_ARTICLES,
    GET_ARTICLE,
    DELETE_ARTICLE
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

// 查询文章列表
const articles = (articles = {},action) =>{
    switch(action.type){
        // 获取文章列表数据
        case GET_ARTICLES:
            return {...articles,data:action.articles};
        
        // 删除文章数据
        case DELETE_ARTICLE:
            return {...articles,data:articles.data.filter(art=>(
                art._id !== action.id
            ))}
        default: 
            return articles;
    }
}

// 查询单个文章
const article = (article = {},action) =>{
    switch (action.type){
        case GET_ARTICLE:
            return action.article;
        default: 
            return article;

    }
}

export default combineReducers({
    counter,
    books,
    collapsed,
    articles,
    article
})