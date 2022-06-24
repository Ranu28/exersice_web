import React from "react";
import { Box, Typography, Stack } from "@mui/material";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return "Loading..";
  console.log(exerciseVideos)
  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px  ">
      <Typography variant="h3" mb="33px">
        Watch <span style={{ color: "#ff2625" }}>{name}</span> exercise videos.
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignment="center"
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "110px", xs: "0" },
        }}
      >
        {exerciseVideos?.slice(0, 6).map((item, index)=>{
        return (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography variant="h5" color="#000">
                {item.video.title}
              </Typography>
              <Typography variant="h6" color="#5c2a34">
               by {item.video.channelName}
              </Typography>
            </Box>
          </a>
        );
        })}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
