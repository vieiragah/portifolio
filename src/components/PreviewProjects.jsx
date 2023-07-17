import '../styles/components/previewprojects.sass'

import calc from '../img/calc.jpg'
import gva from '../img/gva.jpg'
import git from '../img/gitapi.jpg'
const PreviewProjects = () => {

  const img = [
    {img: calc, 
      details: 'Uma calculadora tem Typescript, utilizando 3 tipos de temas usando como estilização o styled-components.', 
      site: "https://calculator-app-rosy-eight.vercel.app/?vercelToolbarCode=uwDV6uc0istivRW" },
    {img: gva, 
      details: 'Projeto totalmente altoral, realizado com NodeJs e Express no backend, MongoDB, e no frontend ReactJS e Styled-components com o propósito de dimencionar uma escala de funcionários dinâmicamente.',
      site: "https://gva-rouge.vercel.app/login" },
    {img: git, 
      details: 'Projeto realizado me Typescript, com Fetch para consumo da API do Github, neste projeto você pode pesquisar algumas informações de usuários desta plataforma.', 
      site: "https://api-git-smoky.vercel.app/" }
  ]


  return (
    <div>
      <aside>
        {img.map((image, index) => (
          <div key={index}>
            <a href={image.site} target='_blank'>
              <img className='image-preview' src={image.img} alt="Imagem ilustratica do projeto." />
              </a>
            <p className='image-p'>{image.details}</p>
            <hr className='line-break' />
          </div>
        ))}
      </aside>
    </div>
  )
}

export default PreviewProjects




















// import React from 'react';
// import Carousel from './Carousel';

// import calc from '../img/calc.jpg'
// import gva from '../img/gva.png'
// import breve from '../img/breve.png'



// const PreviewProjects = () => {
//   const images = [
//     {img: calc, site: 'https://calculator-app-rosy-eight.vercel.app/'}, 
//     {img: gva, site: 'https://calculator-app-rosy-eight.vercel.app/'}, 
//     {img: breve, site: 'https://calculator-app-rosy-eight.vercel.app/'}
//   ]

//   const image = images.map(image => image.img);
//   return (
//     <div>
//       <Carousel images={image} />
//     </div>
//   );
// };

// export default PreviewProjects;
