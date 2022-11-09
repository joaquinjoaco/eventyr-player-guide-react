import { Link } from "react-router-dom";

const Quests = () => {
     return (
          <div className="quests">
               <section className="about" id="about">
                    <div className="content">
                         <h1>Quests 🔰</h1>
                         <p className="guide-p">Mauris pulvinar tellus sit amet nulla bibendum commodo. Nullam quis blandit velit, a
                              eleifend elit. Ut dignissim, magna id bibendum venenatis, odio sem tincidunt dolor, sed aliquet mi
                              massa vel est.</p>

                         <div className="link-container">
                              <Link to="/mcmmo" className="link">Siguiente - Mcmmo 👀</Link>
                         </div>
                    </div>
               </section>
          </div>
     );
}

export default Quests;