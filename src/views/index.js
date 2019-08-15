import React, { Component } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';

// 导入各个views
import ArticleTable from './article/ArticleTable';
import AddArticle from './article/AddArticle';
import Articles from './article/Articles';
import AddByMD from './article/AddByMD';
import ArticleDetail from './article/ArticleDetail';

import NoMatch from './404'

class index extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" exact>
                        <Redirect to="/art-table"/>
                    </Route>
                
                    <Route path="/art-table" component={ArticleTable}/>
                    <Route path="/articles" component={Articles}/>
                    <Route path="/add-article" component={AddArticle}/>
                    <Route path="/art-detail" component={ArticleDetail}/>
                    <Route component={NoMatch}/>
                </Switch>
            </div>
        );
    }
}

export default index;
