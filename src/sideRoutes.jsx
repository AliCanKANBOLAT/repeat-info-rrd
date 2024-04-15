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
            <Route path="/Alientech" element={<Alientech />} />
            <Route path="/Dimsport" element={<Dimsport />} />
            <Route path="/MagicMotorsports" element={<MagicMotorsports />} />
            <Route path="/AutoVei" element={<AutoVei />} />
            <Route path="/AdblueDpfEgr" element={<AdblueDpfEgr />} />
            <Route path="/ArizaTespit" element={<ArizaTespit />} />
            <Route path="/BurblesPopcorn" element={<BurblesPopcorn />} />
            <Route path="/Chiptuning" element={<Chiptuning />} />
            <Route path="/DSGKart" element={<DSGKart />} />
            <Route path="/HizLimiti" element={<HizLimiti />} />
            <Route path="/LambdaSistemi" element={<LambdaSistemi />} />
            <Route path="/Paramlama" element={<Paramlama />} />
        </Routes>
    );
}

