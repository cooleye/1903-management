import React from 'react';
import './App.css';
import {connect} from 'react-redux';

import MHeader from './components/MHeader';
import MSide from './components/MSide';
import IndexView from './views/index';

import { Layout } from 'antd';
const { Header, Sider, Content,Footer } = Layout;



function App({collapsed}) {
  return (
    <Layout>
    <Header><MHeader/></Header>
    <Layout>
      <Sider  collapsed={collapsed}  mode="inline"><MSide/></Sider>
      <Content><IndexView/></Content>
    </Layout>
    <Footer style={footStyle}>
        @Davie Kong
      </Footer>
  </Layout>
  );
}

const footStyle = {
  width:"100%",
  padding:5,
  backgroundColor:"#001529",
  textAlign:"center",
  color:"#fff"
}

export default connect(state =>({
  collapsed: state.collapsed
}),null)(App);
