import { MdDelete } from "react-icons/md";
const cart = ({ product, handleRemove }) => {
  const {
    product_id,
    product_name,
    product_image,
    category,
    price,
    description,
    specification,
    availability,
    rating,
  } = product || {};
  return (
    <>
      <div className="flex justify-around items-center w-6/12 mx-auto border-2 mb-3 border-purple-500 rounded-xl p-3">
        <div>
          <img className="w-28" src={product_image} alt="" />
        </div>
        <div>
          <h1>{product_name}</h1>
          <p>{description}</p>
          <p>{price}</p>
        </div>
        <button
          onClick={() => handleRemove(product.product_id)}
          className="text-red-500 text-4xl"
        >
          <MdDelete></MdDelete>
        </button>
      </div>
    </>
  );
};

export default cart;
