"use client"
import { CountriesProvider } from "@/_context/CountriesContext";
import "./globals.css";
import { SelectedCountryProvider } from "@/_context/SelectCountryContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <CountriesProvider>
        <SelectedCountryProvider>
        <head>
            <title>Country App</title>
            <meta
              name="description"
              content="buscador de paises y sus caracteristicas."
            />
            <meta
              name="keywords"
              content="paises, area, poblacion, bandera, continente, subregion, independencia, pertenencia, idiomas, monedas, lenguajes, dominios, callingCodes"
            />
            <meta name="author" content="fabriivalseg" />
            <meta name="robots" content="index, follow" />
            <link rel="icon" href="/Logo.svg" />
          </head>
          <body >
            {children}
          </body>
        </ SelectedCountryProvider>
      </CountriesProvider>
    </html>
  );
}
