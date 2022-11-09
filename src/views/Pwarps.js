import { Link } from "react-router-dom";

const Pwarps = () => {
     return (
          <div className="pwarps">
               <section className="about" id="about">
                    <div className="content">
                         <h1>Pwarps 📌</h1>
                         <p className="guide-p">Los jugadores pueden optar por crear sus propios warps (<b>/pwarps</b>) para crear
                              tiendas, eventos, hacer granjas públicas, o en general para mostrar al mundo sus creaciones en el
                              servidor.</p>
                         <div className="link-container">
                              <Link to="/rangos" className="link">Siguiente - Rangos 👀</Link>
                         </div>
                    </div>
               </section>
          </div>
     );
}

export default Pwarps;