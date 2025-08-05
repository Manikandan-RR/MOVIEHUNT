import { Link } from "react-router-dom"
import NotFound from "../assets/NotFound.jpg"

export const PageNotFound = () => {

    return (
        <>
            <div className="container text-center ">
                <img src={NotFound} alt="No Image" className="image-fluid" />
                <p className="mt-5">
                    <Link to="/" className="btn btn-warning">Go To Home Page</Link>
                </p>
            </div>


        </>


    )
}

