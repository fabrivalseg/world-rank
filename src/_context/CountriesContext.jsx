import React, { createContext, useContext, useEffect, useState } from 'react';

export const CountriesContext = createContext();

export const CountriesProvider = ({ children }) => {
    const [countries, setCountries] = useState([]);
    const [filtrados, setFiltrados] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
            const fetchData = async () => {
                setIsLoading(false);
                const response = await fetch('https://restcountries.com/v3.1/all?sort=population');
                const data = await response.json();
                const newData = data.map((country) => {
                    console.log(country)
                    const name = country.name.common;
                    const population = country.population;
                    const area = country.area;
                    const region = country.region;
                    const flags = country.flags.png;
                    const subRegion = country.subregion;
                    const independent = country.independent;
                    const unMember = country.unMember;
                    const languages = country.languages && Object.values(country.languages)
                    const currencies = country.currencies && Object.values(country.currencies).map(c => `${c.name} (${c.symbol})`).join(", ");

                    const countrys = { name, population, area, region, flags, subRegion, independent, unMember, languages, currencies };
                    return countrys;
                });
                setCountries(newData);
                setIsLoading(true);
                
            }
            fetchData();
        }, []);
    
    return (
        <CountriesContext.Provider value={{countries, setCountries, filtrados, setFiltrados, isLoading, setIsLoading}}>
            {children}
        </CountriesContext.Provider>
    );
};

export const useCountries = () => useContext(CountriesContext);