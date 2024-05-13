import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASE_URL = "http://localhost:3000/"
export const movieAPI = createApi({
    reducerPath: "movieApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getMovies: builder.query({
            query: () => `movies`,
        }),
        getMovieById: builder.query({
            query: (id) => `movies/${id}`,
        }),
        deleteMovie: builder.mutation({
            query: (id) => ({
                url: `movies/${id}`,
                method: "DELETE"
            }),
        }),
        postMovie: builder.mutation({
            query: (newMovie) => ({
                url: `movies`,
                body: newMovie,
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
            }),
        }),
    }),
})

export const { useGetMovieByIdQuery, useDeleteMovieMutation, usePostMovieMutation, useGetMoviesQuery } = movieAPI