import Header from '../../component/Header'
import HeaderImage from '../../images/header_bg_3.jpg'




import './gellery.css'

const Gallery = () => {

  const galleryLength=15;
  const images=[]

  for(let i=1; i<=galleryLength; i++)
  {
    images.push(require(`../../images/gallery${i}.jpg`))
  }
  console.log(images);
  return (
    <>
    <Header title="Our Gallery" image={HeaderImage}>
      Quisquam id tenetur adipisci  nesciunt ipsum amet in Quisquam,
      architecto nosturm nobis, est, deserunt odio possium inventore 
      eveniet illum praesentim.
    </Header>

    <section className="gallery">
      <div className="container gallery__container">
        {
          images.map((image, index)=>{
            return <article key={index}> 
              <img src={image} alt={`Gallery Image ${index+1}`}/>
            </article>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Gallery