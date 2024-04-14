import { Routes, Route } from "react-router-dom";
import Anasayfa from "./components/Anasayfa";
import Randevu from "./components/Randevu";
import Iletisim from "./components/İletisim";
import { Alientech, Dimsport, MagicMotorsports, AutoVei } from './components/EcuProgramlama';

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
        </Routes>
    );
}
