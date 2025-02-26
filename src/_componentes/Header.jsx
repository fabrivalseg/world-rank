"use client"
import { useDebounce } from "use-debounce";
import { useState, useEffect } from "react";

export default function Header({ buscar, countries, setFiltrados ,filtrados }) {
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue] = useDebounce(inputValue, 100);
  
  useEffect(() => {
    if (!debouncedValue.trim()) {
      setFiltrados([]);
      return;
    }

    const filtrado = countries.filter((country) =>
      country.name.toLowerCase().includes(debouncedValue.toLowerCase()) ||
      country.region.toLowerCase().includes(debouncedValue.toLowerCase()) ||
      (country.subRegion && new RegExp(debouncedValue, "i").test(country.subRegion))
    );

    setFiltrados(filtrado);
  }, [debouncedValue, countries]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };


  return (
    <div className="header-main">
          <p style={{color: "white", fontSize: "15px", width: "20%"}}>Found {filtrados.length !== 0 ? filtrados.length : countries.length} countries</p>
          <div className="search-container">
            <input
              value={inputValue}
              onChange={handleInputChange}
              className="busqueda"
              type="text"
              placeholder="Search by Name, Region, Subregion"
            />
            <img src="/Search.svg" alt="buscar" className="search-icon" />
          </div>      
    </div>
  );
}