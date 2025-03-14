import React, { useState } from 'react';

const Horario = ({ disponibilidade }) => {
  const [disponivel, setDisponivel] = useState(disponibilidade);
  const [carregando, setCarregando] = useState(false);

  const alternarDisponibilidade = () => {
    setCarregando(true);
    setTimeout(() => {
      setDisponivel(!disponivel);
      setCarregando(false);
    }, 500);
  };

  return (
    <p onClick={!carregando ? alternarDisponibilidade : null}>
      {carregando ? 'Carregando...' : (disponivel ? 'Disponível' : 'Reservado')}
    </p>
  );
};

export default Horario;

