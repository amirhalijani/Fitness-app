import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "50px", xs: "35px" } }}>
      <Typography variant="h4" mb="50px" textTransform="capitalize">
        Exercises that target the same muscle group
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {targetMuscleExercises.length ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          "Loading..."
        )}
      </Stack>

      <Typography variant="h4" mt="100px" mb="50px" textTransform="capitalize">
        Exercises that use the same equipment
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {equipmentExercises.length ? (
          <HorizontalScrollbar data={equipmentExercises} />
        ) : (
          "Loading..."
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
