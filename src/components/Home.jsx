import React from "react";



function Home() {
  return (
    <div>
    <h3>Banner principal e Serviços?</h3>
    <div>
      <div>
        <img width={"100%"} alt="Foto" src="https://www.clubehelvetia.com.br/images/banner-churrasqueira.jpg"/>
      </div>
    </div>
    <h3>Fotos das Áreas</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        <div>
          <img width={"100%"} alt="Quadra de Society" src="https://www.tudograma.com.br/images/blog/construcao-de-quadra-de-futebol-society-tudo-o-que-voce-precisa-saber/construcao-de-quadra-de-futebol-society-tudo-o-que-voce-precisa-saber-1.jpg"/>
          <p>Quadra de Society</p>
        </div>
        <div>
          <img width={"100%"} alt="Quadras de Areia" src="https://revistaurbanova.com.br/wp-content/uploads/2022/05/IMG_6740-scaled.jpg"/>
          <p>Quadras de Areia</p>
        </div>
       
      </div>
    </div>
  );
}

export default Home;
