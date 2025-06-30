import { useEffect } from "react"
import { useParams } from "react-router-dom"
import contactService from "../services/ContactServices.jsx"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { Type } from "../components/Type.jsx"
export const Tipos = () => {
    const { id } = useParams()
    const { store, dispatch } = useGlobalReducer()
    useEffect(() => {
        contactService.getOneTipos(id).then(tipos=>
            dispatch({ type: 'pokemon_details', payload: tipos }))
    }, [])
    return (
        <div className="container-details mt-4">
            <p className="datos">Name: {store.details?.name}</p>
        </div>
    );
};