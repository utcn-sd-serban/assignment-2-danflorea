import React from "react";

const PostList = ({ posts, onCreatePost, onViewDetails, onSearchTitleClicked, onSearchTagClicked, onChange }) => (

    <div className="col-lg-10">
        <br/>
        <input onChange={ e => onChange("toSearch", e.target.value)}/>
        <button onClick={ onSearchTitleClicked}> Search by title </button>
        <button onClick={ onSearchTagClicked}> Search by tag </button>
        <br/>
        <br/>

        <h2> Current questions </h2>
        <hr/>
        <table border="1">
            <thead>
                <tr>
                    <th> Post ID </th>
                    <th> User ID </th>
                    <th> Parent ID </th>
                    <th> Title </th>
                    <th> Text </th>
                    <th> Post Type </th>
                    <th> Creation Date </th>
                    <th> Tags </th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {
                posts.map((post, index) => (
                    <tr key={index}>
                        <td> { post.postid }</td>
                        <td> { post.userid }</td>
                        <td> { post.parentid }</td>
                        <td> { post.title }</td>
                        <td> { post.text }</td>
                        <td> { post.posttype }</td>
                        <td> { post.creationdate }</td>
                        <td> { post.tags }</td>
                        <td><button onClick={ () => onViewDetails(index)}> Read more </button></td>
                    </tr>
                ))
            }
            </tbody>
        </table>
        <br/>

        <button onClick={onCreatePost}>Ask me a fucking question</button>

    </div>
);


export default PostList;

