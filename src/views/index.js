import React, { Component } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';

// 导入各个views
import Articles from './article/Articles';
import ArticleTable from './article/ArticleTable';
import AddArticle from './article/AddArticle';
import CommonCom from './common/common';
import FormView from './form';
import ChartDemo from './echarts/index';
import AntVDemo from './echarts/AntVDemo.js';
import BizchartsDemo from './echarts/BizCharts';
import NoMatch from './404'

class index extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" exact>
                        <Redirect to="/articles"/>
                    </Route>
                    <Route path="/articles" component={Articles}/>
                    <Route path="/art-table" component={ArticleTable}/>
                    <Route path="/add-article" component={AddArticle}/>
                    <Route path="/common" component={CommonCom}/>
                    <Route path="/form" component={FormView}/>
                    <Route path="/chart" component={ChartDemo}/>
                    <Route path="/antv" component={AntVDemo}/>
                    <Route path="/biz" component={BizchartsDemo}/>
                    <Route component={NoMatch}/>
                </Switch>
            </div>
        );
    }
}

export default index;
