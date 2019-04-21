import React, {Component} from "react";
import Model from "../model/Model";
import Post from "../model/Post";
import CreatePost from "./CreatePost";
import CreatePostPresenter from "../presenter/CreatePostPresenter";

const mapModelStateToComponentState = modelState => ({
    postid: modelState.newPost.postid,
    userid: modelState.newPost.userid,
    parentid: modelState.newPost.parentid,
    title: modelState.newPost.title,
    text: modelState.newPost.text,
    posttype: modelState.newPost.posttype,
    creationdate: modelState.newPost.creationdate
});

export default class SmartCreatePost extends Component{
    constructor(){
        super();
        this.state = mapModelStateToComponentState(Post.state);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        Post.addListener("change", this.listener);
    }

    componentWillUnmount() {
        Post.removeListener("change", this.listener);
    }

    render(){
        return (
            <CreatePost
                postid={this.state.postid}
                userid={this.state.userid}
                parentid={this.state.parentid}
                title={this.state.title}
                text={this.state.text}
                posttype={this.state.posttype}
                creationdate={this.state.creationdate}
                onCreate={CreatePostPresenter.onCreate}
                onChange={CreatePostPresenter.onChange}/>
        );
    }
}