import Button from "components/Button/Button";
import Toast from "components/Toast/Toast";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const [isloading, setIsloading] = useState(false);

  const [data, setData] = useState({
    email: "admin@gmail.com",
    password: "admin",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    if (!data.email || !data.password) {
      return Toast.warning("Please enter all fields");
    }
    setIsloading(true);
    try {
      // const response = await userLoginApi(data);
      // dispatch(loginUser(response.data));
      setTimeout(() => {
        Toast.success("User Login!");
        setIsloading(false);
        navigate("/");
      }, 2000);
    } catch (error) {
      // Toast.error(`${error.response.data.message}`);
      setIsloading(false);
      console.error(error);
    }
  };
  return (
    <div class="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
      <div class="py-8 px-8 rounded-xl">
        <h1 class="font-medium text-2xl mt-3 text-center">Login</h1>
        <div class="mt-6">
          <div class="my-5 text-sm">
            <label for="username" class="block text-black">
              Username
            </label>
            <input
              type="text"
              autofocus
              name="email"
              value={data.email}
              onChange={handleChange}
              class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
              placeholder="Username"
            />
          </div>
          <div class="my-5 text-sm">
            <label for="password" class="block text-black">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
              placeholder="Password"
            />
            <div class="flex justify-end mt-2 text-xs text-gray-600">
              <Link to="#">Forget Password?</Link>
            </div>
          </div>
          <Button
            backgroundColor="gray"
            title="Login"
            disabled={isloading}
            loading={isloading}
            onClick={handleLogin}
          />
        </div>

        <div class="flex md:justify-between justify-center items-center mt-10">
          <div class="bg-gray-300 md:block hidden w-4/12"></div>
          <p class="md:mx-2 text-sm font-light text-gray-400">
            Login With Social{" "}
          </p>
          <div class="bg-gray-300 md:block hidden w-4/12"></div>
        </div>

        <div class="grid md:grid-cols-2 gap-2 mt-7">
          <div>
            <button class="text-center w-full text-white bg-blue-900 p-3 duration-300 rounded-sm hover:bg-blue-700">
              Facebook
            </button>
          </div>
          <div>
            <button class="text-center w-full text-white bg-blue-400 p-3 duration-300 rounded-sm hover:bg-blue-500">
              Twitter
            </button>
          </div>
        </div>
        <p class="mt-12 text-xs text-center font-light text-gray-400">
          Don't have an account?
          <Link to="/register" class="text-black font-medium ml-2">
            Create One
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
