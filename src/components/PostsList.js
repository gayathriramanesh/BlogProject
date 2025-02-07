import React from "react";

import { selectAllPosts } from "../features/posts/postsSlice";
import { useDispatch, useSelector } from "react-redux";

import AddAuthor from "./AddAuthor";
import ReactionButtons from "./Reactions";

const PostsList = () =>{
    const posts = useSelector(selectAllPosts)
    const dispatch = useDispatch();
    return(
       <section>
        {
         posts.map((value, index) => (
            <div key={index}>
             <h4>{value.title}</h4>
             <p>{value.content}</p> 
             <p className="postCredit">
                <AddAuthor userId = { value.userid}/>
             </p>
             <ReactionButtons post={value}/>
             </div>
            ))
        }
        </section>
    )

}

export default PostsList;