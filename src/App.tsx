import { useState } from "react";
import Fetcher from "./api/Fetcher/Fetcher";
import { FetcherContext } from "./contexts/FetcherContext";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [posts, setPosts] = useState<any[]>([]);
  const [subreddit, setSubreddit] = useState<string>("halo");
  const [time, setTime] = useState<string>("month");
  const [limit, setLimit] = useState<number>(100);
  const [url, setUrl] = useState<string>(`https://www.reddit.com/r/${subreddit}/top.json?t=${time}&limit=${limit}`);
  const contextValues = {
    url,
    setUrl,
    posts,
    setPosts,
    subreddit,
    setSubreddit,
    time,
    setTime,
    limit,
    setLimit,
  };
  return (
    <div>
      <FetcherContext.Provider value={contextValues}>
        <Navbar></Navbar>
        {/* TODO: Fetcher turned off while creating basic UI */}
        <Fetcher></Fetcher>
      </FetcherContext.Provider>
    </div>
  );
}

export default App;
