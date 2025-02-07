import { useSelector } from "react-redux";
import { selectAllUsers } from "../features/users/usersSlice";

const AddAuthor = ({userId}) =>{
    const author = useSelector(selectAllUsers);
    console.log(author)
    const userFind = author.find(users => users.userid===userId)
    console.log(userId)
    console.log(userFind)
    return(
        <div>
            { userFind?userFind.author:"Unknown author"}
        </div>
    )
}
export default AddAuthor;