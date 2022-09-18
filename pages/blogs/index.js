import axios from "axios";

const BlogList = ({ blogs }) => {
  return (
    <div>
      <h2>All Blogs</h2>
      <div>
        {blogs.map((blog) => {
          return (
            <>
              <h3>
                title: {blog.title} -- category: {blog.category}
              </h3>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default BlogList;

export async function getServerSideProps(context) {
  const { data } = await axios.get("http://localhost:4000/blogs");

  return {
    props: {
      blogs: data,
    },
  };
}
