const Hero = () => {
  return (
    <>
      <section className="relative pb-8 h-[750px]">
        <div>
          <img
            src="https://i.postimg.cc/GtLq0f0d/pexels-vlada-karpovich-4050291.jpg"
            className="absolute top-0 bottom-0 left-0 right-0 object-cover w-full h-full"
            alt=""
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center bg-gray-900/75">
            <div className="z-10 max-w-6xl px-4 mx-auto ">
              <span className="text-xs font-semibold text-blue-400 uppercase">
                Knowledge is power
              </span>
              <h2 className="mt-2 mb-4 text-3xl font-bold leading-tight text-white md:text-4xl md:leading-tight lg:text-7xl lg:leading-tight g">
                Lorem Ipsum Dummy Heading
              </h2>
              <p className="mb-8 text-base leading-8 text-gray-400 lg:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
              <div className="items-center justify-start block gap-4 md:flex">
                <a
                  className="block px-5 py-3 mb-4 text-sm font-semibold text-center text-gray-100 transition duration-200 bg-blue-600 rounded md:mb-0 md:inline-block hover:bg-blue-700 "
                  href="#"
                >
                  {" "}
                  Read More{" "}
                </a>
                <a
                  className="block px-5 py-3 text-sm font-semibold text-center text-blue-700 transition duration-200 bg-white rounded md:inline-block hover:bg-blue-700 hover:text-gray-100"
                  href="#"
                >
                  {" "}
                  Get Started{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
