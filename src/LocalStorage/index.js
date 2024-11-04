import { toast } from "react-toastify";

// get all products form local storage
const getAllFavorites = () => {
  const all = localStorage.getItem("favorites");

  if (all) {
    const favorites = JSON.parse(all);
    console.log(favorites);
    return favorites;
  } else {
    return [];
  }
};

// add a product to local storage
const addFavorite = (product) => {
  // console.log(product);
  const favorites = getAllFavorites();
  const isExist = favorites.find(
    (item) => item.product_id == product.product_id
  );
  if (isExist) return alert("Product Already Exist !!");
  // if (isExist) return toast.error("Product Already Exist !!");
  favorites.push(product);

  localStorage.setItem("favorites", JSON.stringify(favorites));
  alert("Successfully add a product");
  // toast.success("Successfully Add a Product !");
};

// remove a product form local storage

export { addFavorite, getAllFavorites };
