import React from 'react';

const About = () => {
  return (
    <div>
      <h2>About</h2>

      <div>
        <p>Texto sobre a imagem 1.</p>
        <img src="caminho/para/imagem1.jpg" alt="Descrição da imagem 1" />
      </div>

      <div>
        <img src="caminho/para/imagem2.jpg" alt="Descrição da imagem 2" />
        <p>Texto sobre a imagem 2.</p>
      </div>

      <div>
        <p>Texto sobre a imagem 3.</p>
        <img src="caminho/para/imagem3.jpg" alt="Descrição da imagem 3" />
      </div>
      
    </div>
  );
};

export default About;
