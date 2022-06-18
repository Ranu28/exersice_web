import React, { useState } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../compoonents/HeroBanner";
import SearchExercises from "../compoonents/SearchExercices";
import Exercises from "../compoonents/Exercises";

const Home = () => {
  const [excercises, setExcercises] = useState([]);
  const [bodyPart, setBodyPart] = useState(["all"]);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercices={setExcercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        excercises={excercises}
        setExercices={setExcercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
};

export default Home;
