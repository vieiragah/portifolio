import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from 'react-icons/ai'

import '../styles/components/informationcontainer.sass';

const InformationContainer = () => {
  return (
    <section id='information'>
        <div className='info-card'>
            <AiFillPhone id='phone-icon'/>
            <div>
                <h3>WhatsApp</h3>
                <p>(11)95087-0565</p>
            </div>
        </div>
        <div className='info-card'>
            <AiOutlineMail id='email-icon'/>
            <div>
                <h3>E-mail (Gmail)</h3>
                <p>apolinario.gaah</p>
            </div>
        </div>
        <div className='info-card'>
            <AiFillEnvironment id='pin-icon'/>
            <div>
                <h3>Localização</h3>
                <p>Grande ABC / SP</p>
            </div>
        </div>
    </section>
  )
}

export default InformationContainer