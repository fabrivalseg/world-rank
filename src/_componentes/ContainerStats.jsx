"use client"
import StatsLeft from "./StatsLeft"
import StatsRight from "./StatsRight"
import { useCountries } from "../_context/CountriesContext"


export default function ContainerStats() {
    const { countries, setCountries, filtrados, setFiltrados, isLoading, setIsLoading } = useCountries();

    function cambiarOrden(e){
        let newData;
        if (filtrados.length !== 0) {
            newData = [...filtrados];
        } else{
            newData = [...countries];
        }
        let ordenado;
        if(e === "population"){
            ordenado = newData.sort((a, b) => b.population - a.population)
        }else if(e === "area"){
            ordenado = newData.sort((a, b) => b.area - a.area)
        }else if(e === "name"){
            ordenado = newData.sort((a, b) => a.name.localeCompare(b.name))
        }
        setFiltrados([...ordenado])

    }

    function buscarContinente(continente){
        if (continente === "todos"){
            document.querySelector(".button-region-activo").classList.remove("button-region-activo");
            document.querySelector(`.${continente}`).classList.add("button-region-activo");
            setFiltrados([])
            return
        }
        document.querySelector(".button-region-activo").classList.remove("button-region-activo");
        document.querySelector(`.${continente}`).classList.add("button-region-activo");
        const todos = [...countries];
        const filtrado = todos.filter((country) => country.region === continente);
        setFiltrados([...filtrado]);
    }

    const buscarIndependiente = () => {
        let todos;
        if (filtrados.length !== 0) {
            todos = [...filtrados];
        } else {
            todos = [...countries];
        }
        const checked = document.querySelector(".check-independent").checked
        
        if (checked === true){
            const filtrado = todos.filter((country) => country.independent == true);
            setFiltrados([...filtrado]);
        } else{
            setFiltrados([])
        }
        
    }

    const buscarMiembro = () => {
        let todos;
        if (filtrados.length !== 0) {
            todos = [...filtrados];
        } else {
            todos = [...countries];
        }
        const checked = document.querySelector(".check-member").checked

        if(checked == true){
            const filtrado = todos.filter((country) => country.unMember == true);
            setFiltrados([...filtrado]);
        }else{
            setFiltrados([])
        }
        
    }


    return(
        <div className="container-stats" >
            <StatsLeft cambiarOrden={cambiarOrden} buscarContinente={buscarContinente} buscarIndependiente={buscarIndependiente} buscarMiembro={buscarMiembro}/>
            {isLoading ? <StatsRight countries={countries} filtrados={filtrados}/> : <h1 style={{color: "white"}}>Loading ...</h1>}

        </div>
    )
}