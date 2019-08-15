import React from 'react';
import { Upload, Icon } from 'antd';

import {getBase64,beforeUpload} from '../utils';

export default class Cover extends React.Component {
  state = {
    loading: false,
    img_url:null
  };

  componentWillReceiveProps({value}){

    if(value){
      this.setState({
        img_url:value
      })
    }
  }

  handleChange = info => {
      
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, img_url =>{
          this.setState({
            img_url,
            loading: false,
          })
         
        }
      );
      this.props.afterUpload(info.file.response.imgurl);
    }
  };

  render() {
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { img_url } = this.state;
    return (
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="http://localhost:3000/article/upload"
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
        {img_url ? <img src={img_url} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>
    );
  }
}
