import React, { Component } from 'react'
import {connect} from 'react-redux';
import {Table,BackTop,Typography,Button,Modal} from 'antd';
import {
    getArticles,
    deleteArt,
    editArt
} from '../../store/actions';

const { Title } = Typography;


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
    
    state = {
        visible:false,
        articleId:null
    }
    componentDidMount(){
        this.props.getArticles()
    }
    checkArt = (id) =>{
        this.props.history.push({pathname:"art-detail",state:{id}})
    }
    editArt = (id) =>{
        console.log(id)
    }
    deleteArt = (id) =>{
        this.setState({
            visible: true,
            articleId:id
        });
    }

    handleOk = e => {
        this.setState({
            visible: false,
        });
        if(this.state.articleId){
            this.props.deleteArt(this.state.articleId)
        }
        
    };
    
    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };

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
                {/** 模态框 */}
                <Modal
                title="你确定要删除吗？"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
              >
              </Modal>

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
        deleteArt: (id) => dispatch(deleteArt(id)),
        editArt: (id) => dispatch(editArt(id))
    }))(Articles)
