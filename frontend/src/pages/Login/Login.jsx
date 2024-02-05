import { Link, useNavigate } from "react-router-dom";
import useGetAllSelector from "../../Hooks/useGetAllSelector";
import { useState } from "react";
import Swal from "sweetalert2";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import baseUrlPublic from "../../utils/baseUrlPublic";

const Login = () => {
  const axios = baseUrlPublic();
  const navigate = useNavigate();
  const data = useGetAllSelector();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [selectors, setSelectors] = useState("");
  const [error, setError] = useState("");
  const [terms, setTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError("");
  };
  const handleTermsChange = (e) => {
    setTerms(e.target.checked);
    setError("");
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    setError("");
  };
  const handleSelectorChange = (e) => {
    setSelectors(e.target.value);
    setError("");
  };
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const userData = {
      email,
      name,
      selectors,
      agree_to_terms: terms,
    };
    const { data } = await axios.post("/user/login", userData);
    console.log(data, 28);
    if (data.error) {
      setError(data.error);
      setLoading(false);
    }
    if (data.data) {
      setLoading(false);
      Swal.fire({
        title: "Congratulations",
        text: "Your Login is successfull wait for redrict",
        icon: "success",
      });
      setEmail("");
      setName("");
      setTerms("");
      setSelectors("");
      navigate("/");
      localStorage.setItem("token", data.data.token);
    }
  };

  return (
    <section className=" font-poppins">
      <div className="flex items-center justify-center h-screen mx-auto max-w-7xl">
        <div className="flex-1">
          <div className="flex flex-wrap ">
            <div className="w-full py-6 bg-gray-100 shadow-md lg:py-7 lg:w-1/2 ">
              <div className="max-w-md mx-auto">
                <div className="px-4 my-7 ">
                  {/* user icon */}
                  <div className="mb-7">
                    <span className="flex items-center justify-center w-20 h-20 mx-auto text-gray-900 bg-green-600 rounded-lg  ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        className="text-gray-200 bi bi-person-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
                        <path
                          fillRule="evenodd"
                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <h2 className="mb-3 text-2xl font-bold text-center text-gray-800 ">
                    Login your Account
                  </h2>
                  <p className="text-base text-center text-gray-500 mb-7 ">
                    Please fill your credentials
                  </p>
                  <form onSubmit={handleSubmit} className="">
                    <div className="mb-4">
                      <input
                        onChange={handleNameChange}
                        value={name}
                        type="text"
                        className="w-full py-4 rounded-lg px-7  "
                        placeholder="Your Name"
                        // required
                      />
                      {error && (
                        <p className="text-red-500 text-xs font-semibold">
                          {error.name}
                        </p>
                      )}
                    </div>
                    <div className="relative flex items-center mb-4">
                      <input
                        onChange={handleEmailChange}
                        value={email}
                        type="email"
                        className="w-full py-4 rounded-lg px-7  "
                        placeholder=" Your email"
                        // required
                      />
                      {error && (
                        <p className="text-red-500 text-xs font-semibold">
                          {error.email}
                        </p>
                      )}
                    </div>
                    <div className="relative flex items-center mb-4">
                      <select
                        onChange={handleSelectorChange}
                        value={selectors}
                        defaultValue={"select your selectors"}
                        className="w-full py-4 rounded-lg px-7 "
                        name=""
                        id=""
                      >
                        {data?.map((i) => (
                          <>
                            <option value={i.name}>{i.name}</option>
                            {/* Iterate over subSelectorsId */}
                            {i.subSelectorsId?.map((item) => (
                              <>
                                <option key={item._id} value={item.name}>
                                  &nbsp;&nbsp;&nbsp; {item.name}
                                </option>
                                {/* Iterate over sub_subSelectorsId */}
                                {item.sub_subSelectorsId?.map((subItem) => (
                                  <option
                                    key={subItem._id}
                                    value={subItem.name}
                                  >
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                                    {subItem.name}
                                  </option>
                                ))}
                              </>
                            ))}
                          </>
                        ))}
                      </select>
                    </div>
                    {error && (
                      <p className="text-red-500 text-xs font-semibold">
                        {error.selectors}
                      </p>
                    )}
                    <label htmlFor="" className="flex my-3">
                      <input
                        onChange={handleTermsChange}
                        type="checkbox"
                        className="mt-1 mr-4"
                      />
                      <span className="text-sm ">Agree to terms</span>
                    </label>
                    {error.agree_to_terms && (
                      <p className="text-red-500 text-xs my-2 font-semibold">
                        please select the terms and condition
                      </p>
                    )}
                    {error && (
                      <p className="text-red-500 text-xs my-2 font-semibold">
                        {error}
                      </p>
                    )}
                    <button
                      className="w-full py-4 mb-4 font-semibold text-gray-200 bg-green-600 rounded-lg px-7  hover:text-blue-200 uppercase"
                      type="submit"
                    >
                      {loading ? (
                        <AiOutlineLoading3Quarters
                          className="spin mx-auto"
                          size={24}
                        />
                      ) : (
                        "Login"
                      )}
                    </button>
                    <p className="text-sm text-gray-700 ">
                      Need an account?
                      <Link
                        to={"/register"}
                        href="#"
                        className="text-sm font-semibold text-blue-500 hover:text-blue-600  "
                      >
                        Create an account
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
            <div className="relative items-center justify-center hidden w-full lg:flex lg:w-1/2 ">
              <div className="absolute inset-0 z-10 bg-gray-900 opacity-40"></div>
              <img
                className="absolute inset-0 z-0 object-cover w-full h-full ml-auto"
                src="https://images.pexels.com/photos/7321/sea-water-ocean-horizon.jpg?auto=compress&cs=tinysrgb&h=750&w=1260"
              />
              <div className="top-0 z-10 max-w-xl mx-auto mb-12 text-center ">
                <h2 className="mb-4 text-4xl font-bold text-gray-100 ">
                  Welcome to our community and join with us
                </h2>
                <div className="max-w-lg mx-auto mb-6">
                  <p className="pt-6 font-medium text-gray-300 ">
                    lorem ipsum dor amet sidcuscd andih wkoidus iusoyions
                    hejitywa qopasation dummy text ipsum
                  </p>
                </div>
                <a
                  href="#"
                  className="inline-block px-6 py-2 font-medium bg-green-600 text-gray-50 "
                >
                  Join now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
