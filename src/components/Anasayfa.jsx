import MyCarousel from "./MyCarousel";
import AnasayfaCards from "./AnasayfaCards";
import cardsInfo from "./cardsInfo";
import TruckBrands from "./TruckBrands";

export default function AnaSayfa() {
    return (
      <>
        <div className="container-fluid"  style={{ backgroundColor: "#34495e" }}>
        <div className="row">
          <div className="col-sm-9 mt-2 rounded">
            <MyCarousel />
          </div>
          <div className="col-sm-2 m-2 mt-4 ms-5">
            {cardsInfo.map((item,index) => (<AnasayfaCards key={index} value={item} />))}
            <TruckBrands />
          </div>
        </div>
        </div>
      </>
    );
  }
  