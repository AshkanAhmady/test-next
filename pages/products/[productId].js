import axios from "axios";
import { useRouter } from "next/router";

const Product = ({ product }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading ...</div>;
  }
  return (
    <div>
      <span>
        titleProduct: {product.title} - price: {product.price}
      </span>
    </div>
  );
};

export default Product;

export async function getStaticPaths() {
  return {
    paths: [{ params: { productId: "1" } }],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { data } = await axios.get(
    `http://localhost:4000/products/${params.productId}`
  );

  return {
    props: {
      product: data,
    },
    revalidate: 10,
  };
}
