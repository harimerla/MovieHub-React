import React from 'react';

const MovieCard = ({movie}) => {

    return (
        <div className="movie">
            <div>
                <p>{movie.Year}</p>
            </div>
            <div>
                <img 
                    src={movie.Poster!='N/A'?movie.Poster:"https://via.placeholder.com/400"}
                    alt="https://m.media-amazon.com/images/M/MV5BNjk2NjFkNjgtNjM3Ny00Y2MwLWFkNDktNDdkNTQ3OGUxMWZlXkEyXkFqcGdeQXVyMjI5NDMxNjg@._V1_SX300.jpg"
                />
            </div>
            <div>
                <h1>{movie.Title}</h1>
            </div>
        </div>
    )
}

export default MovieCard