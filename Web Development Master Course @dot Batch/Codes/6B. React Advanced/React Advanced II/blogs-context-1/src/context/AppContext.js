import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

// step 1 - creating / creation of context
// also we've to export it, in order to use it in other (child)components prsent inside App.js (parent component).
export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  // filling data in above declared state variables
  async function fetchBlogPosts(page = 1) {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;

    try {
      const result = await fetch(url);
      const data = await result.json();
      console.log(data);
      setPage(data.page);
      setPosts(data.posts);
      setTotalPages(data.totalPages);
    } catch (error) {
      alert("API Broke");
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    }
    setLoading(false);
  }

  function handlePageChanges(page) {
    setPage(page);
    fetchBlogPosts(page);
  }

  const value = {
    posts,
    setPosts,
    loading,
    setLoading,
    page,
    setPage,
    totalPages,
    setTotalPages,
    handlePageChanges,
    fetchBlogPosts,
  };

  // step 2 - providing context - provider step
  // here, we're passing our value={value} / (data) to {children}, i.e. App.js component, which is child of AppContextProvider in index.js file.
  return <AppContext.Provider value={value}>
  {children}
  </AppContext.Provider>;
}

// here, children defines component which is present inside AppContextProvider tag.
// refer to index.js, where we've <App/> component as children inside <AppContextProvider></AppContextProvider> tag.
