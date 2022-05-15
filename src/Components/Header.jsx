import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Header() {
  let navigate = useNavigate();

  const [listOfPost, setListOfPost] = useState([]);
  const [preview, setPreview] = useState(null);
  const [form, setForm] = useState({
    caption: "",
    image: "",
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
      data.set("caption", form.caption);
      data.set("image", form.image[0], form.image[0].name);

      axios
        .post("http://localhost:3001/post", data, {
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

  return (
    <div className="flex justify-center">
      {/* <div className="mt-5 mr-60">
        <img
          className="h-12 mr-60 cursor-pointer"
          src="images/logo.png"
          alt=""
        />
      </div> */}

      <div className="mt-5 flex ml-60">
        <img
          className="mr-5 mt-2 h-8 ml-20 cursor-pointer"
          src="images/notification.png"
          alt=""
        />
        <img
          className="h-8 mt-2 mr-12 cursor-pointer"
          src="images/message.png"
          alt=""
        />
        <label for="my-modal-4" className="btn modal-button background">
          <p className="font-bold text-gray-100">Create Post</p>
        </label>
      </div>

      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label for="my-modal-4" class="modal cursor-pointer">
        <label class="modal-box relative" for="">
          <h3 class="text-lg font-bold">Share your photo or video here ...</h3>
          <div className="mt-10 h-32 w-32 background">
            {preview && (
              <div className="">
                <img className="w-32 h-32 object-cover" src={preview} />
              </div>
            )}
          </div>
          <form onSubmit={onSubmit}>
            <div>
              <input
                onChange={handleChange}
                multiple="multiple"
                name="image"
                type="file"
              ></input>
              <input
                onChange={handleChange}
                type="text"
                name="caption"
                placeholder="Your caption ..."
                className="bg-gray-800 px-4 text-gray-200 rounded-lg mt-10 h-12 w-80"
              ></input>
            </div>
            <div className=" flex justify-end">
              <button for="my-modal-4" className="btn background mt-10 ml-80 ">
                <p className="text-lg text-gray-200">Share</p>
              </button>
            </div>
          </form>
        </label>
      </label>
    </div>
  );
}

export default Header;
