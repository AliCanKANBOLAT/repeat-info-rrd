import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body" 
      data-bs-theme="dark">
         <div className="container" >
        <NavLink className="navbar-brand" to="/">EcuBoost</NavLink>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
         data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" 
            aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
         <NavLink className="nav-link active" aria-current="page" to="/">Anasayfa</NavLink>
        </li>
        <li className="nav-item">
         <NavLink className="nav-link" to="/Randevu">Randevu</NavLink>
        </li>
        <li className="nav-item">
         <NavLink className="nav-link" to="Iletisim">iletişim</NavLink>
        </li>
        <li className="nav-item dropdown" >
         <NavLink className="nav-link dropdown-toggle" to="Ecu-Programlama" role="button" 
         data-bs-toggle="dropdown" aria-expanded="false">
            Ecu Programlama
          </NavLink>
          <ul className="dropdown-menu ">
            <li><NavLink className="dropdown-item" to="Ecu-Programlama/Dimsport" style= {{backgroundColor:"black" }}>Dimsport</NavLink></li>
            <li><NavLink className="dropdown-item" to="Ecu-Programlama/MagicMotorsports" style= {{backgroundColor:"black"}}>MagicMotorsports</NavLink></li>
            <li><NavLink className="dropdown-item" to="Ecu-Programlama/Alientech" style= {{backgroundColor:"black"}}>Alientech</NavLink></li>
            <li><NavLink className="dropdown-item" to="Ecu-Programlama/AutoVei" style= {{backgroundColor:"black"}}>AutoVei</NavLink></li>
              </ul>
         </li>
         <li className="nav-item dropdown">
         <NavLink className="nav-link dropdown-toggle" to="Hizmetlerimiz" role="button" 
         data-bs-toggle="dropdown" aria-expanded="false">
            Hizmetlerimiz
          </NavLink>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="Hizmetlerimiz/Chiptuning" style= {{backgroundColor:"black"}}>Chiptuning</NavLink></li>
            <li><NavLink className="dropdown-item" to="Hizmetlerimiz/ArizaTespiti" style= {{backgroundColor:"black"}}>Arıza Tespiti ve çözümü</NavLink></li>
            <li><NavLink className="dropdown-item" to="Hizmetlerimiz/Adblue-DPF-EGR-Cozumleri" style= {{backgroundColor:"black"}}>Adblue/DPF/EGR çözümleri</NavLink></li>
            <li><NavLink className="dropdown-item" to="Hizmetlerimiz/Hız-Limiti-İptali" style= {{backgroundColor:"black"}}>Hız Limit kaldırma</NavLink></li>
            <li><NavLink className="dropdown-item" to="Hizmetlerimiz/Lambda-sistem-Cozumleri" style= {{backgroundColor:"black"}}>Lambda sistem çözümleri</NavLink></li>
            <li><NavLink className="dropdown-item" to="Hizmetlerimiz/Burbles&PopCorn" style= {{backgroundColor:"black"}}>Burbles&Popcorn</NavLink></li>
            <li><NavLink className="dropdown-item" to="Hizmetlerimiz/DSG Sanziman-Karti-Guncellemesi" style= {{backgroundColor:"black"}}>DSG Şanzıman Kartı Güncellemesi</NavLink></li>
            <li><NavLink className="dropdown-item" to="Hizmetlerimiz/Paramlama" style= {{backgroundColor:"black"}}>Paramlama</NavLink></li>
              </ul>
         </li>
         </ul>
        </div>
        </div>
    </nav>
    </>
  );
}
