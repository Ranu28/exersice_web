import React, { useState, useEffect } from "react";
import { Box, Stack, Typography, Button, TextField } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({setExercices, bodyPart, setBodyPart}) => {
  const [search, setSearch] = useState("");
 
  const [bodyParts, setBodyParts] = useState([]);


  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(['all',...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const excesiceData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const searchedExercise = excesiceData.filter(
        (excercise) =>
          excercise.name.toLowerCase().includes(search) ||
          excercise.target.toLowerCase().includes(search) ||
          excercise.equipment.toLowerCase().includes(search) ||
          excercise.bodyPart.toLowerCase().includes(search)
      );

      console.log(SearchExercises.length);
      setSearch("");
      
    }
  };
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        textAlign="center"
      >
        Awesome Exercises you
        <br /> Should know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "10px",
            },
            backgroundColor: "#fff",
            width: { lg: "800px", xs: "350px" },
            borderRadius: "50px",
          }}
          height="76px"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder="Search Exercise "
        />
        <Button
          className="search-btn"
          sx={{
            backgroundColor: "#FF2625",
            color: "#FFF",
            fontWeight: "700",
            fontSize: { lg: "20px", xs: "10px" },
            width: { lg: "175px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{position:'relative', width:'100%', p : '20px'}}>
        <HorizontalScrollbar
        data={bodyParts}
        bodyPart = {bodyPart}
        setBodyPart ={setBodyPart}/>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
