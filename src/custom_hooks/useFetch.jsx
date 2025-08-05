import { useEffect, useState } from "react"
import axios from "axios";

export const useFetch = ({ apiPath, queryTerm = "" }) => {
    const [tmdbdata, setTmdbData] = useState([])
    const key = import.meta.env.VITE_API_KEY;
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${key}&query=${queryTerm}`;

    useEffect(() => {
        async function fetchMovies() {
            try {
                const res = await axios.get(url);
                setTmdbData(res.data.results);
            }
            catch (error) {
                console.log("Error fetching Movies:", error)
            }
        }

        fetchMovies();

    }, [url])

    return { tmdbdata };
                                        //Using async/await fetch Method

    // useEffect(() => {

    //     async function fetchMovies() {
    //         try {
    //             const res = await fetch(url);
    //             const jsonData = await res.json();
    //             setTmdbData(jsonData.results);
    //         }
    //         catch (error) {
    //             console.error("Error fetching movies:", error);
    //         }
    //     }

    //     fetchMovies();

    // }, [url]);

    // return { data };

                                        //Using Promise fetch Method

    // useEffect(() => {

    //     async function fetchMovies() {
    //         fetch(url)
    //             .then(res => res.json())
    //             .then(data => setTmdbData(data.results))
    //     }

    //     fetchMovies();

    // }, [url]);

    // return { data };

};