import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
     // get the menu and the checkbox
     const menu = document.getElementById('menu');
     const checkbox = document.getElementById("checkbox");

     // listen for clicks outside the menu to close it
     document.onclick = function (clickEvent) {
          if (clickEvent.target.id !== 'menu' && clickEvent.target.id !== 'checkbox') {
               document.getElementById("checkbox").checked = false;
          }
     }

     return (
          <header>
               <nav role="navigation" id="navbar">
                    <div id="menu-toggle">
                         <input type="checkbox" id="checkbox" />
                         <span></span>
                         <span></span>
                         <span></span>

                         <ul id="menu">
                              <li>
                                   <NavLink exact to="/" className="inicio" activeClassName="is-active">Inicio</NavLink>
                              </li>
                              <li>
                                   <NavLink to="/eventyr" activeClassName="is-active">Eventyr 💎</NavLink>
                              </li>
                              <li>
                                   <NavLink to="/reglas" activeClassName="is-active">Reglas 📜</NavLink>
                              </li>
                              <li>
                                   <NavLink to="/protecciones" activeClassName="is-active">Protecciones 🚧</NavLink>
                              </li>
                              <li>
                                   <NavLink to="/pwarps" activeClassName="is-active">Pwarps 📌</NavLink>
                              </li>
                              <li>
                                   <NavLink to="/rangos" activeClassName="is-active">Rangos 👑</NavLink>
                              </li>
                              <li>
                                   <NavLink to="/encantamientos" activeClassName="is-active">Encantamientos custom 📚</NavLink>
                              </li>
                              <li>
                                   <NavLink to="/quests" activeClassName="is-active">Quests 🔰</NavLink>
                              </li>
                              <li>
                                   <NavLink to="/mcmmo" activeClassName="is-active">Mcmmo ✨</NavLink>
                              </li>
                              <li>
                                   <NavLink to="/jobs" activeClassName="is-active">Jobs 👷‍♂️</NavLink>
                              </li>
                              <li>
                                   <NavLink to="/subastas" activeClassName="is-active">Subastas 💰</NavLink>
                              </li>
                              <li>
                                   <NavLink to="/vehiculos" activeClassName="is-active">Vehículos 🚁</NavLink>
                              </li>
                         </ul >
                    </div >
               </nav >
          </header >
     );
}

export default Navbar;