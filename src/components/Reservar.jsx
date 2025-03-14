import React from "react";
import Horario from "./Horario";



function Reservar() {
  const horarios = [{
    id: 1,
    data: "09/03/2025",
    hora: "19:00",
    sintetico: true,
    areia1: true,
    areia2: true,
    churrasqueira: true
  },
  {
    id: 2,
    data: "09/03/2025",
    hora: "20:00",
    sintetico: true,
    areia1: true,
    areia2: true,
    churrasqueira: true
  },
]

const datas = [...new Set(horarios.map(item => item.data))];
  return (
    <div>
      <h1>Reservar horários</h1>
      <h2>Lista de horários </h2>
    <ul>{datas.map((data, index) => <li key={index+data}>{data}</li>)}</ul>
    <div id="cabecalhos">
      <div>Horário</div>
      <div>sintetico</div>
      <div>areia1</div>
      <div>areia2</div>
      <div>churrasqueira</div>
    </div>
    <div id="linhas">
      {horarios.map((item, index) => <div key={index+item}>
        <p>{item.hora}</p>
        <Horario disponibilidade={item.sintetico}/>
        <Horario disponibilidade={item.areia1}/>
        <Horario disponibilidade={item.areia2}/>
        <Horario disponibilidade={item.churrasqueira}/>
        </div>)}
    </div>
    </div>
  );
}

export default Reservar;
