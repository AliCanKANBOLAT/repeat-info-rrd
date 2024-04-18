import React from 'react';

const googleMapsUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.267676890057!2d29.188406!3d40.906084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac53916d7d89d%3A0xcb36d2144a8ee11!2sEsentepe%2C%20ECUBOOST%20KARTAL%2C%20S%C4%B1raselviler%20Sk.%20No%3A16%2C%2034862%20Kartal%2F%C4%B0stanbul!5e0!3m2!1sen!2str!4v1649892542791!5m2!1sen!2str';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4">
            <div style={{ position: 'relative', width: '100%', height: '100%', paddingBottom: '60%', zIndex: 0 }}>
              <iframe
                src={googleMapsUrl}
                width="100%"
                height="100%"
                style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', border: '0' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="col-sm-4 text-center">
            <h5>Çalışma Saatleri</h5>
            <hr />
            <p>Haftaiçi: 09:00-18:00</p>
            <p>Cumartesi: 09:00-15:00</p>
            <p>Pazar: Kapalı</p>
          </div>
          <div className="col-sm-4">
            <h5>İletişim Bilgileri</h5>
            <hr />
            <p>Adres: Esentepe, Sıraselviler Sk. No:16, 34862 Kartal/İstanbul</p>
            <p>Telefon: +90 535 604 96 53</p>
            <p>Mail: Ecuboosts-info@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
