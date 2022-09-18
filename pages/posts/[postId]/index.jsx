import { useRouter } from "next/router";

const Post = () => {
    const router = useRouter();

    const {postId} = router.query;

    return ( 
        <h1>Post post page - {postId}</h1>
     );
}
 
export default Post;