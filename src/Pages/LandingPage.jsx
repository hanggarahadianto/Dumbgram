import React from "react";
import "../App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const register = (e) => {
    e.preventDefault();
    const data = { email: email, password: password, name: name };
    axios.post("http://localhost:3001/auth/register", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        localStorage.setItem("accessToken", response.data.data.token);
        if (response.data.status == "Success") {
          navigate("/home");
        }
        console.log(response.data);
      }
    });
  };

  const login = (e) => {
    e.preventDefault();
    const data = { email: email, password: password };
    axios.post("http://localhost:3001/auth/login", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        localStorage.setItem("accessToken", response.data.data.token);

        if (response.data.status == "Success") {
          navigate("/home");
        }

        console.log(response.data);
      }
    });
  };

  return (
    <div className="bg-black h-screen">
      <div className="grid grid-rows-2 gap-4 grid-cols-12">
        <div className="col-span-5">
          <div className="ml-16">
            <img className="mt-20" src="images/logo.png" alt="" />
            <img className="mt-10" src="images/desc.png" alt="" />
            <img className="mt-5" src="images/text.png" alt="" />
          </div>
          <div className="flex ml-16">
            <div className="mt-10">
              <label
                for="my-modal-4"
                className="btn modal-button background px-8 mr-8"
              >
                <p className="text-gray-200 font-bold">Sign In</p>
              </label>
            </div>
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label for="my-modal-4" className="modal cursor-pointer">
              <label className="modal-box relative" for="">
                <h3 class="text-4xl font-bold ml-10">Login</h3>
                <div className="flex justify-center">
                  <form className="text-center">
                    <div className="mt-12">
                      <input
                        onChange={(event) => {
                          setEmail(event.target.value);
                        }}
                        name="email"
                        type="text"
                        placeholder="Email"
                        className="text-gray-800 placeholder:text-gray-700 font-semibold px-4 py-2 rounded-lg bg-gray-400 border-4 border-gray-300 w-10/12"
                      ></input>
                      <input
                        onChange={(event) => {
                          setPassword(event.target.value);
                        }}
                        type="text"
                        name="password"
                        placeholder="Password"
                        className="text-gray-800 placeholder:text-gray-700 font-semibold px-4 py-2 mt-5 rounded-lg bg-gray-400 border-4 border-gray-300 w-10/12"
                      ></input>
                      <div className="flex justify-center mt-12">
                        <button
                          onClick={login}
                          className="background px-8 py-2 rounded-md w-96"
                        >
                          <p className="text-xl text-gray-200 font-bold">
                            Login
                          </p>
                        </button>
                      </div>
                      <div className="mt-8">
                        <p className="font-bold text-xl cursor-pointer">
                          Don't have and account? Click Here
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </label>
            </label>
            <div className="mt-10">
              <label
                for="my-modal-5"
                className="btn modal-button bg-gray-800 px-8 py-2"
              >
                <p className="font-bold text-gray-200 mt-1">Sign Up</p>
              </label>
              <input type="checkbox" id="my-modal-5" className="modal-toggle" />
              <label for="my-modal-5" className="modal cursor-pointer">
                <label className="modal-box relative" for="">
                  <h3 class="text-4xl font-bold ml-10">Register</h3>
                  <div className="flex justify-center">
                    <form className="text-center">
                      <div className="mt-12">
                        <input
                          onChange={(event) => {
                            setEmail(event.target.value);
                          }}
                          name="email"
                          type="text"
                          placeholder="Email"
                          className="text-gray-800 placeholder:text-gray-700 font-semibold px-4 py-2 rounded-lg bg-gray-400 border-4 border-gray-300 w-10/12"
                        ></input>
                        <input
                          onChange={(event) => {
                            setPassword(event.target.value);
                          }}
                          type="password"
                          name="password"
                          placeholder="Password"
                          className="text-gray-800 placeholder:text-gray-700 font-semibold px-4 py-2 mt-5 rounded-lg bg-gray-400 border-4 border-gray-300 w-10/12"
                        ></input>
                        <input
                          onChange={(event) => {
                            setName(event.target.value);
                          }}
                          type="text"
                          name="name"
                          placeholder="Name"
                          className="text-gray-800 px-4 placeholder:text-gray-700 font-semibold py-2 mt-5 rounded-lg bg-gray-400 border-4 border-gray-300 w-10/12"
                        ></input>
                        <div className="flex justify-center mt-12">
                          <button
                            onClick={register}
                            className="background px-8 py-2 rounded-md w-96"
                          >
                            <p className="text-xl text-gray-200 font-bold">
                              Register
                            </p>
                          </button>
                        </div>
                        <div className="mt-8">
                          <label for="my-modal-4">
                            <p className="font-bold text-xl cursor-pointer">
                              Already have an account? Click here
                            </p>
                          </label>
                        </div>
                      </div>
                    </form>
                  </div>
                </label>
              </label>
            </div>
          </div>
        </div>
        <div className="col-span-7">
          <img className="mt-6" src="images/landingpage.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
