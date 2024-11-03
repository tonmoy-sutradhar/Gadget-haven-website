const Banner = () => {
  return (
    <>
      <div className="bg-bannerTwo h-[300px] ">
        <h1 className="text-4xl font-bold text-white text-center">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p className="font-thin text-white text-center">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="text-center">
          <button className="btn text-purple-500 bg-white font-bold">
            Shop Now
          </button>
        </div>
      </div>
      <div className="hero bg-banner min-h-[300px] w-4/6 mx-auto relative -top-28 rounded-xl border-b-white border-8 border-purple-400"></div>

      <div>
        <h1 className="text-3xl text-black font-bold text-center">
          Explore Cutting-Edge Gadgets
        </h1>
      </div>
    </>
  );
};

export default Banner;
