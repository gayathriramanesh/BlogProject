import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "../features/posts/postsSlice";
import { selectAllUsers } from "../features/users/usersSlice";
import AddAuthor from "./AddAuthor";
const AddPosts = () =>{
    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')
    const [userId,setUserId] = useState('')

    const users = useSelector(selectAllUsers)
    const dispatch = useDispatch()
    const onTitleChanged = (e) =>{
        setTitle(e.target.value)
    }
    const onContentChanged = (e) =>{
        setContent(e.target.value)
    }
    const onSavePostClicked = () =>{
        dispatch(postAdded(title,content,userId))
        setTitle('')
        setContent('')
        setUserId('')
    }
    const onUserChange = (e) =>{
       setUserId(e.target.value)
    }
    const usersOptions = users.map(user => (
        <option key={user.id} value={user.userid}>
            {user.author}
        </option>
    ))
    const canSave = [title, content, userId].every(Boolean)
    return(
        <section>
        <h2>Add a New Post</h2>
        <form>
            <label htmlFor="postTitle">Post Title:</label>
            <input
                type="text"
                id="postTitle"
                name="postTitle"
                value={title}
                onChange={onTitleChanged}
            />
            <label htmlFor="postContent">Content:</label>
            <textarea
                id="postContent"
                name="postContent"
                value={content}
                onChange={onContentChanged}
            />
           <label htmlFor="postAuthor">Author:</label>
                <select id="postAuthor" value={userId} onChange={onUserChange}>
                    <option value=""></option>
                    {usersOptions}
                </select>
            <button
                type="button"
                onClick={onSavePostClicked} disabled={!canSave}
            >Save Post</button>
        </form>
    </section>
    )
}
export default AddPosts;