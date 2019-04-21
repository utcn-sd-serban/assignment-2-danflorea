import {EventEmitter} from "events";

class Post extends EventEmitter{

    constructor(){
        super();
        this.state = {
            posts: [{
                postid: 1,
                userid: 1,
                parentid: 0,
                title: "ge rights activist",
                text: "why ar yu ge?",
                posttype: "QUESTION",
                creationdate: "3-3-2019",
                tags: [ "hahayes", "usefultag" ]
            }, {
                postid: 2,
                userid: 2,
                parentid: 1,
                title: "who",
                text: "who ses im ge?",
                posttype: "ANSWER",
                creationdate: "3-3-2019",
                tags: [ "hahayes" ]
            }],

            newPost:{
                postid: "",
                userid: "",
                parentid: "",
                title: "",
                text: "",
                posttype: "",
                creationdate: "",
                tags: []
            },

            searchedPost:[],

            toSearch:""
        };
    }

    addPost(postid, userid, parentid, title, text, posttype, creationdate, tags){
        this.state = {
            ...this.state,
            posts: this.state.posts.concat([{
                postid: postid,
                userid: userid,
                parentid: parentid,
                title: title,
                text: text,
                posttype: posttype,
                creationdate: creationdate,
                tags: tags
            }])
        };
        this.emit("change", this.state);
    }

    changeNewPostProperty(property,value){
        this.state = {
            ...this.state,
            newPost:{
                ...this.state.newPost,
                [property]: value
            }
        };
        this.emit("change", this.state);
    }



    filterPostsTitle(){
        const result = this.state.posts.filter( (post) => post.title === this.state.toSearch );
        this.state = {
          ...this.state,
            searchedPost : result
        };
    }

    filterPostsTag(){
        const result = this.state.posts.filter((post) => post.tags.filter((t)=>t===this.state.toSearch).length>0);
        this.state = {
            ...this.state,
            searchedPost : result
        };
    }

    toSearchChange(property,value) {
        this.state = {
            ...this.state,
            [property]: value
        };
        this.emit("change", this.state);
    }

}

const post = new Post();
export default post;