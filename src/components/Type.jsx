import { Link } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { useEffect, useState } from "react"
export const Type = ({ name, url }) => {
    const { store, dispatch } = useGlobalReducer()
    const isFav = store.favoritos.includes(name)
    let aux = url.split('/')
    let id = aux[6]
    const handleFav = () => {
        if (store.favoritos.includes(name)) {
            return dispatch({ type: "deletefavoritos", payload: name })
        }
        return dispatch({ type: "addfavoritos", payload: name })
    }
    return (
        <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card" >
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <div className="botones">
                        <Link to={'/tipos/' + id}
                            className=" btn btn-primary">
                            Learn more
                        </Link>
                        <button type="button" onClick={handleFav} className={`btn fa-regular fa-heart p-2 ${isFav ? "btn-warning" : "btn-outline-warning"}`}></button>
                    </div>
                </div>
            </div>
        </div>
    )
}