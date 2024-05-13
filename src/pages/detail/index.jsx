import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetMovieByIdQuery } from '../../services/moviesQuerySlice'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const Detail = () => {
  const { id } = useParams()
  const { data: movie } = useGetMovieByIdQuery(id)
  console.log(movie);

  return (
    <>
      {
        movie && (
          <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={movie.posterImg}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {movie.title}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {movie.releaseYear}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {movie.genre}
            </Typography>
         
          </CardContent>
          <CardActions>
            <Button size="small"><Link to={"/"}>GO BACK</Link> </Button>
          </CardActions>
        </Card>
        )}
    </>
  )
}

export default Detail
