import { Link } from "react-router-dom";

const Jobs = () => {
     return (
          <div className="jobs">
               <section className="about" id="about">
                    <div className="content">
                         <h1>Jobs 👷‍♂️</h1>
                         <p className="guide-p">El servidor dispone de una amplia gama de trabajos a los que los jugadores pueden
                              unirse, usando el npc que se encuentra en el spawn, o usando el comando <b>/jobs browse</b> para
                              unirse a los trabajos más comunes.</p>
                         <br />
                         <p className="guide-p">Para otros trabajos más inusuales es necesario unirse directamente usando /jobs join
                              “nombre”. El listado completo es:</p>
                         <ul>
                              <li>Alquimista</li>
                              <li>Artesano</li>
                              <li>Cazador</li>
                              <li>Constructor</li>
                              <li>Cuidador</li>
                              <li>Excavador</li>
                              <li>Fundidor</li>
                              <li>Granjero</li>
                              <li>Herrero</li>
                              <li>Leñador</li>
                              <li>Mago</li>
                              <li>Minero</li>
                              <li>Pescador</li>
                         </ul>
                         <br />
                         <p className="guide-p">
                              Para mayor información de que acciones dan dinero y cuánto dinero, utilizar <b>/jobs info
                                   “trabajo”</b>, lo que desplegará la información solicitada. Cabe mencionar que el límite de
                              jobs al cual un jugador puede unirse aumenta acorde a su rango en el servidor, iniciando en dos
                              hasta un
                              máximo de 5 trabajos simultáneos.
                              <br />
                              <br />
                              <i>Actualmente existe un límite diario de ganancias de $100.000 por medio de jobs</i>.
                         </p>
                         <div className="link-container">
                              <Link to="/subastas" className="link">Siguiente - Subastas 👀</Link>
                         </div>

                    </div>
               </section >
          </div >
     );
}

export default Jobs;
