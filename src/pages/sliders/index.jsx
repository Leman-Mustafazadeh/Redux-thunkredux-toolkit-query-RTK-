import { useDeleteMovieMutation, useGetMoviesQuery } from '../../services/moviesQuerySlice'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Sliders = () => {
  const {
    data: movie,
    error,
    isLoading,
    refetch,
  } = useGetMoviesQuery()


  const[handledel]=useDeleteMovieMutation()
  return (
    <>
      <Swiper
        style={{ margin: "30px auto" ,width:"1400px"}}
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Pagination]}
        className="mySwiper"
      >{
          movie && movie.map((movie) => {
            console.log(movie);
            return (
              <SwiperSlide key={movie.id}><Box>
                 
                <h1>{movie.title}</h1>
                <img style={{ width: "100%", objectFit: "cover", height: "450px" }} src={movie.posterImg} alt="" />
               </Box>
               
               <Button onClick={(e)=>{
                  handledel(movie.id)
                  refetch()
                }}>
                  delete
                </Button>
                <Button >
                  <Link to={`/movies/${movie.id}`}>detail</Link>
                </Button>
               </SwiperSlide>

            )
          })
        } </Swiper>
    </>
  )
}

export default Sliders
