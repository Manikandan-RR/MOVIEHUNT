

export const Header = () => {

    return (

        <>
            <nav className="navbar navbar-expand-md fixed-top bg-primary navbar-dark">
                <div className="container-fluid">
                    <a href="#" className="navbar-brand">
                        <i className="bi bi-film"></i> MovieHunt
                    </a>

                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="menu">
                        <ul className="navbar-nav me-auto">
                            <li className="navbar-item"><a href="" className="nav-link">Home</a></li>
                            <li className="navbar-item"><a href="" className="nav-link">Top Rated</a></li>
                            <li className="navbar-item"><a href="" className="nav-link">Popular</a></li>
                            <li className="navbar-item"><a href="" className="nav-link">Upcoming</a></li>
                        </ul>
                        <form action="#">
                            <input type="search" placeholder="Search" className="form-control form-control-sm " />
                        </form>
                    </div>





                </div>

            </nav>
        </>
    )
}

