import axios from "axios";
import Link from "next/link";

const ProductList = ({ products }) => {
  return (
    <div>
      <h1>product list</h1>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <Link href={`/products/${product.id}`}>
              <a>
                title: {product.title} - price: {product.price}
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;

export async function getStaticProps() {
  const { data } = await axios.get("http://localhost:4000/products");

  console.log("generating products page");

  return {
    props: {
      products: data,
    },
    revalidate: 10,
  };
}
