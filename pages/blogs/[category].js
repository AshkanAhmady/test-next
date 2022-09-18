import axios from "axios";

const Category = ({ blogs, category }) => {
  return (
    <div>
      <h2>Blogs for category: {category}</h2>
      {blogs.map((blog) => {
        return (
          <div key={blog.id}>
            <h5>title: {blog.title}</h5>
            <p>{blog.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Category;

export async function getServerSideProps(context) {
  // context: => res, req, query
  // context.query: => all querys that in the url => (link?category=react&page=1)
  // query: => {category: "react", page: 1}

  // params: => the data that come with dynamic page
  // params: => {category}
  const { params, query } = context;
  // blogs?category=react: => if we want to search the spesific data in db
  // we should act like that
  // this option is for json-server
  const { data } = await axios.get(
    `http://localhost:4000/blogs?category=${params.category}`
  );

  console.log(params.category);

  return {
    props: {
      blogs: data,
      category: params.category,
    },
  };
}
