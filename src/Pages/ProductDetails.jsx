import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  console.log(id);
  return <div>Product details {id}</div>;
};

export default ProductDetails;
