import atv53 from './images/atv53.jpg';
import manTruckh from './images/manTruckh.jpg';
import OHW53 from './images/OHW53.jpg';
import raceCar53 from "./images/raceCar53.jpg";
import mercedesTruck from "./images/mercedesTruck.jpg";
import volvoTruck from "./images/volvoTruck.jpg";


export default function MyCarousel() {
  // Carousel içindeki resimlerin src'leri
  const images = [
    volvoTruck,
    manTruckh,
    mercedesTruck,
    raceCar53,
    OHW53,
    atv53,
  ];

  return (
    <div className="row">
      <div className="col-sm-8">
        <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
          <div className="carousel-inner">
            {images.map((image, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <img src={image} className="d-block w-100" alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
