import React from "react";
import {Link} from "react-router-dom";
import {routes} from "../routes";
import {useContextGlobal} from "../global.context";


const Card = ({name, username, id}) => {

    const {themeState, favDispatch} = useContextGlobal()

    const addFav = () => {
        // Aqui iria la logica para agregar la Card en el localStorage
        favDispatch({type: 'ADD_FAV', payload: {name, username, id}});
    }

    return (
        <div className="card">
            {/* En cada card deberan mostrar en name - username y el id */}
            <img src="../images/doctor.jpg" alt={id} width={195}/>
            <h3>{name}</h3>
            <h3>{username}</h3>

            {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
            <Link to={routes.detail + id} style={{color: themeState.aColor}}>Details Dentist</Link>
            {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
            <button onClick={addFav} className="favButton">Add fav</button>
        </div>
    );
};

export default Card;
