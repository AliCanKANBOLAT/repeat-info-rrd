import { Routes, Route } from "react-router-dom";
import Anasayfa from "./components/Anasayfa";
import Randevu from "./components/Randevu";
import Iletisim from "./components/İletisim";
import NoPage from "./components/NoPage";
import { Alientech, Dimsport, MagicMotorsports, AutoVei, Ozet } from './components/EcuProgramlama';
import { AdblueDpfEgr, ArizaTespit, BurblesPopcorn, Chiptuning, DSGKart, HizLimiti, LambdaSistemi, Paramlama } from './components/Hizmetlerimiz';

export default function SideRoute() {
    return (
        <Routes>
            <Route path="/" element={<Anasayfa />} />
            <Route path="/randevu" element={<Randevu />} />
            <Route path="/iletisim" element={<Iletisim />} />
            <Route path="/ecu-programlama/Alientech" element={<Alientech />} />
            <Route path="/ecu-programlama/Dimsport" element={<Dimsport />} />
            <Route path="/ecu-programlama/MagicMotorsports" element={<MagicMotorsports />} />
            <Route path="/ecu-programlama/AutoVei" element={<AutoVei />} />
            <Route path="/ecu-programlama/Ozet" element={<Ozet />} />
            <Route path="/hizmetlerimiz/chiptuning" element={<Chiptuning />} />
            <Route path="/hizmetlerimiz/arizatespiti" element={<ArizaTespit />} />
            <Route path="/hizmetlerimiz/adblueDpfEgr" element={<AdblueDpfEgr />} />
            <Route path="/hizmetlerimiz/hizLimiti" element={<HizLimiti />} />
            <Route path="/hizmetlerimiz/lambdaSistemi" element={<LambdaSistemi />} />
            <Route path="/hizmetlerimiz/burblesPopcorn" element={<BurblesPopcorn />} />
            <Route path="/hizmetlerimiz/dsgKart" element={<DSGKart />} />            
            <Route path="/hizmetlerimiz/paramlama" element={<Paramlama />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
    );
}


