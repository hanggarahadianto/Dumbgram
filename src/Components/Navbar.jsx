import React from "react";
import {
  PencilAltIcon,
  HomeIcon,
  GlobeAltIcon,
  LogoutIcon,
} from "@heroicons/react/solid";
import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import Profile from "./Profile";

function Navbar() {
  const [preview, setPreview] = useState(null);
  const [profile, setProfile] = useState([]);

  const [form, setForm] = useState({
    caption: "",
    image: "",
    bio: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });

    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  const onSubmit = (e) => {
    try {
      e.preventDefault();

      const data = new FormData();
      data.set("name", form.name);
      data.set("username", form.username);
      data.set("bio", form.bio);
      data.set("image", form.image[0], form.image[0].name);

      axios
        .post("http://localhost:3001/profile", data, {
          // headers: {
          //   accessToken: localStorage.getItem("accessToken"),
          // },
        })
        .then((response) => {
          //   const postToAdd = { caption: caption, image: image };
          //   set([...account, accountToAdd]);
          // });
          console.log(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    axios.get("http://localhost:3001/profile").then((response) => {
      console.log(response.data);
      setProfile(response.data);
    });
  }, []);

  return (
    <div className="ml-5 bg-dark1">
      <div className="cursor-pointer">
        <div className="ml-10 mt-8">
          <img
            className="h-12 mr-60 cursor-pointer"
            src="images/logo.png"
            alt=""
          />
        </div>
        <Profile />
        {/* <div className="flex justify-end">
          <label for="my-modal-6" className="btn modal-button mt-12 mr-3">
            <PencilAltIcon className="h-8" />
          </label>
        </div> */}
        {/* <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        <label for="my-modal-6" class="modal cursor-pointer">
          <label class="modal-box relative" for="">
            <h3 class="text-3xl font-bold">Edit Profile</h3>
            <div className="mt-5 rounded-full background w-32 h-32">
              {preview && (
                <div className=" ">
                  <img
                    className="rounded-full w-32 h-32 object-cover"
                    src={preview}
                  />
                </div>
              )}
            </div>
            <form onSubmit={onSubmit}>
              <div className="mt-10">
                <input
                  onChange={handleChange}
                  multiple="multiple"
                  name="image"
                  type="file"
                ></input>
                <input
                  onChange={handleChange}
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="bg-gray-800 text-gray-200 rounded-lg mt-10 h-12 w-80 px-4"
                ></input>
                <input
                  onChange={handleChange}
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="bg-gray-800 text-gray-200 rounded-lg mt-2 h-12 w-80 px-4"
                ></input>
                <input
                  onChange={handleChange}
                  type="text"
                  name="bio"
                  placeholder="Bio"
                  className="bg-gray-800 text-gray-200 rounded-lg mt-2 h-12 w-80 px-4"
                ></input>
              </div>
              <div className="flex justify-end">
                <button
                  onSubmit={onSubmit}
                  for="my-modal-4"
                  className="btn mt-2 background "
                >
                  <p className="text-gray-200 w-24">Submit</p>
                </button>
              </div>
            </form>
          </label>
        </label> */}
      </div>
      {/* 
      {profile.map((profile) => {
        return (
          <div key={profile.id}>
            <div className="flex justify-center ">
              <img
                className="border-4 border-emerald-400 rounded-full h-32 w-32 object-cover"
                src={`http://localhost:3001/${profile.image}`}
                alt=""
              />
            </div>
            <div>
              <p className="text-gray-200 mt-5 font-bold text-2xl text-center">
                {profile.name}
              </p>
            </div>
            <div className="mt-2 text-xl text-gray-200 text-center">
              <p>@{profile.username}</p>
            </div>

            <div className="mt-10 grid grid-rows-2 gap-4 grid-cols-12">
              <div className="col-span-4">
                <div>
                  <p className="text-2xl text-gray-200">Post</p>
                  <p className="text-lg text-gray-200">276</p>
                </div>
              </div>
              <div className="col-span-4">
                <div>
                  <p className="text-2xl text-gray-200">Follower</p>
                  <p className="text-gray-200 text-lg">203.908</p>
                </div>
              </div>
              <div className="col-span-4">
                <div>
                  <p className="text-2xl text-gray-200">Following</p>
                  <p className="text-gray-200 text-lg">420</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xl text-gray-200">{profile.bio}</p>
            </div>
          </div>
        );
      })} */}

      <div className=" mt-20">
        <div className="flex justify-start cursor-pointer">
          <HomeIcon className="h-12" />
          <p className="font-semibold ml-10 mt-3">Home</p>
        </div>
        <div className="flex justify-start mt-10 cursor-pointer">
          <GlobeAltIcon className="h-12" />
          <p className="font-semibold ml-10 mt-3">Explore</p>
        </div>
        <div className="flex justify-start mt-40 cursor-pointer">
          <LogoutIcon className="h-12" />
          <p className="font-semibold ml-10 mt-3">Logout</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
