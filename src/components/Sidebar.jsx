import Avatar from '../img/EU1.jpg';
import SocialNetworks from './SocialNetworks';

import '../styles/components/sidebar.sass';
import InformationContainer from './InformationContainer';

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Gabriel Apolinario" />
      <p className="title">FullStack</p>
      <SocialNetworks/>
      <InformationContainer/> 
      <a href="https://drive.google.com/uc?export=download&id=1Axv7B8qhkjIGtIKtX_EvZJBfO_gfV9DB" className="btn">
        Download currículo
      </a>
    </aside>
  )
}

export default Sidebar