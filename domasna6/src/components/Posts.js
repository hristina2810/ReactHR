import React from "react";

export function Posts({posts}) {

   
    return(
        <div id="posts">
         {posts.length > 0 ?
        <table border="1">
            <thead>
                <tr>
                    <th>UserID</th>``
                    <th>ID</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
                {this.state.posts.map((post)=>{
                    return(
                        <tr key={post.id}>
                            <td>{post.userId}</td>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table> : <h2>Loading...</h2>}
    
        </div>
)
}
