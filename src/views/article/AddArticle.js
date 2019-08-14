import React from 'react'
import {Button,Input,Upload, Icon, message} from 'antd';
import {connect} from 'react-redux';
// 引入编辑器组件
import BraftEditor from 'braft-editor'
// 引入编辑器样式
import 'braft-editor/dist/index.css'

import {saveEditorContent} from '../../store/actions';

import ArticleCover from '../../components/ArticleCover'

class EditorDemo extends React.Component {

    state = {
        title:"文章标题",
        author:"Davie",
        coverImg:"",
        desc:"",

        editorState: BraftEditor.createEditorState(null)
    }

    async componentDidMount () {
        // 假设此处从服务端获取html格式的编辑器内容
        // const htmlContent = await fetchEditorContent()
        // 使用BraftEditor.createEditorState将html字符串转换为编辑器需要的editorStat
        this.setState({
            editorState: BraftEditor.createEditorState()
        })
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
            title: e.target.value
        })
    }

    descChange = (e) => {
        this.setState({
            desc: e.target.value
        })
    }

    authorChange = (e) =>{
        this.setState({
            author: e.target.value
        })
    }

   
    publish = () =>{
        const htmlContent = this.state.editorState.toHTML()
        this.props.saveEditorContent({
            title: this.state.title,
            author: this.state.author,
            content: htmlContent,
            desc: this.state.desc,
            coverImg: this.state.coverImg
        })
        .then(res=>{
            console.log('ok:',res)
            if(res.status === 200){
                this.props.history.push("/articles")
            }
        })
       
    }

    afterUpload = (imgurl) =>{
        this.setState({
            coverImg: imgurl
        })
    }

    render () {

        const { editorState } = this.state
        return (
            <div className="my-component">
                <div>
                    <div>
                         文章标题：<Input style={{ width: 200 }} placeholder="请输入标题" onChange={this.titleChange}/>
                    </div>
                    <div>
                        作者：<Input style={{ width: 200 }} placeholder="请输入作者" onChange={this.authorChange}/>
                    </div>
                    <div>
                        简介：<Input style={{ width: 200 }} placeholder="请输入简介" onChange={this.descChange}/>
                    </div>
                    <div>
                    <div>
                        封面图:<ArticleCover afterUpload={this.afterUpload}/>
                    </div>
                    <Button style={{ width: 200 }} onClick={this.publish}>发布</Button>
                    </div>
                </div>
                <div className="editor">
                
                <BraftEditor
                    value={editorState}
                    onChange={this.handleEditorChange}
                    onSave={this.submitContent}
                />
                </div>
            </div>
        )

    }

}


export default connect(null,(dispatch)=>({
    saveEditorContent: (data) => dispatch(saveEditorContent(data))
}))(EditorDemo)