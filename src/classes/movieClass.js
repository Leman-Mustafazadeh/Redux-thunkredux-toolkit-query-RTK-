import { nanoid } from "nanoid"

class Movie {
    constructor(title, posterImg, releaseYear, genre) {
        this.id = nanoid()
        this.title=title
        this.posterImg=posterImg
        this.releaseYear=releaseYear
        this.genre=genre
    }
}

export default Movie