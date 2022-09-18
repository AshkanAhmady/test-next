import { useRouter } from "next/router";

const Blogs = () => {
  const router = useRouter();
  const { params } = router.query;
  console.log(params);
  return <h1>all params in this page - {JSON.stringify(params)}</h1>;
};

export default Blogs;
