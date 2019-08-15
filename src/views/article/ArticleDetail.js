import React, { Component } from 'react'
import {connect} from 'react-redux';
import {getArticle} from '../../store/actions';
import { Typography,Breadcrumb,Icon } from 'antd';
import {Link} from 'react-router-dom';
const { Title,Text } = Typography;
class Detail extends Component {


    componentDidMount(){
        let id = this.props.location.state.id;
        console.log('detail id:',id);
        this.props.getArticle(id)
    }
    render() {
        let {content,title,author,create_time} = this.props.article;
        return (
            <div style={{padding:"20px 50px",backgroundColor:"#fff"}}>
                <div style={{marginBottom:20}}>
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <Link to="articles">
                            <Icon type="bars" />
                            <span>文章列表</span>
                            </Link>
                           
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <Title level={3}>文章标题： {title} </Title>
                <div><Text strong> 作者:{author} </Text></div>
                <div><Text type="secondary">  create time： {create_time} </Text></div>
                <hr/>
                <div dangerouslySetInnerHTML={{__html: content}}></div>
            </div>
        )
    }
}

export default connect(
    (state)=>({
        article: state.article
    }),
    (dispatch)=>({
        getArticle: (id)=>dispatch(getArticle(id))
    })
)(Detail)
