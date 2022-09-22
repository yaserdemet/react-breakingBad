import React from "react";
import { Link } from "react-router-dom";
import {
  demoThumbnailUrl,
  demoVideoTitle,
  demoVideoUrl,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constant";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  console.log(videoId, snippet);
  return (
    <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 0 }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          sx={{ width: 358, height: 180 }}
          image={snippet?.thumbnails?.high?.url}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle"  fontWeight = "bold" color  = "#fff">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}`  : demoChannelUrl } >
          <Typography variant="subtitle2"  fontWeight = "bold" color  = "gray">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />

          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
