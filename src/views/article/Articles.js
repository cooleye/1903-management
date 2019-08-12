import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Spin } from 'antd';
import {getBooks} from '../../store/actions/index';

class Articles extends Component {
    
    componentDidMount(){
        this.props.getBooks();
    }
    render() {
        let { books } = this.props;
        let bookList = null;
        if(!books.loading){
            bookList = books.data.map( book =>(
                <div key={book.id}>
                    <h3>{book.title}</h3>
                </div>
            ))
        }else{
            bookList = <Spin />
        }
        
        return (
            <div style={{padding:20}}>
                <h1>文章列表</h1>
                {bookList}
            </div>
        );
    }
}



export default connect(
    state =>({
        books:state.books
    }),
    dispatch =>({
        getBooks: () => dispatch(getBooks())
    })
)(Articles);
