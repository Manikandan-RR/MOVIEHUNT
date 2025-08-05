import Arnold from "../assets/Arnold.avif"
import { Link } from "react-router-dom"

export const Card = ({ movie }) => {
    const { id, overview, poster_path, release_date, title, vote_average, vote_count } = movie;
    const image = poster_path ? `https://image.tmdb.org/t/p/original${poster_path}` : Arnold;


    return (
        <>
            <div className="col" title={title}>
                <div className="card shdow-sm">
                    <img src={image} className="card-img-top" alt={movie.title} />
                    <div className="card-body">
                        <h5 className="card-title text-primary text-overflow-1">{title}</h5>
                        <p className="card-text text-overflow-2">{overview} </p>
                        <div className="d-flex align-items-center justify-content-between">
                            <Link to={`/movie/${id}`} className="btn btn-sm btn-outline-primary stretched-link">Read More</Link>
                            <small>
                                <i className="bi bi-star-fill text-warning"></i>
                                {vote_average} | {vote_count} reviews
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


