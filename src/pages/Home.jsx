import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { PokemonCard } from "../components/PokemonCard.jsx";
import { Location } from "../components/Location.jsx";
import { Type } from "../components/Type.jsx";
export const Home = () => {
    const { store, dispatch } = useGlobalReducer()
    return (
        <div>
            <h1 className="m-3 ms-5">CHARACTERS</h1>
            <div className="scroll-horizontal">
                <div className="row-horizontal">
                    {store.pokemons?.results?.map((el, i) => (
                        <PokemonCard key={i} name={el.name} url={el.url} />
                    ))}
                </div>
            </div>
            <h1 className="m-3 ms-5">LOCATION</h1>
            <div className="scroll-horizontal">
                <div className="row-horizontal">
                    {store.region?.map((el, i) => (
                        <Location key={i} name={el.name} url={el.url} />
                    ))}
                </div>
            </div>
            <h1 className="m-3 ms-5">TYPES</h1>
            <div className="scroll-horizontal">
                <div className="row-horizontal">
                    {store.tipos?.map((el, i) => (
                        <Type key={i} name={el.name} url={el.url} />
                    ))}
                </div>
            </div>
        </div>
    )
}