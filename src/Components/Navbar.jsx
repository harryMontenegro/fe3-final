import React from 'react'
import {Link} from "react-router-dom";
import {routes} from "../routes";
import {useContextGlobal} from "../global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

    const {themeState, themeDispatch} = useContextGlobal()

    const switchTheme = () => {
        if (themeState.theme) {
            themeDispatch({type: 'SWITCH_DARK'})
        } else {
            themeDispatch({type: 'SWITCH_LIGHT'})
        }

    }

    return (
        <nav>
            {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
            {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
            <Link to={routes.home} style={{color: themeState.aColor}}>Home</Link>
            <Link to={routes.favs} style={{color: themeState.aColor}}>Favorites</Link>
            <Link to={routes.contact} style={{color: themeState.aColor}}>Contact us</Link>
            <div className="navButton">
                <button onClick={switchTheme}>Change theme</button>
            </div>
        </nav>
    )
}

export default Navbar