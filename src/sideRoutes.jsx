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
            <Route path="/ecu-programlama/*" element={<EcuProgramlamaRoutes />} />
            <Route path="/hizmetlerimiz/*" element={<HizmetlerimizRoutes />} />
        </Routes>
    );
}

function EcuProgramlamaRoutes() {
    return (
        <Routes>
            <Route path="/ecu-programlama/alientech" element={<Alientech />} />
            <Route path="/ecu-programlama/dimsport" element={<Dimsport />} />
            <Route path="/ecu-programlama/magic-motorsports" element={<MagicMotorsports />} />
            <Route path="/ecu-programlama/auto-vei" element={<AutoVei />} />
        </Routes>
    );
}

function HizmetlerimizRoutes() {
    return (
        <Routes>
            <Route path="/hizmetlerimiz/adblue-dpf-egr" element={<AdblueDpfEgr />} />
            <Route path="/hizmetlerimiz/ariza-tespit" element={<ArizaTespit />} />
            <Route path="/hizmetlerimiz/burbles-popcorn" element={<BurblesPopcorn />} />
            <Route path="/hizmetlerimiz/chiptuning" element={<Chiptuning />} />
            <Route path="/hizmetlerimiz/dsg-kart" element={<DSGKart />} />
            <Route path="/hizmetlerimiz/hiz-limiti" element={<HizLimiti />} />
            <Route path="/hizmetlerimiz/lambda-sistemi" element={<LambdaSistemi />} />
            <Route path="/hizmetlerimiz/paramlama" element={<Paramlama />} />
        </Routes>
    );
}
