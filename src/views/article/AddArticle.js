import React from 'react'
import {Button,Input,Upload, Icon, message} from 'antd';
import {connect} from 'react-redux';
// 引入编辑器组件
import BraftEditor from 'braft-editor'
// 引入编辑器样式
import 'braft-editor/dist/index.css'

import {saveEditorContent,fetchEditorContent,updateEditorContent} from '../../store/actions';

import ArticleCover from '../../components/ArticleCover'

import axios from 'axios';

class EditorDemo extends React.Component {

    state = {
        editorState: BraftEditor.createEditorState(null),
        article:{
            _id:null,
            title:null,
            author:null,
            img_url:null,
            desc:null,
        },
        isNew:true  //根据此字段，判断是否是新加数据，还是更新数据
    }

    async componentDidMount () {
        // 假设此处从服务端获取html格式的编辑器内容
        if(this.props.location.state){
            // console.log(this.props.location)
            let id = this.props.location.state.id
            const article = await this.props.fetchEditorContent(id)
            
            console.log("article:",article)
            this.setState({
                article: article,
                isNew:false
            })
            // console.log(article)
            // 使用BraftEditor.createEditorState将html字符串转换为编辑器需要的editorStat
            this.setState({
                editorState: BraftEditor.createEditorState(article.content)
            })
        }
        
    }

    submitContent = async () =>  {
        console.log('save...')
        // 在编辑器获得焦点时按下ctrl+s会执行此方法
        // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
        const htmlContent = this.state.editorState.toHTML()
        console.log('save...',htmlContent)

        // const result = await saveEditorContent(htmlContent)
    }

    handleEditorChange = (editorState) => {
        this.setState({ editorState })
    }
    titleChange = (e) =>{
        this.setState({
            article:{
                ...this.state.article,
                title: e.target.value
            }
        })
    }

    descChange = (e) => {
        this.setState({
            article:{
                ...this.state.article,
                desc: e.target.value
            }
        })
    }

    authorChange = (e) =>{
        this.setState({
            article:{
                ...this.state.article,
                author: e.target.value
            }
        })
    }

   
    publish = () =>{
        const content = this.state.editorState.toHTML()
        let title = this.state.article.title;
        if(title && content.length > 10){

            console.log('发布文章：',this.state.isNew)
            /** 如果isNew为true，则新加数据，否则更新数据 */
            if(this.state.isNew) {
                this.props.saveEditorContent({
                    ...this.state.article,
                    content
                })
                .then(res=>{
                    console.log('ok:',res)
                    if(res.status === 200){
                        this.props.history.push("/articles")
                    }
                })
            }else{
                this.props.updateEditorContent({
                    ...this.state.article,
                    content
                })
                .then(res=>{
                    console.log('ok:',res)
                    if(res.status === 200){
                        this.props.history.push("/articles")
                    }
                })
            }
            
        }
    }

    afterUpload = (img_url) => {
        this.setState({
            article:{
                ...this.state.article,
                img_url: img_url
            }
        })
    }

    myUploadFn = (param) => {
        const serverURL = 'http://localhost:3000/article/upload'
        const fd = new FormData()
        fd.append('avatar', param.file)
        axios.post(serverURL,fd,{
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            onUploadProgress:(progressEvent)=>{
                console.log(progressEvent)
                param.progress(progressEvent.loaded / progressEvent.total * 100)
            }
        })
        .then(res=>{
            param.success({url: res.data.img_url})
        })
        .catch(function (error) {
            console.log(error);
            param.error({
                msg: 'unable to upload.'
            })
        })
    }

    render () {

        const { editorState } = this.state
        const {title,author,desc,img_url} = this.state.article;
        return (
            <div className="my-component">
                <div>
                    <div>
                         文章标题：<Input value={title} style={{ width: 200 }} placeholder="请输入标题" onChange={this.titleChange}/>
                    </div>
                    <div>
                        作者：<Input value={author} style={{ width: 200 }} placeholder="请输入作者" onChange={this.authorChange}/>
                    </div>
                    <div>
                        简介：<Input value={desc} style={{ width: 200 }} placeholder="请输入简介" onChange={this.descChange}/>
                    </div>
                    <div>
                    <div>
                        封面图:<ArticleCover value={img_url} afterUpload={this.afterUpload}/>
                    </div>
                    <Button style={{ width: 200 }} onClick={this.publish}>{this.state.isNew ? "发布":"更新"}</Button>
                    </div>
                </div>
                <div className="editor">
                
                <BraftEditor
                    value={editorState}
                    onChange={this.handleEditorChange}
                    onSave={this.submitContent}
                    media={{uploadFn: this.myUploadFn}}
                />
                </div>
            </div>
        )

    }

}


export default connect(null,(dispatch)=>({
    saveEditorContent: (data) => dispatch(saveEditorContent(data)),
    fetchEditorContent: (id) => dispatch(fetchEditorContent(id)),
    updateEditorContent: (data)=> dispatch(updateEditorContent(data))
}))(EditorDemo)