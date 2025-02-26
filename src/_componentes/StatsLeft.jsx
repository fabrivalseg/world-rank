export default function StatsLeft({ cambiarOrden, buscarContinente, buscarMiembro, buscarIndependiente }) {
    return(
        <div className="container-left"> 
            <label htmlFor="select" className="label">Sort by</label>
            <select onChange={(e) => cambiarOrden(e.target.value)} name="select" id="select">
              <option className="options" value="population">Population</option>
              <option className="options" value="area">Area</option>
              <option className="options" value="name">Name</option>
            </select>

            <label className="label" htmlFor="region">Region</label>
              <div id="region">
                <button onClick={() => buscarContinente("Americas")} className="button-region Americas">Americas</button>
                <button onClick={() => buscarContinente("Antarctic")} className="button-region Antarctic">Antartic</button>
                <button onClick={() => buscarContinente("Africa")} className="button-region Africa">Africa</button>
                <button onClick={() => buscarContinente("Asia")} className="button-region Asia">Asia</button>
                <button onClick={() => buscarContinente("Europe")} className="button-region Europe">Europe</button>
                <button onClick={() => buscarContinente("Oceania")} className="button-region Oceania">Oceania</button>
                <button onClick={() => buscarContinente("todos")} className="button-region button-region-activo todos">todos</button>
              </div>
              

            <label htmlFor="status" className="label">Status</label>
            <div id="status">
              <div className="container-checkbox">
                <input onChange={() => buscarMiembro()} className="checkbox check-member" type="checkbox"/><span className="span-check span-member">Member of the United Nations</span>
              </div>
              <div className="container-checkbox">
                <input onChange={() => buscarIndependiente()} className="checkbox check-independent" type="checkbox"/><span className="span-check">Independent</span>
              </div>
            </div>
          </div>
    )
}