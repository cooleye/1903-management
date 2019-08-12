import React, { Component } from 'react';
import { Icon,Menu, Dropdown,Typography } from 'antd';
import {connect} from 'react-redux';
import {toggleCollapsed} from '../store/actions';
import './my-header.css';

const { Title } = Typography;


const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1314745_sb15mrr7cso.js',
});

  
class MHeader extends Component {
    
    state = {
        collapsed: false,
      };

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        },()=>{
            console.log(this.state.collapsed)
            this.props.toggleCollapsed(this.state.collapsed)
        });
    };
    handleClick = (e) => {
        console.log('click ', e);
        let to = e.key;
        console.log(to)
    }

    render() {
        return (
            <div className="App-header">
       
                <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} 
                onClick={this.toggleCollapsed}
                style={{ marginBottom: 16,marginRight:20 }}
                />
                1903后台管理系统
                <div className="account">
                    <Icon type="smile" style={{fontSize:24,color:'orange'}}/> 
                    欢迎
                    <span className="admin-name">admin</span>
                    <Dropdown overlay={()=>{
                        return (<Menu  onClick={this.handleClick}>
                            <Menu.Item key="/edit-info">
                              修改信息
                            </Menu.Item>
                            <Menu.Item key="/edit-pwd">
                              修改密码
                            </Menu.Item>
                            <Menu.Item key="/logout">
                              退出
                            </Menu.Item>
                          </Menu>)
                    }}>
                        <a className="ant-dropdown-link" href="#">
                            <Icon type="down" />
                        </a>
                    </Dropdown>
                </div>

            </div>
        );
    }
}

export default connect(null,dispatch =>({
    toggleCollapsed: (collapsed) => dispatch(toggleCollapsed(collapsed))
}))(MHeader);
