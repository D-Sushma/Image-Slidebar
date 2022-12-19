import { Fade } from 'react-slideshow-image';
// import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages  = [
    {
        url: 'https://thumbs.dreamstime.com/b/mother-daughter-sitting-table-colored-plasticine-modeling-looking-each-other-smiling-concept-s-day-233123829.jpg',
        caption: 'Slide 1'
      }, 
    {
        url: 'https://thumbs.dreamstime.com/b/mother-daughter-sitting-table-colored-plasticine-modeling-looking-each-other-smiling-concept-s-day-233123829.jpg',
        caption: 'Slide 1'
      },
  {
    url: 'https://www.hdwallpaperspulse.com/wp-content/uploads/2014/05/27/523.jpeg',
    caption: 'Slide 2'
  },
  {
    url: 'https://www.themasterslawncare.com/sites/default/files/blog/good-day.jpg',
    caption: 'Slide 3'
  },
  
];

const Slideshow = () => {
    return (
        <div className="slide-container">
        <Fade>
          {fadeImages.map((fadeImage, index) => (
            <div className="each-fade" key={index}>
              <div className="image-container">
                <img src={fadeImage.url} className="slide-image" alt=''/>
              </div>
              <h2>{fadeImage.caption}</h2>
            </div>
          ))}
        </Fade>
      </div>
    )
}

export default Slideshow;