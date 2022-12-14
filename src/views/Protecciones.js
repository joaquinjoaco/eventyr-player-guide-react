import { Link } from "react-router-dom";

const Protecciones = () => {
     return (
          <div className="protecciones">
               <section className="about" id="about">
                    <div className="content">
                         <h1>Protecciones 馃毀</h1>
                         <p className="guide-p">La protecci贸n de terrenos se realiza mediante el uso de bloques de protecci贸n
                              (<b>/ps</b>) los cuales son accesibles en <b>/warp protecciones</b> a cambio de minerales o
                              intercambiando con otros jugadores.</p>
                         <br />
                         <p className="guide-p">
                              Existen 3 tipos de bloques de protecci贸n, Carb贸n (20x20), Diamante (50x50) y Esmeralda (100x100),
                              cada uno de ellos protegen sin importar la altura en la que est茅s. Es posible colocar tantas
                              protecciones como uno desee, tanto en el mundo normal como en su respectivo Nether y End.
                              <br />
                              Estos son normalmente adquiridos mediante un npc en el spawn (/warp protecciones), donde son
                              intercambiados por distintos minerales:
                         </p>
                         <div className="image-container">
                              <img className="guide-image" src="/images/Capture.jpg" alt="Tradeos de protecciones en Eventyr" />
                         </div>

                         <p className="guide-p">Ocasionalmente pueden ser adquiridos de otros jugadores directamente por dinero u
                              otros objetos, o mediante la casa de subastas /ah. Los comandos completos para el uso de los bloques
                              de protecci贸n se encuentran a continuaci贸n:</p>
                         <ul>
                              <li><b>/ps add "Nombre jugador"</b> Agregar a un jugador a tu protecci贸n para que puede
                                   construir/destruir y abrir cofres.</li>
                              <li>
                                   <b>/ps flag</b> Muestra la configuraci贸n de los flags de la protecci贸n donde se use el comando.
                                   <ul className="nested">
                                        <li><b>chorus-fruit-teleport</b> Activa o desactiva el uso de fruta chorus en la
                                             protecci贸n</li>
                                        <li><b>enderpearl</b> Activa o desactiva el uso de perlas de ender en la protecci贸n.</li>
                                        <li><b>glide</b> Activa o desactiva el uso de elytras en la protecci贸n.</li>
                                        <li><b>mob-spawning</b> Activa o desactiva la generaci贸n de mobs agresivos y pasivos en la
                                             protecci贸n (tanto naturales como de spawners y huevos).</li>
                                        <li><b>sit</b> Activa o desactiva el sentarse en escaleras y slabs con click derecho.</li>
                                        <li><b>tnt</b> Activa o desactiva las explosiones dentro de la protecci贸n (tnt, creepers,
                                             etc).</li>
                                        <li><b>use</b> Activa o desactiva el uso de botones, puertas, trampillas y placas de
                                             presi贸n en la protecci贸n.</li>
                                        <ul className="nested">
                                             <li><b>allow</b> Si quieres permitir algo en la protecci贸n, esta es la opci贸n.</li>
                                             <li><b>default</b></li>
                                             <li><b>deny</b> Si quieres negar algo en la protecci贸n, esta es la opci贸n.</li>
                                             <li><b>null</b></li>
                                        </ul>
                                   </ul>
                              </li>
                              <li><b>/ps help</b> Muestra el listado de comandos del plugin de protecci贸n.</li>
                              <li><b>/ps home "Nombre"</b> Te teletransportas a una protecci贸n a la que tengas acceso (si una
                                   protecci贸n no aparece, ve al mismo mundo donde esta se encuentra e intentalo nuevamente).</li>
                              <li><b>/ps name "Nombre"</b> Asigna un nombre a una protecci贸n para identificarla m谩s f谩cilmente a
                                   la hora de transportarse.</li>
                              <li><b>/ps remove "Nombre jugador"</b> Remueves a un jugador de tu protecci贸n para que no pueda
                                   construir/destruir ni abrir cofres.</li>
                              <li><b>/ps sethome</b> Cambia el lugar de transporte al teletransportarse a la protecci贸n (dentro
                                   del 谩rea de la misma).</li>
                              <li><b>/ps view</b> Muestra los l铆mites de la protecci贸n en la que te encuentres con efectos de
                                   part铆culas en los bordes.</li>
                         </ul>
                         <div className="link-container">
                              <Link to="/pwarps" className="link">Siguiente - PWarps 馃憖</Link>
                         </div>
                    </div>
               </section >
          </div >
     );
}

export default Protecciones;