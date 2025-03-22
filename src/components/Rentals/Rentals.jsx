import React, { useEffect } from "react";
import styles from "./Rentals.module.css";
import stylesButton from "../Utilities/Button.module.css";
import Button from "../Utilities/Button";
import Input from "../Utilities/Input";
const Rentals = () => {
  // Dados mockados
  const dias = [
    { nome: "Quinta-feira", data: "02/fevereiro" },
    { nome: "Sexta-feira", data: "03/fevereiro" },
    { nome: "Sábado", data: "04/fevereiro" },
    { nome: "Domingo", data: "05/fevereiro" },
  ];

  const recursos = ["Society", "Areia 1", "Areia 2"];

  const horarios = [
    {
      hora: "19:00",
      estados: ["livre", "livre", "livre"],
    },
    { hora: "20:00", estados: ["-", "livre", "livre"] },
    { hora: "21:00", estados: ["-", "-", "livre"] },
    { hora: "22:00", estados: ["-", "livre", "livre"] },
    {
      hora: "23:00",
      estados: ["livre", "livre", "livre"],
    },
  ];
  const [rentalSelected, setRentalSelected] = React.useState({
    day: dias[0].data,
    nome: dias[0].nome,
    quadra: "",
    hora: "",
    index: "",
  });

  useEffect(() => {}, [rentalSelected]);

  function handleDaySelected(e, index) {
    e.preventDefault();
    setRentalSelected({
      ...rentalSelected,
      day: dias[index].data,
      nome: dias[index].nome,
      quadra: "",
      hora: "",
      index: "",
    });
  }
  function handleRentalSelect(index, e, hora) {
    e.preventDefault();
    setRentalSelected({
      ...rentalSelected,
      quadra: recursos[index],
      hora,
      index,
    });
  }
  function handleRentalConfirm(e) {
    e.preventDefault();
    console.log("Reserva confirmada");
  }
  return (
    <div
      className={`${styles.container} container animeLeft ${styles.containerRentals}`}
    >
      <div className={styles.containerDay}>
        <h1 className="title">Reserva de horários</h1>
        {/* Cabeçalho com dias */}
        <div className={`${styles.containerCarrosel}`}>
          {dias.map((dia, index) => (
            <Button
              key={index}
              className={`${
                dia.data == rentalSelected.day
                  ? stylesButton.buttonSelected
                  : stylesButton.button
              }`}
              onClick={(e) => handleDaySelected(e, index)}
            >
              <p>{dia.nome}</p>
              <p>{dia.data}</p>
            </Button>
          ))}
        </div>
      </div>

      {/* Tabela de horários */}
      <div className={`${styles.tabelaContainer}`}>
        <div className={`${styles.cabecalhoRecursos}`}>
          <div className={`${styles.celulaHorario}`}></div>
          {recursos.map((recurso, index) => (
            <div key={index} className={`${styles.celulaRecurso}`}>
              {recurso}
            </div>
          ))}
        </div>

        {horarios.map((horario, index) => (
          <div key={index} className={`${styles.linhaHorario}`}>
            <div className={`${styles.celulaHorario}`}>{horario.hora}</div>
            {horario.estados.map((estado, index) => (
              <Button
                key={index}
                className={`${stylesButton.celulaEstado} ${
                  horario.hora === rentalSelected.hora &&
                  index === rentalSelected.index
                    ? stylesButton.celulaEstadoSelected
                    : stylesButton.celulaEstado
                }`}
                data={estado}
                onClick={(e) => handleRentalSelect(index, e, horario.hora)}
                disabled={estado === "-"}
              >
                {estado !== "-" ? estado : "-"}
              </Button>
            ))}
          </div>
        ))}
      </div>
      <div className={styles.rentalConfirm}>
        <hr></hr>
        <h3 className={styles.confirmTitle}>Confirmar reserva</h3>

        <div className={styles.confirmContainer}>
          <p>
            <strong>Quadra:</strong>{" "}
            {rentalSelected.quadra || "Não selecionada"}
          </p>
          <p>
            <strong>Dia:</strong> {rentalSelected.nome || "Não selecionado"}
          </p>
          <p>
            <strong>Hora:</strong> {rentalSelected.hora || "Não selecionada"}
          </p>
          <form className={styles.confirmForm}>
            <div className={styles.formGroup}>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Digite seu nome"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <Input
                type="text"
                id="whatsapp"
                name="whatsapp"
                placeholder="Digite seu WhatsApp"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="price">Valor:</label>
              <input
                type="text"
                id="price"
                name="price"
                value="R$ 130,00"
                readOnly
              />
            </div>
            <Button
              className={stylesButton.button}
              type="submit"
              onClick={(e) => handleRentalConfirm(e)}
            >
              Confirmar Reserva
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Rentals;
