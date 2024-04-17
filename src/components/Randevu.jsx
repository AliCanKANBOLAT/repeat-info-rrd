import React, { useState } from 'react';

export default function Randevu() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSavePhoneNumber = () => {
    if (!isValidPhoneNumber(phoneNumber)) {
      setErrorMessage('Lütfen geçerli bir telefon numarası girin.');
      setPhoneNumber('');
      return;
    }
    setSuccessMessage('Telefon numaranız kaydedildi, EN KISA SÜREDE DÖNÜŞ yapılacaktır.!');
    setPhoneNumber('');
    setErrorMessage('');
    setTimeout(() => {
      setSuccessMessage('');
    }, 4000);
  };

  const handleChangePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
    setErrorMessage('');
    setSuccessMessage('');
  };

  const isValidPhoneNumber = (phoneNumber) => {
    const regex = /^(05\d{9})$/;
    return regex.test(phoneNumber);
  };

  return (
    <div className="container-fluid bg-light" style={{ minHeight: '100vh' }}>
      <div className="row justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="col-md-6">
          <div className="card shadow-lg p-3 mb-5 bg-white rounded">
            <div className="card-body">
              <h5 className="card-title">Randevu Al</h5>
              <div className="form-group">
                <label htmlFor="phoneNumber">Telefon Numaranız</label>
                <div className="input-group">
                  <input
                    type="tel"
                    className={`form-control ${errorMessage && 'is-invalid'}`}
                    id="phoneNumber"
                    placeholder="05..."
                    aria-label="Telefon numarası"
                    aria-describedby="whatsappLink"
                    value={phoneNumber}
                    onChange={handleChangePhoneNumber}
                  />
                  <div className="input-group-append">
                    <button className="btn btn-success" type="button" onClick={handleSavePhoneNumber}>
                      Kaydet
                    </button>
                    <button className="btn btn-outline-secondary" type="button" id="whatsappLink">
                      <a
                        href={`https://api.whatsapp.com/send?phone=+905356049653&text=EcuBoost için Randevu talebi: `}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        WhatsApp
                      </a>
                    </button>
                  </div>
                  {errorMessage && <div className="invalid-feedback">{errorMessage}</div>}
                </div>
              </div>
              {successMessage && <div className="alert alert-success" role="alert">{successMessage}</div>}
              <div className="alert alert-info" role="alert">
                Telefon numaranızı girerseniz WhatsApp'tan anlık dönüş alamadığınız zamanlarda telefon numaranız sistemimize eklenerek en kısa zamanda geri bildirim alabilirsiniz veya doğrudan WhatsApp linkine tıklayarak canlı destek alabilirsiniz.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
