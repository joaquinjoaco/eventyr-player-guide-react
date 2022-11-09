import { Link } from "react-router-dom";

const Quests = () => {
     return (
          <div className="quests">
               <section className="about" id="about">
                    <div className="content">
                         <h1>Quests 🔰</h1>
                         <p className="guide-p">Las Quests en Eventyr, son tareas que el jugador puede cumplir a fin de obtener recompensas según el encargo que se tomó.
                              Se pueden consultar todas las Quests y sus respectivos comandos yendo a <b>/warp Misiones</b> o usando <b>/q help</b>.
                              <br />
                              <br />
                              Hay Quests de variadas dificultades, al completarlas el jugador obtendrá por comunmente dinero, y/o experiencia. Estos encargos se dividen según trabajos realizados: como minería, agricultura, excavación, cazar Mobs… etc.  Estas no se pueden repetir una vez completadas.
                              <br />
                              <br />
                              Adicionalmente hay misiones semanales y mensuales, que ofrecen grandes recompensas y fragmentos de llaves que pueden ser intercambiados por llaves <b>/warp Cerrajero</b>.
                              <br />
                              La dificultad de estas Quests siempre varía según el tiempo que pase. Se pueden repetir una vez concretado el ciclo semanal o mensual.
                              <br />
                              Existen también misiones "imposibles". Son misiones con una dificultad extrema que llevará tiempo y dedicación, pero las recompensas son más que considerables dada la dificultad de las tareas a cumplir. Échale un ojo y aprovecha de comprobar en qué eres más adepto y lo que te resulta más ameno.
                              <br />
                              <br />
                              <u>Consejo:</u><i> A medida que subas de rango podrás tomar más encargos y los podrás cumplir también de forma simultánea.</i></p>
                         <div className="link-container">
                              <Link to="/mcmmo" className="link">Siguiente - Mcmmo 👀</Link>
                         </div>
                    </div>
               </section >
          </div >
     );
}

export default Quests;