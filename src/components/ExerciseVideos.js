import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return "Loading...";

  return (
    <Box
      sx={{
        marginTop: { lg: "100px", xs: "50px" },
        textAlign: { lg: "left", xs: "center" },
      }}
      p="20px"
    >
      <Typography variant="h4" mb="50px" textTransform="capitalize">
        Watch <span style={{ color: "#FF2625" }}>{name}</span> exercise video
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "110px", xs: "75px" },
          textAlign:{xs:"left"}
        }}
      >
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography variant="h5" color="#000">{item.video.title}</Typography>
              <Typography fontWeight="normal" variant="h6" color="#A5A5A5">{item.video.channelName}</Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
