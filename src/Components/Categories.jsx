import { Link } from "react-router-dom";

const Categories = ({ categories }) => {
  console.log(categories);
  return (
    <div>
      {/* {categories.map((category) => (
        <Link key={category.id}></Link>
      ))} */}
      <div className="join join-vertical gap-3 border-2 border-purple-500 bg-white p-2 ">
        {categories.map((categoy) => (
          <Link to={`cards/${categoy.category}`} key={categoy.category}>
            <button className="btn rounded-full w-full bg-purple-500 text-white">
              {categoy.category}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
