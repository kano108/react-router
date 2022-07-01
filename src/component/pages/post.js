import { useParams } from "react-router-dom"
const Post = () => {
    let {category,id} = useParams()
    return (
        <>
    <h1>Post page- {category}</h1>
    <h1>Post Page-{id}</h1>
    </>
  )
}
export default Post 