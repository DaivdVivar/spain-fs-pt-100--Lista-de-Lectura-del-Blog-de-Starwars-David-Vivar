import { useEffect } from "react"
import { useParams } from "react-router-dom"
import contactService from "../services/ContactServices.jsx"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { Location } from "../components/Location.jsx"
export const Region = () => {
    const { id } = useParams()
    const { store, dispatch } = useGlobalReducer()
    useEffect(() => {
        contactService.getOneRegion(id).then(region =>
            dispatch({ type: 'pokemon_details', payload: region })
        )
    }, [])
    return (
        <div className="container-details mt-4">
            <p className="datos">Region: {store.details?.name}</p>
        </div>
    );
};