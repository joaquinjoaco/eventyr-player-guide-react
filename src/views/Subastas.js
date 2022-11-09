import { Link } from "react-router-dom";

const Subastas = () => {
     return (
          <div className="subastas">
               <section className="about" id="about">
                    <div className="content">
                         <h1>Subastas 💰</h1>
                         <p className="guide-p">Son el mayor flujo de comercio entre jugadores en el servidor.
                              Para acceder al menú de subastas utiliza <b>/ah</b></p>

                         <div className="link-container">
                              <Link to="/vehiculos" className="link">Siguiente - Vehiculos 👀</Link>
                         </div>
                    </div>
               </section >
          </div >
     );
}

export default Subastas;