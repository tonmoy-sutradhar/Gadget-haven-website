import { Link, NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  // console.log(categories);
  return (
    <div>
      {/* {categories.map((category) => (
        <Link key={category.id}></Link>
      ))} */}
      <div className="join join-vertical gap-3 border-2 border-purple-500 bg-white p-2 ">
        {categories.map((categoy) => (
          <NavLink
            className={({ isActive }) =>
              `font-bold ${
                isActive
                  ? " btn-primary text-white rounded-full bg-purple-200 "
                  : "hover: rounded-full"
              }`
            }
            to={`cards/${categoy.category}`}
            key={categoy.category}
          >
            <button className="btn w-full rounded-full    ">
              {categoy.category}
            </button>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
