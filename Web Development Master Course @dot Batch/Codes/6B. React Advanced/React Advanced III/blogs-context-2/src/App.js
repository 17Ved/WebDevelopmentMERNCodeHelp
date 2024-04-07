// import Header from "./components/Header";
// import Blogs from "./components/Blogs";
// import Pagination from "./components/Pagination";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import TagPage from "./pages/TagPage";
import CategoryPage from "./pages/CategoryPage";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import "./App.css";
import { Routes, Route, useSearchParams, useLocation } from "react-router-dom";

export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;
    if (location.pathname.includes("tag")) {
      //show tag page
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogPosts(Number(page), tag);
    } else if (location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogPosts(Number(page), null, category);
    } else {
      fetchBlogPosts(Number(page));
    }
  }, [location.pathname, location.search]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:blogID" element={<BlogPage />} />
      <Route path="/tags/:tag" element={<TagPage />} />
      <Route path="/categories/:category" element={<CategoryPage />} />
    </Routes>
  );
}



// path="/blog/:blogID" - here blogID is called as dynamic parameters
// if :blogId is written after /blog, then whichever ID comes after that /blog path, will be considered as blog.
// same with if :tag is written after /tag, then whichever tag comes after /tag paht, will be considered as tag.











// --------------------------------------------------------------------------------------------------------------
// <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
//   <Header />
//   <Blogs />
//   <Pagination />
// </div>
