import Avatar from '../img/EU1.jpg';
import SocialNetworks from './SocialNetworks';

import '../styles/components/sidebar.sass';
import InformationContainer from './InformationContainer';

const Sidebar = () => {


    const handleDownload =  () => {

      fetch('../../public/gabrielApolinario.pdf').then(res => {
        res.blob().then(blob => {
          const fileURL = window.URL.createObjectURL(blob);
          let alink = document.createElement('a')
          alink.href = fileURL;
          alink.download = "GabrielAplinario.pdf"
          alink.click()
        })
      })


    }


  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Gabriel Apolinario" />
      <p className="title">FullStack</p>
      <SocialNetworks/>
      <InformationContainer/> 
      <button onClick={handleDownload} className="btn">
        Download currículo
      </button>
    </aside>
  )
}

export default Sidebar