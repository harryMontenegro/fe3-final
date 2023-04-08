import React from "react";
import Card from "../Components/Card";
import GlobalContext, {useContextGlobal} from "../global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

    const { favState } = useContextGlobal();

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
          {
              favState.map((item) =>
                  <Card key={ item.id } name={item.name} username={item.username} id ={ item.id }/>)
          }
      </div>
    </>
  );
};

export default Favs;
