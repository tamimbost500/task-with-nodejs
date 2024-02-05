import { useState } from "react";
import useGetAllSelector from "../../Hooks/useGetAllSelector";
import useGetUserInfo from "../../Hooks/useGetUserInfo";
import baseUrlPublic from "../../utils/baseUrlPublic";
import Swal from "sweetalert2";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const MyInfo = () => {
  const axios = baseUrlPublic();
  const data = useGetAllSelector();
  const user = useGetUserInfo();
  console.log("first, ", user);
  const [info, setInfo] = useState({
    name: "",
    selectors: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setInfo((prev) => ({ ...prev, [name]: value }));
  };
  console.log(info);
  const handleSubmitInfo = async (e) => {
    e.preventDefault();
    const userInfo = {
      name: info.name,
      selectors: info.selectors,
    };
    const { data } = await axios.patch("/user/update-user-info", userInfo);
    console.log(data, 29);
    if (data.error) {
      setError(data.error);
      setLoading(false);
    }
    if (data.data) {
      setLoading(false);
      Swal.fire({
        title: "Congratulations",
        text: "Your Profile successfully updated",
        icon: "success",
      });
    }
  };
  return (
    <>
      <section className="py-16 bg-gray-100  ">
        <div className="max-w-6xl px-4 mx-auto ">
          <div className="p-8 px-4 bg-white  ">
            <div className="grid grid-cols-1 lg:grid-cols-[30%,1fr] gap-6">
              <div>
                <h2 className="px-4 text-lg font-medium leading-6 text-gray-900  ">
                  Your Information
                </h2>
                <p className="px-4 mt-1 text-sm text-gray-600  ">
                  You Can update your Information
                </p>
              </div>
              <div>
                <form onSubmit={handleSubmitInfo}>
                  <div className="px-4 mb-6">
                    <label className="block mb-2 text-sm font-medium  ">
                      {" "}
                      Full Name
                    </label>
                    <input
                      onChange={handleOnchange}
                      defaultValue={user?.name}
                      className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded        "
                      type="text"
                      name="name"
                      placeholder="Enter a name"
                    />
                    {error && (
                      <p className="text-red-500 text-xs font-semibold">
                        {error.name}
                      </p>
                    )}
                  </div>

                  <div className="px-4 mb-6">
                    <label className="block mb-2 text-sm font-medium  ">
                      Email address
                    </label>
                    <input
                      defaultValue={user?.email}
                      disabled
                      className="block cursor-not-allowed w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded        "
                      type="text"
                      name=""
                      placeholder="Redirect"
                    />
                  </div>
                  <div className="px-4 mb-6">
                    <p className="">
                      you are currently involved in:{" "}
                      <span className="text-green-800 font-bold">
                        {" "}
                        {user?.selectors}
                      </span>
                    </p>
                  </div>
                  <div className="px-4 mb-6">
                    <label className="block mb-2 text-sm font-medium  ">
                      Selectors
                    </label>

                    <select
                      onChange={handleOnchange}
                      className="block  w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded        "
                      name="selectors"
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
                                <option key={subItem._id} value={subItem.name}>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                                  {subItem.name}
                                </option>
                              ))}
                            </>
                          ))}
                        </>
                      ))}
                    </select>
                    {error && (
                      <p className="text-red-500 text-xs font-semibold">
                        {error.selectors}
                      </p>
                    )}
                  </div>
                  <div className="px-4 ">
                    <div className="flex ">
                      <button
                        type="submit"
                        className="inline-block px-6 py-2.5 bg-blue-500  text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600 hover:shadow-lg "
                      >
                        {loading ? (
                          <AiOutlineLoading3Quarters
                            className="spin mx-auto"
                            size={24}
                          />
                        ) : (
                          "Update"
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyInfo;
