import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "20px",
            color: "#FFF",
            backgroundColor: "#FFA9A9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
            p: "10px 15px",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "20px",
            color: "#FFF",
            backgroundColor: "#FCC757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
            p: "10px 15px",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml="20px"
        textTransform="capitalize"
        color="#000"
        mt="12px"
        fontSize="22px"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
