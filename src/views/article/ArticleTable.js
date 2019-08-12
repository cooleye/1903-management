import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Table,BackTop} from 'antd';
import {getBooks} from '../../store/actions/index';

const columns = [
    {
        title:"封面",
        key:'cover',
        render:(data) =>(<img className="book-cover" src={data.cover.url}/>)
    },
    {
        title: '编号',
        dataIndex: 'id'
    },
    {
      title: '书名',
      dataIndex: 'title'
    },
    {
        title: '作者',
        dataIndex: 'author'
    },
    {
      title: '简介',
      dataIndex: 'info'
    }
  ];

class Articles extends Component {
    
    componentDidMount(){
        this.props.getBooks();
    }
    render() {
        let { books } = this.props;
        return (
            <div>
                <Table rowKey="id" columns={columns} dataSource={books.data} />
                <BackTop />
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
