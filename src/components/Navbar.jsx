import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect } from "react";

export const Navbar = () => {
    const { store, dispatch } = useGlobalReducer();

    const handleRemoveFavorite = (favToRemove) => {
        dispatch({ type: "deletefavoritos", payload: favToRemove });
    };

    return (
        <nav className="navbar navbar-light">
            <div className="container-fluid">
                <Link to="/">
                    <img
                        className="ms-4"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
                        alt="Logo"
                        style={{ height: "40px" }}
                    />
                </Link>
                <div className="ml-auto">
                    <div className="dropdown">
                        <button
                            className="btn btn-primary dropdown-toggle me-4"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Favorites {store.favoritos?.length || 0}
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                            {store.favoritos && store.favoritos.length > 0 ? (
                                store.favoritos.map((fav, i) => (
                                    <li key={i} className="dropdown-item d-flex justify-content-between align-items-center">
                                        {fav}
                                        <button
                                            className="btn btn-sm btn-outline-danger ms-2"
                                            onClick={() => handleRemoveFavorite(fav)}
                                        >
                                            ✕
                                        </button>
                                    </li>
                                ))
                            ) : (
                                <li className="dropdown-item text-muted">No favorites</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};
