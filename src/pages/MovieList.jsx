import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { Card } from "../components";
import { useFetch } from "../custom_hooks/useFetch";



export const MovieList = ({ title, apiPath }) => {


    const { tmdbdata: movies } = useFetch({ apiPath });

    // just renaming the name tmdbData to movies

    // Equivalent to abobe code (This extracts the tmdbdata property from the returned object and renames it to movies.)
    // const result = useFetch({ apiPath });
    // const movies = result.tmdbdata;

    useEffect(() => {
        document.title = title;

    }, [title]);    

    const navigator = useNavigate();

    const ownStyle = {
        color: "rgba(232, 151, 51, 1)",
        fontWeight: "bold"
    }

    return (
        <>
            <main className="container">

                {title == "Your Guide to Great Movies" ?
                    (
                        <div className="bg-body-tertiary p-5 border mb-5">
                            <h3 className="text-primary">Welcome to MOVIEINFOS</h3>
                            <p className="lead"><span style={ownStyle}>Hi, This is Manikandan Rajendran.</span> Discover Movies you&apos;ll love with personalized suggestions, curated collections, and quick searches - your guide to finding great films</p>
                            <button className="btn btn-primary" onClick={() => navigator("/movies/upcoming")}>Explore Now</button>
                        </div>
                    )
                    :
                    (
                        " "
                    )}

                <h5 className="text-danger py-2 border-bottom">{title}</h5>

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2">
                    {movies?.map((movie) => {
                        return <Card key={movie.id} movie={movie} />
                    })}



                </div>

            </main>
        </>
    )
}
