import { Link } from "react-router-dom";

const Home = () => {
     return (
          <div className="home">
               <div className="presentation">
                    <img className="eventyr-logo" src="/images/logogoodQ.png" alt="Eventyr logo" />
                    <div className="hero">
                         <h1>Guía del aventurero</h1>
                         <a href="#about-home">
                              <p className="hero-p">Desliza hacia arriba 👆</p>
                              <p className="hero-p desktop">👇</p>
                         </a>
                    </div>
               </div>

               <img className="spacer" src="/images/layer1.svg" alt="" />

               <section className="index-section about-home" id="about-home">
                    <div className="content-home">
                         <h1>Eventyr</h1>
                         <p className="guide-home">
                              Es un servidor <u>Java Edition</u> que se enfoca en la supervivencia PvE. El servidor cuenta con encantamientos
                              personalizados únicos para esta comunidad, además de tener un sistema de PvP completamente opcional. En Eventyr
                              nos enfocamos fundamentalmente en mejorar la experiencia del modo
                              supervivencia. <br /><br />
                              <i> Estamos siempre preparados para actualizar a las últimas versiones de Minecraft y solemos ser los primeros
                                   en actualizarnos para siempre estar al tanto con las últimas características del juego.</i>
                         </p>
                    </div>
                    {/* <router-link :to="{ name: 'Eventyr' }" ></router-link> */}
                    <Link to='/eventyr' className="about-button">Ver más 👀</Link>
               </section >

               <img className="spacer" src="/images/layer2.svg" alt="" />

               <section className="index-section rules">
                    <div className="content-home">
                         <h1>/reglas</h1>
                         <p className="guide-home">Para que todos tengamos una grata experiencia: <br /><br /></p>
                    </div>
                    {/* <router-link :to="{name: 'Reglas' }" className="rules-link">Te invitamos a leer las reglas 👋</router-link> */}
                    <Link to='reglas' className="rules-link">Te invitamos a leer las reglas 👋</Link>
               </section >
          </div>
     );
}

export default Home;