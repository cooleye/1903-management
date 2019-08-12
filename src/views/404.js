import React, { Component } from 'react';
import imgSrc from '../assets/404.png';

export default class extends Component {
    render() {
        return (
            <div style={{textAlign:'center'}}>
                <h2 style={{fontSize:60}}>404</h2>
                <p style={{fontSize:24}}> 天气太热，页面跑去避暑了... </p>
            </div>
        );
    }
}