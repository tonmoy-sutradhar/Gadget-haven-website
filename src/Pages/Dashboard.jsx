import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { getAllFavorites, removeFavorite } from "../LocalStorage";
import Cart from "./../Components/Cart";

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const favorites = getAllFavorites();
    setProducts(favorites);
  }, []);

  const handleRemove = (id) => {
    removeFavorite(id);
    const favorites = getAllFavorites();
    setProducts(favorites);
  };
  return (
    <>
      <div className="bg-bannerTwo h-[200px] max-w-screen-2xl">
        <h1 className="text-5xl text-white font-bold text-center pt-5 ">
          Dashboard
        </h1>
        <p className="font-thin text-white text-center pt-3 ">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>

        <div className="flex items-center justify-center gap-3 mt-3">
          <Link to="/dashboard/Cart">
            <button className="bg-white text-purple-600 rounded-full px-3 py-1 border-2 border-white font-bold ">
              Cart
            </button>
          </Link>
          <Link to="/dashboard/whishlist">
            <button className="bg-white text-purple-600 rounded-full px-3 py-1 border-2 border-white font-bold ">
              Wishlist
            </button>
          </Link>
        </div>
      </div>

      {/* <div>
        <h1 className="text-purple-500 font-bold">Cart</h1>
      </div> */}
      <div className=" my-11">
        {/* All products card --- {category} */}
        {products.map((product) => (
          <Cart
            handleRemove={handleRemove}
            key={product.id}
            product={product}
          ></Cart>
        ))}
      </div>

      {/* <Outlet></Outlet> */}
    </>
  );
};

export default Dashboard;
