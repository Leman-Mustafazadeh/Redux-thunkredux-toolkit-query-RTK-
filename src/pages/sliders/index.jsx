import {
  useDeleteMovieMutation,
  useGetMoviesQuery,
} from "../../services/moviesQuerySlice";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination } from "swiper/modules";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.css';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
const Sliders = () => {
  const { data: movie, error, isLoading, refetch } = useGetMoviesQuery();

  const [handledel] = useDeleteMovieMutation();
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        {movie &&
          movie.map((movie) => {
            console.log(movie);
            return (
              <SwiperSlide key={movie.id}>
               
                  <div>
                    <img src={movie.posterImg} alt={movie.title}  />
                  </div>
               

                <Button
                  onClick={(e) => {
                    handledel(movie.id);
                    refetch();
                  }}
                >
                  delete
                </Button>
                <Button>
                  <Link to={`/movies/${movie.id}`}>detail</Link>
                </Button>
              </SwiperSlide>
            );
          })}{" "}
      </Swiper>
    </>
  );
};

export default Sliders;
