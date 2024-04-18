import MyCarousel from "./MyCarousel";
import AnasayfaCards from "./AnasayfaCards";
import cardsInfo from "./cardsInfo";
import TruckBrands from "./TruckBrands";

export default function AnaSayfa() {
    return (
      <>
        <div className="container-fluid"  style={{ backgroundColor: "#34495e" }}>
        <div className="row">
          <div className="col-sm-8 mt-2">
            <MyCarousel />
          </div>
          <div className="col-sm-4 mt-2">
            {cardsInfo.map((item,index) => (<AnasayfaCards key={index} value={item} />))}
            <TruckBrands />
          </div>
        </div>
        </div>
      </>
    );
  }
  