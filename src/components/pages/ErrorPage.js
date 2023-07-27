import "./../../style/error.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div className="error">
        <h2>404</h2>
        <em>Oups! La page que vous demandez n'existe pas.</em>

        <Link to="/">
          <p>Retourner sur la page d’accueil</p>
        </Link>
      </div>
    </div>
  );
};

export default Error;
