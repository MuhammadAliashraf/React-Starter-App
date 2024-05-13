import Button from "components/Button/Button";
import Toast from "components/Toast/Toast";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [isloading, setIsloading] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleRegister = async () => {
    if (!data.email || !data.password || !data.name) {
      return Toast.warning("Please enter all fields");
    }
    setIsloading(true);
    try {
      // await userRegisterApi(data);
      Toast.success("Register Successfully");
      setIsloading(false);
      navigate("/login");
    } catch (error) {
      // Toast.error(`${error.response.data.message}`);
      setIsloading(false);
      console.error(error);
    }
  };

  return (
    <div class="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
      <div class="py-8 px-8 rounded-xl">
        <h1 class="font-medium text-2xl mt-3 text-center">Register</h1>
        <div class="mt-6">
          <div class="my-5 text-sm">
            <label class="block text-black">Username</label>
            <input
              type="text"
              autofocus
              name="name"
              value={data.name}
              onChange={handleChange}
              class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
              placeholder="Username"
            />
          </div>
          <div class="my-5 text-sm">
            <label class="block text-black">Email</label>
            <input
              type="text"
              autofocus
              name="email"
              value={data.email}
              onChange={handleChange}
              class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
              placeholder="Email"
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
            title="Register"
            disabled={isloading}
            loading={isloading}
            onClick={handleRegister}
          />
        </div>
        <p class="mt-12 text-xs text-center font-light text-gray-400">
          Already have an account?
          <Link to="/login" class="text-black font-medium ml-2">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
