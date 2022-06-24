import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { exerciseOptions, fetchData, youtubeOptions } from "../utils/fetchData";
import SimilarExercises from "../compoonents/SimilarExercises";
import Details from "../compoonents/Details";
import ExerciseVideos from "../compoonents/ExerciseVideos";

const ExerciseDetails = () => {
  const [exerciseDetails, setExerciseDetails] = useState({});
  const [exerciseVideos, setexerciseVideos] = useState({});
  const [targetMusseleExcercises, settargetMusseleExcercises] = useState({});
  const [targetEquipmentExecerices, settargetEquipmentExecerices] = useState(
    {}
  );
  const { id } = useParams();

  useEffect(() => {
    const fetchExcerxiseData = async () => {
      const exerciseDbURL = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchAndDownloadURL =
        "https://youtube-search-and-download.p.rapidapi.com";

        //excercise data
      const excerseDetailsData = await fetchData(
        `${exerciseDbURL}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetails(excerseDetailsData);

      const exerciseVideoData = await fetchData(
        `${youtubeSearchAndDownloadURL}/search?query=${excerseDetailsData.name}`,
        youtubeOptions
      );

      setexerciseVideos(exerciseVideoData.contents);

      //simila excercises
      const targetMuccleExcerseData = await fetchData(
        `${exerciseDbURL}/exercises/target/${excerseDetailsData.target}`,
        exerciseOptions
      );
      settargetMusseleExcercises(targetMuccleExcerseData);
      const targetEquipmentExcerseData = await fetchData(
        `${exerciseDbURL}/exercises/equipment/${excerseDetailsData.equipment}`,
        exerciseOptions
      );
      settargetEquipmentExecerices(targetEquipmentExcerseData);
    };
    fetchExcerxiseData();
  }, [id]);

  return (
    <Box>
      <Details exerciseDetails={exerciseDetails} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetails.name}
      />
      <SimilarExercises targetMussle={targetMusseleExcercises} equipmentExcercise={targetEquipmentExecerices} />
    </Box>
  );
};

export default ExerciseDetails;
