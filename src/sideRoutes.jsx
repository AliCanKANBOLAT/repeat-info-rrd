import { Routes, Route } from "react-router-dom";
import Anasayfa from "./components/Anasayfa";
import Randevu from "./components/Randevu";
import Iletisim from "./components/İletisim";
import { Alientech, Dimsport, MagicMotorsports, AutoVei } from './components/EcuProgramlama';
import { AdblueDpfEgr, ArizaTespit, BurblesPopcorn, Chiptuning, DSGKart, HizLimiti, LambdaSistemi, Paramlama } from './components/Hizmetlerimiz';

export default function SideRoute() {
    return (
        <Routes>
            <Route path="/" element={<Anasayfa />} />
            <Route path="/randevu" element={<Randevu />} />
            <Route path="/iletisim" element={<Iletisim />} />
            <Route path="/ecu-programlama/alientech" element={<Alientech />} />
            <Route path="/ecu-programlama/dimsport" element={<Dimsport />} />
            <Route path="/ecu-programlama/magicmotorsports" element={<MagicMotorsports />} />
            <Route path="/ecu-programlama/autovei" element={<AutoVei />} />
            <Route path="/hizmetlerimiz/chiptuning" element={<Chiptuning />} />
            <Route path="/hizmetlerimiz/arizatespiti" element={<ArizaTespit />} />
            <Route path="/hizmetlerimiz/adblueDpfEgr" element={<AdblueDpfEgr />} />
            <Route path="/hizmetlerimiz/hizLimiti" element={<HizLimiti />} />
            <Route path="/hizmetlerimiz/lambdaSistemi" element={<LambdaSistemi />} />
            <Route path="/hizmetlerimiz/burblesPopcorn" element={<BurblesPopcorn />} />
            <Route path="/hizmetlerimiz/dsgKart" element={<DSGKart />} />            
            <Route path="/hizmetlerimiz/paramlama" element={<Paramlama />} />
        </Routes>
    );
}


