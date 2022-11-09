const Vehiculos = () => {
     return (
          <div className="vehiculos">
               <section className="about" id="about">
                    <div className="content">
                         <h1>Vehículos 🚁</h1>
                         <p className="guide-p">Los vehículos se pueden conseguir en el <b>/warp Mecánico</b> intercambiándolos por
                              fragmentos de azufre. Los vehiculos recién comprados vendrán con el tanque de combustible lleno.
                              <br />
                              Los Fragmentos de Azufre se obtienen de la misma forma que todos los otros fragmentos
                              .
                              <br />
                              <br />
                              Para conseguir más combustible puedes intercambiar dos
                              Fragmentos de Azufre por diez unidades de este en el Mecánico.
                         </p>
                         <br />
                         <p className="guide-p">Vehículos disponibles hasta el momento:</p>
                         <ul>
                              <li>Submarino</li>
                              <li>Taladradora</li>
                              <li>Tren</li>
                              <li>Tractor</li>
                              <li>Helicóptero</li>
                              <li>Barco Pirata</li>
                              <li>Robot de ataque <a href="https://tienda.eventyrmc.net/category/332875">(adquirible en la
                                   tienda)</a></li>
                         </ul>

                    </div>
               </section>
          </div>
     );
}

export default Vehiculos;