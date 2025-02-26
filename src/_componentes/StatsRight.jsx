import React from 'react';
import { useSelectedCountry } from '../_context/SelectCountryContext';

export default function StatsRight({countries, filtrados}){
    const { setSelectedCountry } = useSelectedCountry();
    const mostrarTarjeta = (country) => {
        document.querySelector(".container-main").classList.add("container-main-visible");
        setSelectedCountry(country);
    }

    return(
      <>
        <div className="container-right">
          <div className="table-container">
              <table className="table">
                <thead className="thead">
                  <tr className="tr-thead">
                    <th>Flag</th>
                    <th>Name</th>
                    <th>Population</th>
                    <th>Area (km²)</th>
                    <th>Region</th>
                  </tr>
                </thead>
                  <tbody className="tbody">
                    {
                      filtrados.length !== 0 ? filtrados.map((country) => {
                          return(
                              <tr onClick={() => mostrarTarjeta(country)} key={country.name}>
                                  <td><img className="image-table" src={country.flags} alt="flag" /></td>
                                  <td>{country.name}</td>
                                  <td>{country.population}</td>
                                  <td>{country.area}</td>
                                  <td>{country.region}</td>
                              </tr>
                          )
                      }):
                          countries.map((country) => {
                              return(
                                  <tr onClick={() => mostrarTarjeta(country)} key={country.name}>
                                      <td><img className="image-table" src={country.flags} alt="flag" /></td>
                                      <td>{country.name}</td>
                                      <td>{country.population}</td>
                                      <td>{country.area}</td>
                                      <td>{country.region}</td>
                                  </tr>
                              )
                          })
                    }
                    
                  </tbody>
              </table>
            </div>
          </div>
        
        </>
    )
}