import Post from "../model/Post"

class CreatePostPresenter{

    onCreate(){
        Post.addPost(Post.state.newPost.postid, Post.state.newPost.userid, Post.state.newPost.parentid,
            Post.state.newPost.title, Post.state.newPost.text, Post.state.newPost.posttype, Post.state.newPost.creationdate);
        Post.changeNewPostProperty("postid","");
        Post.changeNewPostProperty("userid","");
        Post.changeNewPostProperty("parentid","");
        Post.changeNewPostProperty("title","");
        Post.changeNewPostProperty("text","");
        Post.changeNewPostProperty("posttype","");
        Post.changeNewPostProperty("creationdate","");
        window.location.assign("#/");
    }

    onChange(property, value){
        Post.changeNewPostProperty(property,value);
    }
}

const createPostPresenter = new CreatePostPresenter();
export default createPostPresenter;