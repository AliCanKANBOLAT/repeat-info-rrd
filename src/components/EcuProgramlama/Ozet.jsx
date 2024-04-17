import React from 'react';

function Ozet() {
    return (
        <div className="container py-5">
            <h2>Karşılaştırma Tablosu</h2>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Özellikler</th>
                            <th>Dimsport</th>
                            <th>Alientech</th>
                            <th>Magic Motorsports</th>
                            <th>Auto Vei</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Yazılım ve Donanım</td>
                            <td>MyGenius, My Genius2, New Trasdata</td>
                            <td>KessV2, K-TAG, Powergate</td>
                            <td>Flex, Flexbox, Magic Motorsports Flasher</td>
                            <td>Auto Vei Remapper, Auto Vei Flasher</td>
                        </tr>
                        <tr>
                            <td>Performans Artışı</td>
                            <td>Yüksek motor gücü, tork ve gaz tepkisi</td>
                            <td>Yüksek güç ve tork, iyi gaz tepkisi</td>
                            <td>Yüksek motor gücü, tork ve hızlı gaz tepkisi</td>
                            <td>Yüksek motor gücü, iyi tork ve hızlı gaz tepkisi</td>
                        </tr>
                        <tr>
                            <td>Yakıt Ekonomisi</td>
                            <td>İyi yakıt ekonomisi sağlar</td>
                            <td>İyi yakıt tasarrufu sağlar</td>
                            <td>Yakıt ekonomisini optimize eder</td>
                            <td>Yakıt ekonomisini optimize eder</td>
                        </tr>
                        <tr>
                            <td>Kullanım Kolaylığı</td>
                            <td>Kolay kullanım sağlar</td>
                            <td>Kullanımı kolaydır</td>
                            <td>Kullanıcı dostu arayüz</td>
                            <td>Kullanımı basittir</td>
                        </tr>
                        <tr>
                            <td>Destek Hizmetleri</td>
                            <td>Güçlü müşteri desteği sunar</td>
                            <td>İyi müşteri hizmetleri</td>
                            <td>Güçlü teknik destek</td>
                            <td>İyi teknik destek</td>
                        </tr>
                        <tr>
                            <td>Fiyat</td>
                            <td>Orta seviye fiyatlandırma</td>
                            <td>Yüksek fiyatlandırma</td>
                            <td>Fiyatlar değişken</td>
                            <td>Orta seviye fiyatlandırma</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Ozet;
