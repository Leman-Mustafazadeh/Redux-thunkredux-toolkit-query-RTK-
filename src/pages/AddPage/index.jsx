import React, { useState } from 'react'
import { useGetMoviesQuery, usePostMovieMutation } from '../../services/moviesQuerySlice'
import { FormControl, TextField } from '@mui/material'
import Movie from '../../classes/movieClass'

const Add = () => {
    const [postMovie] = usePostMovieMutation()
    const [newMovie, setNewMovie] = useState({ title: "", posterImg: "", releaseYear: "", genre: "" });
    const {
        data: movie,
        error,
        isLoading,
        refetch,
      } = useGetMoviesQuery()
    return (
        <>

            <form
                onSubmit={async (e) => {
                    e.preventDefault();
                    console.log("new movie: ", newMovie);
                    // const mymovie= new Movie(newMovie.title,newMovie.posterImg,newMovie.releaseYear,newMovie.genre)
                    // console.log(mymovie);
                    await postMovie(newMovie);
                    refetch();
                    setNewMovie({ title: "", posterImg: "", releaseYear: "", genre: "" });
                }}
            >
                <input
                    value={newMovie.title}
                    onChange={(e) =>
                        setNewMovie({ ...newMovie, title: e.target.value })
                    }
                    type="text"
                    placeholder="movie title"
                />
                <input
                    value={newMovie.posterImg}
                    onChange={(e) =>
                        setNewMovie({ ...newMovie, posterImg: e.target.value })
                    }
                    type="text"
                    placeholder="movie posterImg"
                />
                <input
                    value={newMovie.releaseYear}
                    onChange={(e) =>
                        setNewMovie({ ...newMovie, releaseYear: e.target.value })
                    }
                    type="text"
                    placeholder="movie realise Year"
                />
                <input
                    value={newMovie.genre}
                    onChange={(e) =>
                        setNewMovie({ ...newMovie, genre: e.target.value })
                    }
                    type="text"
                    placeholder="movie genre"
                />
                <button type="submit">add</button>
            </form>
        </>
    )
}

export default Add
