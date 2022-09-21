import React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import Feed from "../components/Feed";
import VideoDetail from "../components/VideoDetail";
import ChannelDetail from "../components/ChannelDetail";
import SearchFeed from "../components/SearchFeed";
const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Box>
          <Navbar />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/search/:id" element={<SearchFeed />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
// * Componentleri import etmek için ilgili componente 2 kez tıkla daha sonra ctrl double space