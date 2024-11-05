import "./banner/banner.css";
const Banner = () => {
  return (
    <>
      <div className="bg-bannerTwo h-[350px] rounded-xl">
        <h1 className="text-5xl font-bold text-white text-center pt-9">
          Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
        </h1>
        <p className="font-thin text-white text-center pt-4">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
        <div className="text-center pt-4">
          <button className="btn text-purple-500 bg-white rounded-full font-bold">
            Shop Now
          </button>
        </div>
      </div>
      <div className="hero bg-banner min-h-[400px] md:min-h-[300px] w-4/6 mx-auto relative -top-20 rounded-xl  border-8 border-white-500"></div>

      <div>
        <h1 className="text-3xl text-gray-500 font-bold text-center">
          Explore Cutting-Edge Gadgets
        </h1>
      </div>
    </>
  );
};

export default Banner;
