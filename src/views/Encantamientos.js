import { Link } from "react-router-dom"

const Encantamientos = () => {
     return (
          <div className="encantamientos">
               <section className="about" id="about">
                    <div className="content">
                         <h1>Encantamientos custom 📚</h1>
                         <p className="guide-p">Encantamientos personalizados del servidor para potenciar y aumentar la experiencia de
                              juego a todos en entornos
                              <b>PvE y PvP.</b>
                              Se puede acceder al menú de los encantamientos a través del <b>Mago</b> (/warp Mago) que se
                              encuentra en el Spawn, o usando el comando
                              <b>/ce</b>.
                              <br />
                              <br />
                              Existen diversos rangos de encantos (común, épico, mítico y legendario), cada uno de estos pueden
                              obtenerse directamente a cambio de experiencia o por comercio con otros jugadores.
                              <br />
                              Los libros que se obtienen por experiencia, dentro de su rareza, son aleatorios, no es
                              posible elegir uno en particular.
                              <br />
                              <br />
                              Cada libro encantado tiene una <b>Tasa de éxito</b> y una <b>Tasa de destrucción</b>, las
                              probabilidades de estos afectan que el encantamiento sea aplicado con éxito.
                              <br />
                              La Tasa de éxito puede modificarse mediante el uso del <u>Polvo mágico</u>, al aplicarlo al
                              libro, aumentará la tasa en % aleatorio.
                              <br />
                              <br />
                              Por otro lado, pueden removerse encantamientos haciendo uso del <u>Papel demoníaco</u>, al aplicarlo
                              a un item con encantamientos del servidor, quitará uno aleatoriamente y te devolverá el libro
                              encantado.
                         </p>

                         <div className="link-container">
                              <Link to="/quests" className="link">Siguiente - Quests 👀</Link>
                         </div>
                    </div>
               </section>
          </div>
     );
}

export default Encantamientos;