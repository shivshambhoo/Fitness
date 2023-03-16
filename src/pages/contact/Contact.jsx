import Header from '../../component/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io' 
import './contact.css'

const Contact = () => {
  return (
    <>
    <Header title="Get In Touch" image={HeaderImage}>
      Fruga itaque duci,mus, ad amet praesentim subscipit sit, assumenda nihil officia totam, animi
      culpa nobis nemo natus doloremque?
    </Header>
    <section className="contact">
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href= "mailto:shivshambhookch@gmail.com" target="_blank" rel='noreferrer noopener'><MdEmail/></a>
          <a href='https://facebook.com/' target="_blank" rel='noreferrer noopener'><BsMessenger/></a>
          <a href='https://wa.me/+919570034680' target="_blank" rel='noreferrer noopener'><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact