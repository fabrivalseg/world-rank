"use client"

import ContainerStats from "@/_componentes/ContainerStats";
import Header from "@/_componentes/Header.jsx";
import { CountriesProvider } from "@/_context/CountriesContext";
import { useCountries } from "../_context/CountriesContext";
import { useEffect, useState } from "react";
import { useSelectedCountry } from "@/_context/SelectCountryContext";


export default function Home() {
  const { countries, setCountries, filtrados, setFiltrados } = useCountries();
  const {selectedCountry, setSelectedCountry} =  useSelectedCountry();
  const [neighbouringCountries, setNeighbouringCountries] = useState([]);

  useEffect(() => {
    let neighbouringCountries = []
    countries.map((country) => {
      if(!selectedCountry) return
      if (selectedCountry.region === country.region && selectedCountry.name !== country.name) {
        neighbouringCountries.push(country)
      }
    })

    setNeighbouringCountries(neighbouringCountries.slice(0,5))
  }, [selectedCountry])


  const buscar = (valor) => {
    if (valor === "") {
      setFiltrados([])
    }
    if (filtrados.length !== 0) {
      const filtrado = filtrados.filter((country) => country.name.toLowerCase().includes(valor.toLowerCase()) || country.region.toLowerCase().includes(valor.toLowerCase()) || new RegExp(valor, 'i').test(country.subRegion))
      setFiltrados([...filtrado]);
    } else{
      const filtrado = countries.filter((country) => country.name.toLowerCase().includes(valor.toLowerCase()) || country.region.toLowerCase().includes(valor.toLowerCase()) || new RegExp(valor, 'i').test(country.subRegion))
      setFiltrados([...filtrado]);
    }
  }

  const salirTarjeta = () => {
    document.querySelector(".container-main").classList.remove("container-main-visible");
    setSelectedCountry(null)
  }

  return (
    <>
        <img src="/Logo.svg" alt="Logo" width={200} height={200} style={{position: "relative", top: "10%", marginTop: "90px"}} />
        
        <main className="container">
          <section className="container-main">
            <Header buscar={buscar} countries={countries} filtrados={filtrados} setFiltrados={setFiltrados}/>
            <ContainerStats/>
          </section>
          {selectedCountry && (
            <div className="container-tarjeta">
              <img src={selectedCountry.flags} alt="bandera-tarjeta" width={200} height={150} style={{borderRadius: "10px", position: "relative", bottom: "60px", marginBottom: "-20px"}}/>
              <h2 className="nombre-tarjeta">{selectedCountry.name}</h2>
              <h3 className="capital-tarjeta-titulo">{selectedCountry.subRegion}</h3>
              <div className="population-area-tarjeta">
                <div className="population-tarjeta">
                  <p style={{borderRight: "1px solid #1B1D1F", paddingRight: "10px"}}>Population</p>
                  <p style={{ paddingLeft: "10px"}}>{selectedCountry.population}</p>
                </div>
                <div className="area-tarjeta">
                  <p style={{borderRight: "1px solid #1B1D1F", paddingRight: "10px"}}>Area (km²)</p>
                  <p style={{paddingLeft: "10px"}}>{selectedCountry.area}</p>
                </div>
              </div>
              <div className="caracteristicas-tarjetas">
                <div className="capital-tarjeta">
                  <p style={{color: "white"}}>Capital</p>
                  <p style={{color: "white"}}>capital</p>
                </div>
                <div className="subregion-tarjeta">
                  <p style={{color: "white"}}>Subregion</p>
                  <p style={{color: "white"}}>{selectedCountry.subRegion}</p>
                </div>
                <div className="language-tarjeta">
                  <p>Language</p>
                  <p>{selectedCountry.languages}</p>
                </div>
                <div className="currencies-tarjeta">
                  <p>Currencies</p>
                  <p>{selectedCountry.currencies}</p>
                </div>
                <div className="continent-tarjeta">
                  <p>Continent</p>
                  <p>{selectedCountry.region}</p>
                </div>
              </div>
                <div className="neighbouring-countries">
                  <p className="titulo-neighbouring-countries">
                    Neighbouring Countries
                  </p>
                  <div className="neighbouring-flags">
                    {
                      neighbouringCountries.map((country) => {
                          return(
                            <img key={country.name} src={country.flags} width={80} height={50} style={{borderRadius: "6px"}} alt="bandera" />
                          )
                        
                      })
                    }
                  </div>
                </div>
                <button onClick={() => salirTarjeta()} className="boton-salir">X</button>
            
            </div>
          )}
        </main>
        
    </>
  );
}
