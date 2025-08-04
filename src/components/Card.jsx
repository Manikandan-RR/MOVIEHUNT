import malai from "../assets/malai.jpeg"
import { Link } from "react-router-dom"

export const Card = ({movie}) => {
    return (
        <>
            <div className="col">
                <div className="card shdow-sm">
                    <img src={movie.image} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title text-primary">{movie.title}</h5>
                        <p className="card-text">{movie.description} </p>
                        <div className="d-flex align-items-center justify-content-between">
                            <Link to="" className="btn btn-sm btn-outline-primary">Read More</Link>
                            <small>
                                <i className="bi bi-star-fill text-warning"></i>
                                 7.25 | 250 reviews
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


