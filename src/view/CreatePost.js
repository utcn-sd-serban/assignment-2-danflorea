import React from "react";

const CreatePost = ({ postid, userid, parentid, title, text, posttype, creationdate, tags, onCreate, onChange }) => (
    <div className="col-6 form-group">

        <div className="col-2"> </div>

        <div className="col-8">
            <h2 className="display-6"> Add a User </h2>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col"> </th>
                        <th scope="col"> </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> <label> Post ID </label> </td>
                        <td> <input value={postid} onChange={e => onChange("postid",e.target.value)}/> </td>
                    </tr>
                    <tr>
                        <td>  <label> User ID </label> </td>
                        <td>  <input value={userid} onChange={e => onChange("userid",e.target.value)}/> </td>
                    </tr>
                    <tr>
                        <td> <label> Parent ID </label> </td>
                        <td> <input value={parentid} onChange={e => onChange("parentid",e.target.value)}/> </td>
                    </tr>
                    <tr>
                        <td> <label> Title </label> </td>
                        <td> <input value={title} onChange={e => onChange("title",e.target.value)}/> </td>
                    </tr>
                    <tr>
                        <td> <label> Text </label> </td>
                        <td> <input value={text} onChange={e => onChange("text",e.target.value)}/> </td>
                    </tr>
                    <tr>
                        <td> <label> Post Type </label> </td>
                        <td> <input value={posttype} onChange={e => onChange("posttype",e.target.value)}/> </td>
                    </tr>
                    <tr>
                        <td> <label> Creation Date </label> </td>
                        <td> <input value={creationdate} onChange={e => onChange("creationdate",e.target.value)}/> </td>
                    </tr>
                    <tr>
                        <td> <label> Tags </label> </td>
                        <td> <input value={tags} onChange={e => onChange("tags",e.target.value)}/> </td>
                    </tr>
                </tbody>
            </table>

            <br/>

            <button onClick={onCreate}>Ask question</button>
        </div>

        <div className="col-2"> </div>

    </div>
);


export default CreatePost;

