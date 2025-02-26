import { createContext, useContext  } from 'react';
import { useState } from 'react';
export const selectedCountryContext = createContext();

export const SelectedCountryProvider = ({ children }) => {
    const [selectedCountry, setSelectedCountry] = useState(null);

    return (
        <selectedCountryContext.Provider value={{selectedCountry, setSelectedCountry}}>
            {children}
        </selectedCountryContext.Provider>
    )
}

export const useSelectedCountry = () => useContext(selectedCountryContext);