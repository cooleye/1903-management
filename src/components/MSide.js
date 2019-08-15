import React from 'react';
import { Menu, Icon,Button } from 'antd';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

const { SubMenu } = Menu;

class MSide extends React.Component {
    
    state = {
        winHeight:600,
    }

    handleClick = e => {
        // console.log('click ', e);
        let to = e.key;
        this.props.history.push({pathname:to,state:{}})
    };

    componentDidMount(){
        this.setState({
            winHeight: document.body.offsetHeight - 64 
        })
    }

    render() {
    return (
        <Menu
            onClick={this.handleClick}
            style={{height:'100%', minHeight: this.state.winHeight}}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            theme="light"
            mode="inline"
        >
        <SubMenu
            key="sub1"
            title={
            <span>
                <Icon type="read" />
                <span>文章管理</span>
            </span>
            }
        >
            <Menu.Item key="/art-table">文章表格</Menu.Item>
            <Menu.Item key="/articles">文章列表</Menu.Item>
            <Menu.Item key="/add-article">添加文章</Menu.Item>
            
        </SubMenu>
        <SubMenu
            key="sub2"
            title={
            <span>
                <Icon type="appstore" />
                <span>分类管理</span>
            </span>
            }
        >
                <Menu.Item key="/add-cat">添加类别</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
        </SubMenu>
        <SubMenu
            key="sub4"
            title={
            <span>
                <Icon type="setting" />
                <span>组件示例</span>
            </span>
            }
        >
            <Menu.Item key="/common">通用组件</Menu.Item>
           
            
        </SubMenu>
        </Menu>
    );
    }
}
  
export default connect(state =>({

}),null)(withRouter(MSide));
