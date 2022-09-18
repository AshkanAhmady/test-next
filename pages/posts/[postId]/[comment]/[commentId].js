import { useRouter } from "next/router";

const Comment = () => {
  const router = useRouter();
  const { postId, commentId } = router.query;
  return (
    <h1>
      Comment - {commentId} for post - {postId}
    </h1>
  );
};

export default Comment;
