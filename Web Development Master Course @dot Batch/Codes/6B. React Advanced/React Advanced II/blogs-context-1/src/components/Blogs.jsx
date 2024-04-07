import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";

const Blogs = () => {
  // consuming context - using useContext
  const { posts, loading } = useContext(AppContext);

  return (
    <div className="w-11/12 max-w-[670px] py-4 flex flex-col gap-y-7 mt-[66px] mb-[70px] justify-center items-center">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>No Posts Found</div>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <p className="font-bold text-sm mt-4">{post.title}</p>
            <p className="text-[12px]">
              By <span className="italic">{post.author}</span> On{" "}
              <span className="underline font-bold">{post.category}</span>
            </p>
            <p className="text-[12px]">Posted on {post.date}</p>
            <p className="text-sm mt-4">{post.content}</p>
            <div className="flex gap-x-3">
              {post.tags.map((tag, index) => {
                return (
                  <span
                    key={index}
                    className="text-blue-500 underline font-bold text-xs"
                  >{`#${tag}`}</span>
                );
              })}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blogs;

// consuming context - using useContext
