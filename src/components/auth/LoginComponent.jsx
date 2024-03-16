import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../../assets/images/common/logo.png";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import TextField from "@mui/material/TextField";

const LoginComponent = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });
  const { userName, password } = formData;

  const [errorForm, setErrorForm] = useState({
    userName: false,
    password: false,
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (
      userName !== import.meta.env.VITE_ADMIN_USERNAME ||
      password !== import.meta.env.VITE_ADMIN_PASSWORD
    ) {
      setErrorForm({ userName: true, password: true });
      return;
    } else {
      setErrorForm({
        userName: false,
        password: false,
      });
    }

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/admin/login`,
        formData
      );
      sessionStorage.setItem(
        "adminToken",
        res.data.token.replace(/"([^"]+(?="))"/g, "$1")
      );
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 -mt-20 w-80 sm:w-96 xl:w-[450px]">
      <img
        className="w-3/6 sm:w-2/6 md:w-2/5 lg:w-2/4 2xl:w-3/5 scale-125"
        src={logo}
        alt=""
      />
      <div className="flex flex-col items-center justify-center gap-1 mb-2">
        <h1 className="font-noto-sans text-gray text-4xl font-bold">
          Welcome back!
        </h1>
        <p className="text-stone-500 font-noto-sans text-center text-sm sm:text-base">
          Unlock the Full Potential: Log in and Access All Website Functionality
          for a Seamless Experience.
        </p>
      </div>
      <form className="flex flex-col gap-5 w-full xl:px-5" onSubmit={onSubmit}>
        <div className="flex flex-col items-center justify-center gap-3 w-full text-stone-600 font-roboto">
          <TextField
            label="Username"
            variant="outlined"
            type="text"
            name="userName"
            onChange={onChange}
            value={userName}
            error={errorForm.userName}
            helperText={errorForm.userName ? "Username is wrong" : ""}
            size="small"
            fullWidth
            required
          />
          <div className="relative w-full h-fit">
            <TextField
              label="Password"
              variant="outlined"
              type={`${showPassword ? "text" : "password"}`}
              name="password"
              onChange={onChange}
              value={password}
              error={errorForm.password}
              helperText={errorForm.password ? "Password is wrong" : ""}
              size="small"
              fullWidth
              required
            />
            <div
              className={`absolute right-4 ${
                errorForm.password ? "top-1/3" : "top-1/2"
              } transform -translate-y-1/2`}
            >
              {showPassword ? (
                <IoEyeOutline
                  className="cursor-pointer text-stone-500"
                  size={20}
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <IoEyeOffOutline
                  className="cursor-pointer text-stone-500"
                  size={20}
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
          </div>
        </div>
        <button
          className="duration-300 hover:bg-white hover:text-primary border hover:border-primary bg-primary rounded-md text-white py-[9px] font-semibold font-noto-sans w-full"
          type="submit"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default LoginComponent;
