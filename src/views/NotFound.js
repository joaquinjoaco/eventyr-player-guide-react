import { Link } from "react-router-dom";

const NotFound = () => {
     return (
          <div className="not-found">
               <section className="about" id="about">
                    <div className="content">
                         <h1>Oops!</h1>
                         <p className="guide-p">No encontramos esa página...</p>
                         <br />
                         <Link to="/" className="link">Volver al inicio 👍</Link>
                    </div>
               </section>
          </div>
     );
}

export default NotFound;