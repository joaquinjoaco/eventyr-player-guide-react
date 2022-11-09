import { Link } from "react-router-dom";

const Reglas = () => {
     return (
          <div className="reglas">
               <section className="about" id="about">
                    <div className="content">
                         <h1>Reglas 📜</h1>
                         <p className="guide-p">El incumplimiento de las reglas puede llevarte a una amplia gama de sanciones,
                              dependiendo de la gravedad de la situación.</p>
                         <p className="guide-p"><b>Todos los castigos quedan a discreción del staff.</b></p>

                         <div className="list-container">
                              <h2>1. Mods externos:</h2>
                              <ul>
                                   <li>Todos los clientes de hacks están prohibidos.</li>
                                   <li>Los macros, autoclick y scripts están prohibidos.</li>
                                   <li>X-Ray y derivados están prohibidos.</li>
                                   <li>Mods como Xaero's Minimap están permitidos.</li>
                              </ul>
                         </div>
                         <div className="list-container">
                              <h2>2. Conducta de chat:</h2>
                              <ul>
                                   <li>Siempre mantén el respeto.</li>
                                   <li>Las obsenidades están prohibidas.</li>
                                   <li>Evita cualquier tópico sensible.</li>
                                   <li>El spam está prohibido.</li>
                                   <li>El flood está prohibido.</li>
                                   <li>No pedir items/rango al staff.</li>
                              </ul>
                         </div>
                         <div className="list-container">
                              <h2>3. Interacción con jugadores:</h2>
                              <ul>
                                   <li>Las estafas están prohibidas.</li>
                                   <li>Prohibido atrapar/retener jugadores.</li>
                                   <li>Grifear construcciones no protegidas es legal.</li>
                                   <li>Grifear alrededor de protecciones es ilegal.</li>
                                   <li>El tpkill está prohibido.</li>
                                   <li>Matar a jugadores con PVP desactivado está prohibido.</li>
                              </ul>
                         </div>
                         <div className="list-container">
                              <h2>4. Bugs/Exploits:</h2>
                              <ul>
                                   <li>Los abusos de bugs/exploits se castigan con permaban.</li>
                                   <li>El dupeo está prohibido.</li>
                                   <li>Las multicuentas están prohibidas si no hay aviso previo.</li>
                              </ul>
                         </div>
                         <div className="link-container">
                              <Link to="/protecciones" className="link">Siguiente - Protecciones 👀</Link>
                         </div>
                    </div>
               </section >
          </div >
     );
}

export default Reglas;