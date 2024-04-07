import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import axios from "axios";
import useGifs from "../hooks/useGifs";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
  // const [gif, setgif] = useState("");
  // const [loading, setLoading] = useState("false");
  const [tag, setTag] = useState("");

  // async function fetchData() {
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //   const { data } = await axios.get(url);

  //   const imageSource = data.data.images.downsized_large.url;
  //   setgif(imageSource);
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // function clickHandler() {
  //   fetchData();
  // }

  function changeHandler(event) {
    setTag(event.target.value);
  }

  // useGifs custom hooks
  const { gif, loading, fetchData } = useGifs(tag);

  return (
    <div className="flex flex-col items-center gap-y-5 mt-[15px] w-1/2 bg-blue-500 rounded-lg border border-black">
      <h1 className="text-2xl underline uppercase font-bold mt-3">
        Random {tag} GIFs
      </h1>

      {loading ? (
        <Spinner />
      ) : (
        <img src={gif} width="450" alt="gif not found" />
      )}

      <input
        className="w-10/12 text-lg rounded-md mb-[3px] py-2 text-center"
        onChange={changeHandler}
        value={tag}
      />

      <button
        // onClick={clickHandler}
        onClick={fetchData}
        className="bg-pink-500 w-10/12 rounded-md text-lg py-2 font-semibold mb-[20px]"
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
