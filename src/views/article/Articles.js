import React, { Component } from 'react'
import {connect} from 'react-redux';
import {Table,BackTop,Typography,Button,Modal} from 'antd';
import {
    getArticles,
    deleteArt
} from '../../store/actions';

const { Title } = Typography;
const { confirm } = Modal;

const columns =  ({checkArt,editArt,deleteArt}) =>{
    return [
        {
            title: '封面',
            dataIndex: 'img_url',
            width: 100,
            render:(data) =>{
                return (<img className="book-cover" src={data}/>)
            }
        },
        {
          title: '书名',
          width: 200,
          dataIndex: 'title'
        },
        {
            title: '作者',
            width: 200,
            dataIndex: 'author'
        },
        {
            title: '简介',
            width: 300,
            dataIndex: 'desc'
        },
        {
            title:'操作',
            width: 200,
            dataIndex:"_id",
            render: (id) =>{
                return (<div>
                    <Button type="primary" size="small" onClick={()=>{
                        checkArt(id)
                    }}>查看</Button>
                    <Button size="small" onClick={()=>{
                        editArt(id)
                    }}>编辑</Button>
                    <Button type="danger" size="small" onClick={()=>[
                        deleteArt(id)
                    ]}>删除</Button>
                    </div>)
            }
        }
      ];
}

class Articles extends Component {
    
    componentDidMount(){
        this.props.getArticles()
    }
    checkArt = (id) =>{
        this.props.history.push({pathname:"art-detail",state:{id}})
    }
    editArt = (id) =>{
        this.props.history.push({pathname:"add-article",state:{id}})
    }
    deleteArt = (id) =>{
        confirm({
            title: '你确定要删除吗?',
            content: '删除操作不可逆',
            okText: '确定',
            okType: 'danger',
            cancelText: '取消',
            onOk:()=>{
                this.props.deleteArt(id)
            },
            onCancel:()=>{
              console.log('Cancel');
            },
        });
    }

    render() {
        let articles = this.props.articles;
        return (
            <div>
                <Title level={3}>文章列表</Title>
                <Table rowKey="_id" columns={columns({
                    checkArt: this.checkArt,
                    editArt: this.editArt,
                    deleteArt: this.deleteArt
                })} dataSource={articles.data} />
               
                 {/** 返回顶部 */}
                <BackTop/>

            </div>
        )
    }
}

export default connect(
    (state)=>({
        articles: state.articles
    }),
    (dispatch)=>({
        getArticles: () => dispatch(getArticles()),
        deleteArt: (id) => dispatch(deleteArt(id))
    }))(Articles)
