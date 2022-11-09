import { Link } from "react-router-dom";

const Subastas = () => {
     return (
          <div className="subastas">
               <section className="about" id="about">
                    <div className="content">
                         <h1>Subastas 💰</h1>
                         <p className="guide-p">Es el mayor flujo de comercio entre jugadores en el servidor.
                              <br />
                              <br />
                              La casa de subastas es una tienda virtual por la cual los jugadores pueden comprar y/o vender todo tipo de objetos a cambio de dinero del servidor.
                              <br />
                              Se accede a ella mediante el npc de comercio que se encuentra en el spawn, o usando el comando <b>/ah</b>. Lo anterior desplegara un menú por el que podrás navegar y revisar los objetos ofrecidos a la venta por otros jugadores.
                              En cambio, si deseas vender objetos, teniendo el/los objetos en la mano, utilizar el comando <b>"/ah sell (precio) (cantidad)"</b>. Si la cantidad no es especificada, se venderán todos los objetos que tengas en la mano por el valor indicado.
                              Para reclamar objetos comprados, o cuyo tiempo de venta expiró, puedes hacerlo en la parte inferior izquierda del menú de /ah.
                              <br />
                              <br />
                              Cabe mencionar que el limite de objetos simultáneos a la venta por jugador aumenta acorde al rango del mismo en el servidor.</p>

                         <div className="link-container">
                              <Link to="/vehiculos" className="link">Siguiente - Vehiculos 👀</Link>
                         </div>
                    </div>
               </section >
          </div >
     );
}

export default Subastas;