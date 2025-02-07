import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = [
    {
        id: "1",
        title: "Science" ,
        content: " This is a science content",
        reactions:{
            thumbsUp:0,
            heart:0,
            wow:0,
            rocket:0,
            coffee:0
        }
    },
    {
        id: "2",
        title: "Maths",
        content: "This is a maths content",
        reactions:{
            thumbsUp:0,
            heart:0,
            wow:0,
            rocket:0,
            coffee:0
        }
    }
]

const postsSlice = createSlice(
    {
    name: 'posts' ,
    initialState ,
    reducers:{
        postAdded:{
            reducer(state,action){
                state.push(action.payload)
            },
            prepare(title,content,userid){
                return{
                    payload:{
                        id: nanoid,
                        title:title,
                        content:content,
                        userid:userid,
                        reactions:{
                            thumbsUp:0,
                            heart:0,
                            wow:0,
                            rocket:0,
                            coffee:0
                        }
                    }
                }
            }
        },
        reactionAdded(state,action){
            const {postId,reaction} = action.payload
            const reactionPost= state.find(post => postId === post.id)
            if (reactionPost){
                reactionPost.reactions[reaction]++
            }

        }
        
    }
    }
)
export const selectAllPosts = state => state.posts;
export const {postAdded,reactionAdded} = postsSlice.actions
export default postsSlice.reducer