import React from 'react'
import {useParams} from "react-router-dom";
import {useDentistByIdFetch} from "../hooks/useDentistFetch";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
    const {id} = useParams();
    let idNum = parseInt(id);
    const {data} = useDentistByIdFetch(idNum);

  return (
    <>
      <h1>Detail Dentist {id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
        <div>
            <img src="../images/doctor.jpg" alt={data.name} width={195}/>
            <h2>{data.name}</h2>
            <h4>{data.email}</h4>
            <h4>{data.phone}</h4>
            <h4>{data.website}</h4>
        </div>
    </>
  )
}

export default Detail