import { NavLink } from 'react-router-dom';
import EcuBoostLogo from "./components/images/EcuBoostLogo.jpg";

const navbarStyle = {
  backgroundImage: `url(${EcuBoostLogo})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  width: '300px',
  height: '100px',
};

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body  border border-5" data-bs-theme="dark">
      <div className="container-fluid m-2" style={{ paddingLeft: '0' }}>
        <div className="navbar-brand" style={navbarStyle}></div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown" style={{ width: '50%' }}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">Anasayfa</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Randevu">Randevu</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Iletisim">İletişim</NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="/Ecu-Programlama" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Ecu Programlama
              </NavLink>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/Ecu-Programlama/Dimsport">Dimsport</NavLink></li>
                <li><NavLink className="dropdown-item" to="/Ecu-Programlama/MagicMotorsports">MagicMotorsports</NavLink></li>
                <li><NavLink className="dropdown-item" to="/Ecu-Programlama/Alientech">Alientech</NavLink></li>
                <li><NavLink className="dropdown-item" to="/Ecu-Programlama/AutoVei">AutoVei</NavLink></li>
                <li><NavLink className="dropdown-item" to="/Ecu-Programlama/Ozet">Özet</NavLink></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="/Hizmetlerimiz" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Hizmetlerimiz
              </NavLink>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/Hizmetlerimiz/Chiptuning">Chiptuning</NavLink></li>
                <li><NavLink className="dropdown-item" to="/Hizmetlerimiz/ArizaTespiti">Arıza Tespiti ve Çözümü</NavLink></li>
                <li><NavLink className="dropdown-item" to="/Hizmetlerimiz/AdblueDpfEgr">Adblue/DPF/EGR Çözümleri</NavLink></li>
                <li><NavLink className="dropdown-item" to="/Hizmetlerimiz/hizLimiti">Hız Limit Kaldırma</NavLink></li>
                <li><NavLink className="dropdown-item" to="/Hizmetlerimiz/lambdaSistemi">Lambda Sistem Çözümleri</NavLink></li>
                <li><NavLink className="dropdown-item" to="/Hizmetlerimiz/burblesPopcorn">Burbles&Popcorn</NavLink></li>
                <li><NavLink className="dropdown-item" to="/Hizmetlerimiz/dsgKart">DSG Şanzıman Kartı Güncellemesi</NavLink></li>
                <li><NavLink className="dropdown-item" to="/Hizmetlerimiz/Paramlama">Paramlama</NavLink></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
