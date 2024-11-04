import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
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
          <Link>
            <button className="bg-white text-purple-600 rounded-full px-3 py-1 border-2 border-white font-bold ">
              Cart
            </button>
          </Link>
          <Link>
            <button className="bg-white text-purple-600 rounded-full px-3 py-1 border-2 border-white font-bold ">
              Wishlist
            </button>
          </Link>
        </div>
      </div>

      <div>
        <h1 className="text-purple-500 font-bold">Cart</h1>
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Dashboard;
