import React from "react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import Masonry from "react-masonry-component";
import "../App.css";
import useNavigate from "react-router-dom";

function Home() {
  const [loading, setLoading] = useState(false);
  const [listOfPost, setListOfPost] = useState([]);
  const [searchPost, setSearchPost] = useState("");
  useEffect(() => {
    axios.get("http://localhost:3001/post").then((response) => {
      console.log(response.data);
      setListOfPost(response.data);
    });
  }, []);
  useEffect(() => {
    const loadPost = async () => {
      setLoading(true);
      const response = await axios.get("http://localhost:3001/post");
      setListOfPost(response.data);
      setLoading(false);
    };
    loadPost();
  }, []);

  const masonryOptions = {
    fitWidth: false,
    columnWidth: 0,
    gutter: 0,
    itemSelector: ".photo-item",
  };

  return (
    <div className="bg-black h-full">
      <div className=" grid grid-rows-2 gap-4 grid-cols-12">
        <div className="col-span-3 border-r-2 border-gray-900">
          <Navbar />
        </div>

        <div className="col-span-9 relative ml-20">
          <div className="flex justify-end mr-5">
            <Header />
          </div>

          <div className="flex mb-10">
            <p className="text-5xl text-gray-200 font-bold">Feed</p>
            {/* <div className="mt-5">
              <input
                className="ml-40 bg-gray-800 w-96 h-10 rounded-md px-4"
                type="text"
                placeholder="Search ..."
                onChange={(e) => {
                  setSearchPost(e.target.value);
                }}
              ></input>
            </div> */}
          </div>
          <div className="relative">
            <Masonry
              className={"photo-list"}
              elementType={"ul"}
              options={masonryOptions}
              disableImagesLoaded={false}
              updateOnEachImageLoad={false}
              // imagesLoadedOptions={imagesLoadedOptions} // default {}
            >
              {listOfPost.map((listOfPost) => {
                return (
                  <div key={listOfPost.id} className={`photo-item`}>
                    <img
                      className="rounded-md mt-3"
                      src={`http://localhost:3001/${listOfPost.image}`}
                    />
                  </div>
                );
              })}
            </Masonry>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

{
  /* {listOfPost.map((listOfPost) => {
              return (
                <div key={listOfPost.id} className="columns-4">
                  <img src={`http://localhost:3001/${listOfPost.image}`} />
                  <p className="text-gray-100">{listOfPost.caption}</p>
                </div>
              );
            })} */
}

{
  /* <div>
            <div>
              {listOfPost
                .filter((value) => {
                  if (searchPost === "") {
                    return value;
                  } else if (
                    value.title.toLowerCase().includes(searchPost.toLowerCase())
                  ) {
                    return value;
                  }
                })
                .map((listOfPost) => {
                  return (
                    <div key={listOfPost.id} className="">
                      <img src={`http://localhost:3001/${listOfPost.image}`} />
                      <p className="text-gray-100">{listOfPost.caption}</p>
                    </div>
                  );
                })}
            </div>
          </div> */
}
