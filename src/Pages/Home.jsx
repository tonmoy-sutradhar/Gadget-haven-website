import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Categories from "../Components/Categories";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      {/* Banner section */}
      <Banner></Banner>

      {/* Categories Button section */}
      <Categories categories={data}></Categories>

      {/* Dynamic data Section */}
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
