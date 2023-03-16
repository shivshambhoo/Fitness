import Header from '../../component/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Error officia dolores impedit voluptatem autem necessitatibus expedita.
        Officia cupiditate fuga excepturi.
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt='Our Story Image' />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor sequi, 
              laboriosam reiciendis iusto rem ex sapiente quaerat. Labore nobis, 
              facilis a ratione dignissimos voluptatem? Nihil impedit, 
              aperiam culpa fuga quis similique laudantium ipsum in fugit maxime. 
              Recusandae laudantium rem eos ab!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, 
              culpa! Eligendi facere, sint labore nam officia dolore veniam facilis expedita, 
              porro distinctio ipsum totam ut?
            </p>
            <p>
              Perferendis consectetur veritatils veniam, ratione,
              distinctio iste dignissimos alias ipsum minima Consequatur?
            </p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor sequi, 
              laboriosam reiciendis iusto rem ex sapiente quaerat. Labore nobis, 
              facilis a ratione dignissimos voluptatem? Nihil impedit, 
              aperiam culpa fuga quis similique laudantium ipsum in fugit maxime. 
              Recusandae laudantium rem eos ab!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, 
              culpa! Eligendi facere, sint labore nam officia dolore veniam facilis expedita, 
              porro distinctio ipsum totam ut?
            </p>
            <p>
              Perferendis consectetur veritatils veniam, ratione,
              distinctio iste dignissimos alias ipsum minima Consequatur?
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt='Our vision Image' />
          </div>
        </div>
      </section>


      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt='Our Mission Image' />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor sequi, 
              laboriosam reiciendis iusto rem ex sapiente quaerat. Labore nobis, 
              facilis a ratione dignissimos voluptatem? Nihil impedit, 
              aperiam culpa fuga quis similique laudantium ipsum in fugit maxime. 
              Recusandae laudantium rem eos ab!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, 
              culpa! Eligendi facere, sint labore nam officia dolore veniam facilis expedita, 
              porro distinctio ipsum totam ut?
            </p>
            <p>
              Perferendis consectetur veritatils veniam, ratione,
              distinctio iste dignissimos alias ipsum minima Consequatur?
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About