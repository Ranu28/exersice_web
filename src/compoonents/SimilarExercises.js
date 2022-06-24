import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMussle, equipmentExcercise }) => {
  return (
    <Box xs={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography variant="h4" mb={5}>
        Exercises that target same muscle group.
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {targetMussle.length ? (
          <HorizontalScrollbar data={targetMussle} />
        ) : (
          <Loader />
        )}
      </Stack>
      {/* equipments */}
      <Typography variant="h4" mb={5}>
        Exercises that use same equipments.
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {equipmentExcercise.length ? (
          <HorizontalScrollbar data={equipmentExcercise} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
