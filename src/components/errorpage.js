import { NavLink } from "react-router-dom";

const errorpage = () => {
  return (
        <div className="errorContainer">
            <p className="errorContainer__number">404</p>
            <p className="errorContainer__text">
                Oups! La page que vous demandez n'existe pas.
            </p>
            <NavLink to="/" className="errorContainer__linkError">
                Retourner sur la page d'accueil
            </NavLink>
        </div>
  )
}

export default errorpage