import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import axios from "axios";
import useGifs from "../hooks/useGifs";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
// using process.env object, in order to access the .env file.

const Random = () => {
  // const [gif, setgif] = useState("");
  // const [loading, setLoading] = useState('false');

  // our fetchData function basically, 1st calling API from the url, takes out 'meme/gif' from it.
  // and then sets the 'gifs' value as imageSource.
  // in imageSource, we've given the path of our 'meme/gifs', which we've fetched from url using axios get request.
  // async function fetchData() {
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //   const { data } = await axios.get(url);
  // taking out data, using destructuring.
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

  // useGifs custom hooks
  const { gif, loading, fetchData } = useGifs();

  return (
    <div className="flex flex-col items-center gap-y-5 mt-[15px] w-1/2 bg-green-300 rounded-lg border border-black">
      <h1 className="text-2xl underline uppercase font-bold mt-3">
        Random GIFs
      </h1>

      {loading ? (
        <Spinner />
      ) : (
        <img src={gif} width="450" alt="gif not found" />
      )}

      <button
        // onClick={clickHandler}
        onClick={() => fetchData()}
        className="bg-pink-500 w-10/12 rounded-md text-lg py-2 font-semibold mb-[20px]"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
